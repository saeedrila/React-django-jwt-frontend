import { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import Loading from './USER/Loading'

const ProtectedRoute = ({ children }) => {
  const [isLoading,setIsLoading] = useState(true)
  const APIURL = useSelector((state) => state.APIURL.url);
  const [is_authenticate, setAuthed] = useState(false);
  const token = localStorage.getItem("token");
  console.log(token)

  const data = useCallback(() => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(`${APIURL}/check_auth/`)
      .then((r) => {
        if (r) {
          setAuthed(true);
          console.log('true');
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        } else {
          setAuthed(false);
          setIsLoading(false);
          console.log('false');
        }
      })
      .catch((err) => {
        setAuthed(false);
        setIsLoading(false);
        console.log('catch_false');
      });
  }, [token, setAuthed, setIsLoading, APIURL]);
  

  useEffect(() => {
    data();
  }, [data]);
  

  return isLoading? <Loading/> :(is_authenticate ? children : <Navigate to="/" replace />);
};

export default ProtectedRoute;
