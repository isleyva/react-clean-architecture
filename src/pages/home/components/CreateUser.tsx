
import { useDispatch } from 'react-redux';
import { createUser } from '../../../redux/slices/user.slices';


export default function CreateUser() {
    const dispatch = useDispatch();
    const dispatchCreateUser = () => {
    dispatch(createUser({name: "ivan", id: 1}));
    }
  return (
    <button onClick={dispatchCreateUser}>Create User</button>
  )
}
