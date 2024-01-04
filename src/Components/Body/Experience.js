
import { EXPERIENCE } from '../../Common/Constant'
import { map } from 'lodash'
const Experience = () => {

  return (
    <div className="my-28">
      <div className="flex flex-col text-center">
        <span className="text-md text-slate-800">Explore My</span>
        <span className="text-4xl">Experience</span>
      </div>

      <div className="flex flex-col gap-10 justify-center mt-5 items-center  md:flex-row md:items-start mx-10">
        
        <div className="border border-black rounded-3xl min-w-80 p-5 text-center md:min-w-96">
          <span className="text-xl font-bold">Web Technologies</span>
          <div className="grid justify-items-center grid-cols-12 mt-5 gap-y-5 ">
            {map(EXPERIENCE.Web_Technologies, (item, index) => {
              return (
                <div className="grid col-span-6 " key={index}>
                  <span className="text-lg font-medium	">{item.technology}</span>
                  <span className='text-slate-600'>{item.level}</span>
                </div>
              )
            })}
            
          </div>
        </div>
        
        <div className="border border-black rounded-3xl min-w-80 p-5 text-center md:min-w-96">
          <span className="text-xl font-bold">Other Concepts</span>
          <div className="grid justify-items-center grid-cols-12 mt-5 gap-y-5 ">
            {map(EXPERIENCE.others, (item, index) => {
              return (
                <div className="grid col-span-6 " key={index}>
                  <span className="text-lg font-medium">{item.technology}</span>
                  <span className='text-slate-600'>{item.level}</span>
                </div>
              )
            })}
            
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience