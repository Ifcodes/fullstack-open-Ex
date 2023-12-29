/* eslint-disable */
import Part from './Part'

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} exercise={props.part1.exercises1} />
      <Part part={props.part2.name} exercise={props.part2.exercises2} />
      <Part part={props.part3.name} exercise={props.part3.exercises3} />
    </div>
  )
}

export default Content