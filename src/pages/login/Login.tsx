import { useDispatch, useSelector } from "react-redux";
import { login } from "../../services/public.services";
import { createApi } from "../../redux/slices/api.slices";
import { AppStore } from "../../redux/store";
import { createApiAdapater } from "../../adapters";


export default function Login() {
  const dispatch = useDispatch();
  const api = useSelector((store : AppStore) => store.api);
  const auth = async () => {
    const apiCall = await login();
    dispatch(createApi(createApiAdapater(apiCall)));
  }
  return (
    <>
      <h2>this is login</h2>
      {JSON.stringify({api})}
      <button onClick={auth}>Login</button>
    </>
  )
}
