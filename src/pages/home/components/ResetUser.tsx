import React from 'react'
import {  resetUser } from '../../../redux/slices/user.slices';
import { useDispatch } from 'react-redux';

export default function ResetUser() {
    const dispatch = useDispatch();
    const handleResetUser = () => {
    dispatch(resetUser());
    }
  return (
    <button onClick={handleResetUser}>Reset User</button>
  )
}
