import MyPhoto1 from '../../assests/Photos/my2.jpg'
import Linkedln from '../../assests/PNGs/linkedin.png'
import Medium from '../../assests/PNGs/medium.png'
import { LINKEDLN_LINK, MEDIUM_LINK } from '../../Common/Constant'

const Home = () => {

  return (
    <div className="mt-20 flex gap-x-20 gap-y-10 justify-center flex-col my-5 md:flex-row ">
      <div className="flex justify-center">
        <img 
        src={MyPhoto1}
        className='rounded-full h-72'
        />
      </div>
      <div className=" flex flex-col text-center justify-center items-center">
        <span className="text-xl text-slate-800">Hello I'm</span>
        <span className="text-3xl">Siddhesh Shinde</span>
        <span className="text-2xl">I'm a Full Stack Developer</span>
        <div className='mt-3'>
          <a
            className='px-6 py-2 border border-black rounded-xl hover:bg-black hover:text-white'
            href='./CV.pdf'
            download="Siddhesh_Shinde_CV.pdf"
            
          >
            Download CV
          </a>
        </div>
        <div className='mt-3 flex gap-x-4'>
          <img 
            src={Linkedln}
            className='w-7 cursor-pointer'
            onClick={() => {
              window.open(LINKEDLN_LINK, "_newtab")
            }}
          />
          <img 
            src={Medium}
            className='w-7 cursor-pointer'
            onClick={() => {
              window.open(MEDIUM_LINK, "_newtab")
            }}
          />
        </div>
        
      </div>
      
    </div>
  )
}

export default Home