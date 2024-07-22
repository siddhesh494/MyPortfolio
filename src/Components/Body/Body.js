import About from "./About"
import Blog from "./Blog"
import Contact from "./Contact"
import Experience from "./Experience"
import Home from "./Home"
import Headers from '../Headers/Headers'
import Project from "./Project"

const Body = () => {


  return (
    <div className="dark:bg-black pb-32">
      <Headers />
      <Home />
      <About />
      <Experience />
      <Project />
      <Blog />
      <Contact />
    </div>
  )
}

export default Body