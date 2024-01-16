import { useSelector } from 'react-redux'
import MyPhoto1 from '../../assests/Photos/my2.jpg'
import Linkedln from '../../assests/PNGs/linkedin.png'
import Medium from '../../assests/PNGs/medium.png'
import { LINKEDLN_LINK, MEDIUM_LINK } from '../../Common/Constant'
import lang from '../../Common/languageConstant'

const Home = () => {
  const language = useSelector(store => store.language.language)
  // console.log(language)
  
  
  return (
    <div className=" mt-5 md:mt-16 flex gap-x-20 gap-y-10 justify-center flex-col my-5 md:flex-row ">
      <div className="flex justify-center">
        <img 
        src={MyPhoto1}
        className='rounded-full h-72'
        alt="img"
        />
      </div>
      <div className=" flex flex-col text-center justify-center items-center">
        <span className="text-xl text-slate-800 dark:text-blue-700">{lang[language]?.home?.helloText}</span>
        <span className="text-3xl dark:text-white">{lang[language]?.home?.name}</span>
        <span className="text-2xl dark:text-white">{lang[language]?.home?.aboutText}</span>
        <div className='mt-3'>
          <a
            className='dark:text-white dark:hover:text-blue-700 dark:hover:border-blue-700  px-6 py-2 border dark:border-white border-black rounded-xl hover:bg-black  hover:text-white'
            href='./CV.pdf'
            download="Siddhesh_Shinde_CV.pdf"
            
          >
            {lang[language]?.home?.donwloadCV}
          </a>
        </div>
        <div className='mt-3 flex gap-x-4'>
          <img 
            src={Linkedln}
            className='w-7 cursor-pointer dark:brightness-0 dark:invert	'
            onClick={() => {
              window.open(LINKEDLN_LINK, "_newtab")
            }}
            alt="img"
          />
          <img 
            src={Medium}
            className='w-7 cursor-pointer dark:brightness-0 dark:invert	'
            onClick={() => {
              window.open(MEDIUM_LINK, "_newtab")
            }}
            alt="img"
          />
        </div>
        
      </div>
      
    </div>
  )
}

export default Home