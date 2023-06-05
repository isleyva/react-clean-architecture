
import { useDispatch } from 'react-redux';
import { resetApi } from '../../../redux/slices/api.slices';

export default function DeleteApi() {
    const dispatch = useDispatch();
    const handleDeleteApi = () => {
        dispatch(resetApi())
      }
  return (
    <button onClick={handleDeleteApi}>Delete Api</button>
  )
}
