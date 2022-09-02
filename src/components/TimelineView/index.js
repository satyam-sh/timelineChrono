// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard/index'
import ProjectTimelineCard from '../ProjectTimelineCard/index'
import './index.css'

const TimeLineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="timeline-container">
      <h1 className="main-heading">
        MY JOURNEY OF
        <br />
        <span className="main-para">CCBP 4.0</span>
      </h1>
      <Chrono
        slideItemDuration={4500}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        theme={{
          primary: ' #0967d2',
          secondary: 'white',
          cardBgColor: 'snow',
          cardForeColor: 'violet',
          titleColor: '#0967d2',
          titleColorActive: 'red',
        }}
        enableOutline
      >
        <div className="chrono-icons">
          <img
            alt="home"
            src="https://img.icons8.com/external-doodle-bomsymbols-/91/000000/external-airplane-doodle-communication-doodle-bomsymbols-.png"
          />
          <img
            src="https://img.icons8.com/ios-filled/50/000000/home.png"
            alt="new"
          />
          <img
            alt="home"
            src="https://img.icons8.com/external-doodle-bomsymbols-/91/000000/external-airplane-doodle-communication-doodle-bomsymbols-.png"
          />
          <img
            src="https://img.icons8.com/glyph-neue/64/000000/thanksgiving.png"
            alt="chicken"
          />
          <img
            alt="home"
            src="https://img.icons8.com/external-doodle-bomsymbols-/91/000000/external-airplane-doodle-communication-doodle-bomsymbols-.png"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/edit-chat-history.png"
            alt="todo"
          />
          <img
            src="https://img.icons8.com/external-creatype-glyph-colourcreatype/64/000000/external-find-internet-of-things-creatype-glyph-colourcreatype.png"
            alt="wiki"
          />
          <img
            alt="home"
            src="https://img.icons8.com/external-doodle-bomsymbols-/91/000000/external-airplane-doodle-communication-doodle-bomsymbols-.png"
          />
          <img
            src="https://img.icons8.com/ios-filled/100/000000/envelope-number.png"
            alt="message"
          />
          <img
            alt="home"
            src="https://img.icons8.com/external-doodle-bomsymbols-/91/000000/external-airplane-doodle-communication-doodle-bomsymbols-.png"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/shopping-mall.png"
            alt="shop"
          />
        </div>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard detail={each} key={each.id} />
          }
          return <ProjectTimelineCard detail={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}
export default TimeLineView
