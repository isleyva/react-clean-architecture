import { useSelector } from "react-redux";
import CreateUser from "./components/CreateUser";
import ModifyUser from "./components/ModifyUser";
import ResetUser from "./components/ResetUser";
import { AppStore } from "../../redux/store";

export default function Home() {
  const user = useSelector((state: AppStore) => state.user);
  return (
    <>
      {JSON.stringify(user)}
      <CreateUser />
      <ModifyUser />
      <ResetUser />
      <a href="/login">Login</a>
    </>
  );
}
