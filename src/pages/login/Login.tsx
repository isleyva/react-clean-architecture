
import ModifyApi from './components/ModifyApi';
import DeleteApi from './components/DeleteApi';
import CreateApi from './components/CreateApi';
import { useSelector } from 'react-redux';
import { AppStore } from '../../redux/store';

export default function Login() {
const api = useSelector((state : AppStore) => state.api)
  return (
    <>
    {JSON.stringify(api)}
    <CreateApi />
    <ModifyApi />
    <DeleteApi />
    <a href="/">
      home
    </a>
    </>
  )
}
