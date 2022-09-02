// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {detail} = props
  const {projectTitle, imageUrl, duration, projectUrl, description} = detail

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="project-title-container">
        <h1 className="titles">{projectTitle}</h1>
        <div className="clock-container">
          <AiFillCalendar className="icon-margin" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}
export default ProjectTimelineCard
