import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <>
        <form className='mx-auto mb-2 my-5'>
  <div className="mb-3 mx-5 mb-2 py-2">
    <label for="exampleInputEmail1" className="form-label display-8 shadow-sm bg-white mx-auto mb-2">Email address</label>
    <input type="email" className="form-control shadow-sm bg-white mx-auto mb-2" id="exampleInputEmail1 " aria-describedby="emailHelp" />
  </div>
  <div className="mb-3 mx-5">
    <label for="exampleInputPassword1" className="form-label shadow-sm bg-white display-8">Password</label>
    <input type="password" className="form-control shadow-sm bg-white" id="exampleInputPassword1"/>
  </div>
  <NavLink to={'/products'} className="btn btn-outline-dark mx-5">Login in</NavLink>
</form>
</>
    </div>
  )
}
