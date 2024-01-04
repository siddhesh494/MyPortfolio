

import Header from "../Headers/Headers"
import { Outlet } from 'react-router-dom'
import '../../App.css'

const AppLayout = () => {

  return (
    <div className=''>
      {/* <Header /> */}
      <Outlet />
    </div>
  )
}

export default AppLayout