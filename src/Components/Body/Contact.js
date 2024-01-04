import envelop from '../../assests/PNGs/envelope.png'
import linkedln from '../../assests/PNGs/linkedin.png'
import { EMAIL_LINK, LINKEDLN_LINK } from '../../Common/Constant' 

const Contact = () => {

  return (
    <div className="my-28 mx-10">
      <div className="flex flex-col text-center">
        <span className="text-md text-slate-800">Get In Touch</span>
        <span className="text-4xl">Contact Me</span>
      </div>

      <div className="flex justify-center mt-5">
        <div className="flex flex-wrap gap-10 min-w-60 border border-black px-14 py-5 rounded-xl">
          <div 
            className='flex gap-1 cursor-pointer hover:underline'
            onClick={() => {
              window.open(EMAIL_LINK, "_newtab")
            }}
          >
            <img
              src={envelop}
              className='w-6'
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
              className='w-6'
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