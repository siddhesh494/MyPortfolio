import { filter, map } from 'lodash'
import React, { useState, useEffect } from 'react'
import lang from '../../Common/languageConstant'
import { useSelector } from 'react-redux'
import DownArrow from '../../assests/PNGs/angle-down.png'
import UpArrow from '../../assests/PNGs/angle-up.png'
import PROJECTS from '../../MockData/project.json'
import Dummy1 from '../../assests/Photos/d1.jpg'
import ViewProject from '../Modal/ViewProject'

const Project = () => {
  const language = useSelector(store => store.language.language)
  const [showMoreProject, setShowMoreProject] = useState(false)
  const [showViewProject, setShowViewProject] = useState(false)
  const [clickedProject, setClickedProject] = useState({})
  const [projects, setProjects] = useState([])

  useEffect(() => {
    if(showMoreProject) {
      setProjects([...PROJECTS])
    } else {
      const t = filter(PROJECTS, (item, index) => {
        if(index < 3)
          return true
        return false
      })
      setProjects([...t])
    }
  }, [showMoreProject])

  return (
    <>
    <ViewProject
      showModal={showViewProject}
      setShowModal={setShowViewProject}
      clickedProject={clickedProject}
      setClickedProject={setClickedProject}
    />
    <div className="my-28">
      <div className="flex flex-col text-center">
        <span className="text-md text-slate-800 dark:text-blue-700">{lang[language]?.project?.tryOutMy}</span>
        <span className="text-4xl dark:text-white">{lang[language]?.project?.project}</span>
      </div>

      <div className='flex justify-center'>
        <div className="flex flex-wrap flex-1 gap-y-10 justify-around max-w-[800px] justify-items-center mt-5">
        {map(projects, (item) => {
            return (
              <div 
                className="cursor-pointer border border-zinc-300 dark:border-blue-700 dark:hover:shadow-blue-700 dark:hover:shadow-lg rounded-3xl w-56 pb-4 text-center hover:shadow-xl"
                key={item.id}
                onClick={() => {
                  setClickedProject(item)
                  setShowViewProject(true)
                }}
              >
                <img 
                  src={item.image || Dummy1}
                  className='rounded-t-3xl min-h-36'
                  alt='img'
                />
                <h1 className='mt-2 font-semibold dark:text-white'>{item.title}</h1>
              </div>
            )
          
        })}
          
          
        </div>
      </div>
    
      <div className='flex justify-center mt-2'>
        {showMoreProject ? (
          <div className='flex gap-2'
            onClick={() => {
              setShowMoreProject(prev => !prev)
            }}
          >
            <img 
              src={UpArrow}
              className='w-5 dark:invert dark:brightness-0'
              alt="img"
            />
            <button className=' dark:text-white'>
              Show Less
            </button>
          </div>
        ) : (
          <div className='flex gap-2'
            onClick={() => {
              setShowMoreProject(prev => !prev)
            }}
          >
            <img 
              src={DownArrow}
              className='w-5 dark:invert dark:brightness-0'
              alt="img"
            />
            <button className=' dark:text-white'>
              {lang[language]?.blog?.showMore}
            </button>
          </div>
        )}
        
        
      </div>
    </div>
    </>
  )

}

export default Project