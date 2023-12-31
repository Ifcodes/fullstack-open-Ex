/* eslint-disable */
import Part from './Part'

const Content = (props) => {
  return (
    <div>
      {props.parts.map(part => (
        <Part key={part.name} part={part.name} exercise={part.exercises1} />
      ))}
    </div>
  )
}

export default Content