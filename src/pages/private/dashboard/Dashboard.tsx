import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { resetApi } from '../../../redux/slices/Auth/logIn-slice';
import { AppStore } from '../../../redux/store';

export default function Dashboard() {
  const dispatch = useDispatch();
  const api = useSelector((store : AppStore) => store.api);
  const logout = () => {  
    dispatch(resetApi());
  }

  return (
    <>
    <div>Dashboard</div>
    {api.id === 3 ? <a href="/private/home">to home</a> : <p>Tu id no es el correcto</p>}
    <button onClick={logout}>Logout</button>
    </>
  )
}
