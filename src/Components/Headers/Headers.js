import { map } from "lodash"
import { LANGUAGE_DROPDOWN } from "../../Common/Constant"
import { useDispatch } from "react-redux"
import { changeLanguage } from "../../utils/languageSlice"

const Header = () => {

  const dispatch = useDispatch()

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="p-5 flex justify-center">
      <div className="flex items-center justify-end w-2/3">
        {/*       
        <div className="grid grid-cols-6 justify-center">
          <h1 className="text-7xl">SID</h1>
        </div> */}

        <div className="">
          <select 
            onChange={handleLanguageChange}
            className="border border-black rounded-md py-2 px-4"
          >
            {map(LANGUAGE_DROPDOWN, (item) => {
              return <option key={item.identifier} value={item.identifier} >{item.name}</option>
            })}
          </select>
        </div>
        
      </div>
    </div>
    
  )
}

export default Header