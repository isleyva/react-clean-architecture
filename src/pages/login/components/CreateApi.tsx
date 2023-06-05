
import { createApi } from '../../../redux/slices/api.slices';
import { useDispatch } from 'react-redux';
import { createApiAdapater } from '../../../adapters';
import { login } from '../../../services/public.services';

export default function CreateApi() {
    const dispatch = useDispatch();
    
    const handleCreateApi = async () => {
        const Apicall = await login();
        dispatch(createApi(createApiAdapater(Apicall))) ;
        }
  return (
    <button onClick={handleCreateApi}>Create Api</button>
  )
}
