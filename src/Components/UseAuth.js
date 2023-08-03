import axios from "axios";
import * as React from "react";
import { useSelector } from "react-redux";

function UseAuth() {
  const [authed, setAuthed] = React.useState(false);
  const APIURL = useSelector((state) => state.APIURL.url);

  const Checkauth = async () => {
    const response = await axios.get(`${APIURL}/check_auth/`).then((r) => {
      if (r) {
        setAuthed(true);
      } else {
        setAuthed(false);
      }
    });
  };

  return authed;
}

export default UseAuth;
