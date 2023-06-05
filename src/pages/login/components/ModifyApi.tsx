
import { useDispatch } from 'react-redux';
import { modifyApi } from '../../../redux/slices/api.slices';

export default function ModifyApi() {
    const dispatch = useDispatch();
    const handleModifyApi = () => {
        dispatch(modifyApi({name: "ivan"}))
      }
  return (
    <button onClick={handleModifyApi}>Modify Api</button>
  )
}
