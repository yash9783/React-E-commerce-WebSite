import React from 'react'
import { Products } from './Products'

export const Home = () => {
  return (
      <>
    <div classNameName='hero'>
        <div className="card bg-dark text-white border-0">
  <img src="/assests/back.jpg" className="card-img" height="550px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <h5 className="card-title display-3 fw-bolder mb-0 text-center">NEW SEASON ARRIVAL</h5>
    
    <p className="card-text lead fs-2 text-center">CHECK OUT ALL THE TRENDS</p>
  </div>
</div>
    </div>
    <Products/>
    </>
  )
}
export default Home