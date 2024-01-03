

const Header = () => {

  return (
    <div className="p-5 grid grid-cols-12">
      
      <div className="col-span-6 flex justify-center">
        <h1 className="text-7xl">SID</h1>
      </div>
      <div className=" col-span-6 grid content-center">
        <ul className="grid grid-cols-5 gap-5">
          <li className="text-xl">About</li>
          <li className="text-xl">Experience</li>
          <li className="text-xl">Project</li>
          <li className="text-xl">Blog</li>
          <li className="text-xl">Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Header