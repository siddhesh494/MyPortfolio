import MyPhoto1 from '../../assests/Photos/my3.jpg'


const About = () => {

  return (
    <div className=" my-40">
      <div className="flex flex-col text-center">
        <span className="text-md">Get To Know Me</span>
        <span className="text-4xl">About Me</span>
      </div>

      <div className="flex justify-center gap-10 mt-5 flex-col lg:flex-row">
      <div className="flex justify-center">
        <img 
        src={MyPhoto1}
        className='rounded-full h-72'
        />
      </div>

        <div className="flex justify-center flex-col items-center mx-10">
          <div className="flex flex-col gap-10 sm:flex-row ">
            <div className="border border-black py-5 px-20 rounded-3xl flex text-center flex-col hover:shadow-xl">
              <span className="font-bold">Experience</span>
              <span>2+ Year</span>
              <span>Full Stack Developer</span>
            </div>

            <div className="border border-black py-5 px-20 rounded-3xl flex text-center flex-col hover:shadow-xl">
              <span className="font-bold">Education</span>
              <span>Bachelor of Engineering</span>
              <span>Higher Secondary Certificate </span>
            </div>

          </div>
          <div className="max-w-[40rem] mt-5 flex flex-col">
            <span>
              I am a Software developer with 2+ years of experience in writing efficient and reusable code. 
              I help companies to achieve their product development target. The technology I am familiar with is Javascript,
              Typescript, Node.js, Express.js, and React.
            </span>
            <span className="mt-1">
              I love to apply my software development experience to help tech companies create their required product.
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About