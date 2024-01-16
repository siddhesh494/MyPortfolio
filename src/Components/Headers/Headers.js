import { map } from "lodash"
import { useState } from 'react'
import { LANGUAGE_DROPDOWN } from "../../Common/Constant"
import { useDispatch } from "react-redux"
import { changeLanguage } from "../../utils/languageSlice"
import LightModeIcon from '../../../src/assests/PNGs/brightness.png'
import DarkModeIcon from '../../../src/assests/PNGs/night-mode.png'


const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const dispatch = useDispatch()

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }
  const handleThemeChange = () => {
    setIsDarkMode(prev => !prev)
    if(isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="p-9 flex justify-end md:justify-center">
      <div className="flex items-center justify-end w-2/3">
        {/*       
        <div className="grid grid-cols-6 justify-center">
          <h1 className="text-7xl">SID</h1>
        </div> */}
          
        <div className="">
          
          <select 
            onChange={handleLanguageChange}
            className="border border-black dark:border-blue-700 dark:bg-black dark:text-white rounded-md py-2 px-4"
          >
            {map(LANGUAGE_DROPDOWN, (item) => {
              return <option key={item.identifier} value={item.identifier} >{item.name}</option>
            })}
          </select>
        </div>
        <div className="ml-10">
          <img
            src={isDarkMode ? DarkModeIcon : LightModeIcon}
            alt={'lightMode'}
            className="w-8 cursor-pointer"
            onClick={handleThemeChange}
          />
        </div>
      </div>
    </div>
    
  )
}

export default Header