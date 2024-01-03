import { map, filter } from 'lodash'
import { useEffect, useState } from 'react'
import { serialize, deserialize } from "react-serialize"
import UpArrow from '../../assests/PNGs/angle-up.png'
import DownArrow from '../../assests/PNGs/angle-down.png'
import mediumBlog from '../../MockData/mediumBlog.json'

const Blog = () => {
  // const [myAllPost, setMyAllPost] = useState([])
  const [showMoreBlog, setShowMoreBlog] = useState(false)
  const [blog, setBlog] = useState([])

  useEffect(() => {

    // fetchPost()

  }, [])

  useEffect(() => {
    if(showMoreBlog) {
      setBlog([...mediumBlog])
      
    } else {
      const t = filter(mediumBlog, (item, index) => {
        if(index < 3)
          return true
        return false
      })
      setBlog([...t])
    }
  }, [showMoreBlog])

  // const fetchPost = async () => {

  //   try {
  //     // const data = await fetch('https://v1.nocodeapi.com/siddhesh/medium/NjsgkBetsAfcCspI')
  //     // const post = await data.json()
  //     // console.log(post)

  //     const post = mediumBlog
  //     console.log(post)
  //     const finalData = map(post, (item) => {
  //       return {
  //         id: item.id,
  //         title: item.title,
  //         blogLink: item.link,
  //         // html: item.content
  //       }
  //     })
  //     setMyAllPost([...finalData])
  //     const t = filter(finalData, (item, index) => {
  //       if(index < 3)
  //         return true
  //       return false
  //     })
  //     setBlog([...t])

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <div className=" my-40">
      <div className="flex flex-col text-center">
        <span className="text-md">Read My Recent</span>
        <span className="text-4xl">Blogs</span>
      </div>

      <div className='flex justify-center'>
        <div className="flex flex-wrap flex-1 gap-y-10 justify-around max-w-[800px] justify-items-center mt-5">
        {map(blog, (item) => {
            return (
              <div 
                className="cursor-pointer border border-black rounded-3xl w-56 py-20 text-center hover:shadow-xl" 
                key={item.id}
                onClick={() => {
                  window.open(item.blogLink,'_newtab')
                }}
              >
                <h1>{item.title}</h1>
              </div>
            )
          
        })}
          
          
        </div>
      </div>
    
      <div className='flex justify-center mt-2'>
        {showMoreBlog ? (
          <div className='flex gap-2'
            onClick={() => {
              setShowMoreBlog(prev => !prev)
            }}
          >
            <img 
              src={UpArrow}
              className='w-5'
            />
            <button>
              Show Less
            </button>
          </div>
        ) : (
          <div className='flex gap-2'
            onClick={() => {
              setShowMoreBlog(prev => !prev)
            }}
          >
            <img 
              src={DownArrow}
              className='w-5'
            />
            <button>
              Show More
            </button>
          </div>
        )}
        
        
      </div>
    
    
    </div>
  )
}

export default Blog