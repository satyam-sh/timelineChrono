// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {detail} = props
  const {courseTitle, duration, description, tagsList} = detail

  return (
    <div>
      <div className="course-duration-container">
        <h1 className="titles">{courseTitle}</h1>
        <div className="clock-duration-container">
          <AiFillClockCircle className="icon-margin" />
          <p>{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tagList-container">
        {tagsList.map(each => (
          <li key={each.id}>
            <p className="list-items-para">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
