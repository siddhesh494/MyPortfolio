

import Header from "../Headers/Headers"
import { Outlet } from 'react-router-dom'

const AppLayout = () => {

  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

export default AppLayout