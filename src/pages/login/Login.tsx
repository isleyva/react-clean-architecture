import { useDispatch, useSelector } from "react-redux";
import { login1} from "../../services/public.services";
import { createApi } from "../../redux/slices/Auth/logIn-slice";
import { AppStore } from "../../redux/store";
import { createApiAdapater } from "../../adapters";


export default function Login() {
  const dispatch = useDispatch();
  const api = useSelector((store : AppStore) => store.api);
  const auth = async () => {
    const apiCall = await login1();
    dispatch(createApi(createApiAdapater(apiCall)));
  }
  console.log("api", api);

  return (
    <>
      {<div >
      <h1>Login</h1>
    <div>
      <h2>character 1</h2>
      <p>Id of user:<strong>{api.id}</strong></p>
      <p>Name of user:<strong>{api.name}</strong></p>
      <p>Status of user:<strong>{api.status}</strong></p>
      <button onClick={auth}> log in</button>
      {api.status === "Alive" ? <a href="/private">Private area</a> : null}
      </div>
      </div>}
    </>
  )
}
