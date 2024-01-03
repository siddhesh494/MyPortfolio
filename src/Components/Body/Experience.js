
import { EXPERIENCE } from '../../Common/Constant'
import { map } from 'lodash'
const Experience = () => {

  return (
    <div className=" my-40">
      <div className="flex flex-col text-center">
        <span className="text-md">Explore My</span>
        <span className="text-4xl">Experience</span>
      </div>

      <div className="flex flex-col gap-10 justify-center mt-5 items-center  md:flex-row md:items-start">
        
        <div className="border border-black rounded-3xl w-96 p-5 text-center">
          <span className="text-xl font-bold">Web Technologies</span>
          <div className="grid justify-items-center grid-cols-12 mt-5 gap-y-5 ">
            {map(EXPERIENCE.Web_Technologies, (item, index) => {
              return (
                <div className="grid col-span-6 " key={index}>
                  <span className="text-lg">{item.technology}</span>
                  <span>{item.level}</span>
                </div>
              )
            })}
            
          </div>
        </div>
        
        <div className="border border-black rounded-3xl w-96 p-5 text-center">
          <span className="text-xl font-bold">Other Concepts</span>
          <div className="grid justify-items-center grid-cols-12 mt-5 gap-y-5 ">
            {map(EXPERIENCE.others, (item, index) => {
              return (
                <div className="grid col-span-6 " key={index}>
                  <span className="text-lg">{item.technology}</span>
                  <span>{item.level}</span>
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