import MyPhoto1 from '../../assests/Photos/my2.jpg'

const Home = () => {

  return (
    <div className="flex gap-x-20 gap-y-10 justify-center flex-col my-5 md:flex-row ">
      <div className="flex justify-center">
        <img 
        src={MyPhoto1}
        className='rounded-full h-72'
        />
      </div>
      <div className=" flex flex-col text-center justify-center">
        <span className="text-xl">Hello I'm</span>
        <span className="text-3xl">Siddhesh Shinde</span>
        <span className="text-2xl">I'm a Full Stack Developer</span>
      </div>
    </div>
  )
}

export default Home