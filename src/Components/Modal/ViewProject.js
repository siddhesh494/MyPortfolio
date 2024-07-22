import React from 'react'
import Modal from '../../Common/Modal/Modal'
import { map } from 'lodash'

const ViewProject = ({
  showModal,
  setShowModal,
  clickedProject,
  setClickedProject
}) => {

  const handleOnClose = () => {
    setShowModal(false)
    setClickedProject({})
  }

  const ModalBody = (
    <div >
      {/* about section */}
      
      <div className='my-3 border border-black dark:border-blue-700 rounded-3xl p-5'>
        <h1 className='text-xl font-bold dark:text-white mb-2'>About Project</h1>
        {map(clickedProject.aboutThisProject, (about) => {
          return (
            <li>
              {about}
            </li>
          )
        })}
        <div className='my-3'>
          <h2 className='font-bold'>Project link</h2>
          {clickedProject?.link?.frontend && <><a className='underline text-blue-700 dark:text-gray-400' href={clickedProject.link.frontend} rel="noreferrer" target="_blank">View FrontEnd Github Repo</a><br /></>}
          {clickedProject?.link?.backend && <><a className='underline text-blue-700 dark:text-gray-400' href={clickedProject.link.backend} rel="noreferrer" target="_blank">View BackEnd Github Repo</a><br/></>}
          {clickedProject?.link?.demoLink && 
            <><a className='underline text-blue-700 dark:text-gray-400' href={clickedProject.link.demoLink} rel="noreferrer" target="_blank">Live Demo</a></>
          }
        </div>
      </div>

      {/* Technology used */}
      <div  className='my-3 border border-black dark:border-blue-700 rounded-3xl p-5'>
        <h1 className='text-xl font-bold dark:text-white mb-2'>Technologies I Used</h1>
          {map(clickedProject.technologyUsed, (tech) => {
            return (
              <li>
                {tech}
              </li>
            )
          })}
      </div>
      

      {/* video link */}
      {clickedProject?.videoLink?.link &&
      <div  className='my-3 border border-black dark:border-blue-700 rounded-3xl p-5'>
        <h1 className='text-xl font-bold dark:text-white mb-2'>Demo Video</h1>
        <div>
          <iframe src={clickedProject?.videoLink?.link} title="description" width={clickedProject?.videoLink?.width} height={clickedProject?.videoLink?.height} ></iframe>
        </div>
      </div>
      }

    </div>
  )
  return (
    <div
      className='max-h-[90%]'
    >
      <Modal
        showModal={showModal}
        heading={clickedProject.title || ""}
        body={ModalBody}
        handleOnClose={handleOnClose}
      />
    </div>
  )
}

export default ViewProject