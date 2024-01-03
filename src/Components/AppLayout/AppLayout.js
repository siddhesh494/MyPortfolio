

import Header from "../Headers/Headers"
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

  return (
    <div className=''>
      {/* <Header /> */}
      <Outlet />
    </div>
  )
}

export default AppLayout