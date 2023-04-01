import React from 'react';
import { Route, Routes } from 'react-router-dom'

const UserRoute = (props) =>  {
  return (
    <Routes>
    <Route path={props.path} exact={props.exact} element={props.element}></Route>
    </Routes>
  )
}

export default UserRoute
