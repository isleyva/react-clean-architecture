import React from "react";
import { useDispatch } from "react-redux";
import { modifyUser } from "../../../redux/slices/user.slices";

export default function ModifyUser() {
  const dispatch = useDispatch();
  const handleModifyUser = () => {
    dispatch(modifyUser({ name: "gus" }));
  };
  return <button onClick={handleModifyUser}>Modify User</button>;
}
