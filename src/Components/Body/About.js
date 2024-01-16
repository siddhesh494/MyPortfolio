import MyPhoto1 from '../../assests/Photos/my3.jpg'
import Education from '../../assests/PNGs/graduation-cap.png'
import Job from '../../assests/PNGs/briefcase.png'
import { useSelector } from 'react-redux'
import lang from '../../Common/languageConstant'


const About = () => {
  const language = useSelector(store => store.language.language)

  return (
    <div className=" my-28 dark:text-white">
      <div className="flex flex-col text-center">
        <span className="text-md text-slate-800 dark:text-blue-700">{lang[language]?.aboutMe?.knowMe}</span>
        <span className="text-4xl">{lang[language]?.aboutMe?.aboutMe}</span>
      </div>

      <div className="flex justify-center gap-10 mt-5 flex-col items-center lg:flex-row">
        <div className="flex justify-center">
          <img 
          src={MyPhoto1}
          className='rounded-full h-72'
          alt="img"
          />
        </div>

        <div className="flex justify-center flex-col items-center mx-10">
          <div className="flex flex-col gap-10 sm:flex-row ">
            <div className="border border-black dark:border-blue-700 py-5 px-20 rounded-3xl flex items-center text-center flex-col hover:shadow-xl dark:hover:shadow-blue-700 dark:hover:shadow-lg">
              <img src={Job} className='w-7 dark:invert dark:brightness-0' alt="img" />
              
              <span className="font-bold">{lang[language]?.aboutMe?.experience}</span>
              <span>{lang[language]?.aboutMe?.year}</span>
              <span>{lang[language]?.aboutMe?.fsd}</span>
            </div>

            <div className="border border-black dark:border-blue-700 py-5 px-20 rounded-3xl flex items-center text-center flex-col hover:shadow-xl dark:hover:shadow-blue-700 dark:hover:shadow-lg">
              <img src={Education} className='w-7 dark:invert dark:brightness-0' alt="img" />
              <span className="font-bold">{lang[language]?.aboutMe?.education}</span>
              <span>{lang[language]?.aboutMe?.eng}</span>
              <span>{lang[language]?.aboutMe?.hsc}</span>
            </div>

          </div>
          <div className="max-w-[40rem] mt-5 flex flex-col">
            <span>
              {lang[language]?.aboutMe?.aboutMe1}
            </span>
            <span className="mt-1">
              {lang[language]?.aboutMe?.aboutMe2}
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About