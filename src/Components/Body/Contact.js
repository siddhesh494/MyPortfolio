import { useSelector } from 'react-redux'
import envelop from '../../assests/PNGs/envelope.png'
import linkedln from '../../assests/PNGs/linkedin.png'
import { EMAIL_LINK, LINKEDLN_LINK } from '../../Common/Constant' 
import lang from '../../Common/languageConstant'

const Contact = () => {
  const language = useSelector(store => store.language.language)

  return (
    <div className=" mx-10 dark:text-white">
      <div className="flex flex-col text-center">
        <span className="text-md text-slate-800 dark:text-blue-700">{lang[language]?.contactMe?.getInTouch}</span>
        <span className="text-4xl">{lang[language]?.contactMe?.contact}</span>
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex flex-wrap gap-10 min-w-60 border border-black dark:border-blue-700 px-14 py-5 rounded-xl">
          <div 
            className='flex gap-1 cursor-pointer hover:underline'
            onClick={() => {
              window.open(EMAIL_LINK, "_newtab")
            }}
          >
            <img
              src={envelop}
              className='w-6 dark:brightness-0 dark:invert'
              alt="img"
            />
            <span>siddhesh.ss26@gmail.com</span>
          </div>

          <div 
            className='flex gap-1 cursor-pointer  hover:underline'
            onClick={() => {
              window.open(LINKEDLN_LINK,'_newtab')
            }}
          >
            <img 
              src={linkedln}
              className='w-6 dark:brightness-0 dark:invert'
              alt="img"
            />
            <span>Linkedln</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact