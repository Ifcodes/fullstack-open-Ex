/* eslint-disable */

const Total = (props) => {
  const totalExercises = props.parts.reduce((acc, curr) => {
    return acc + curr.exercises;
  }, 0);

  return <strong>Total of {totalExercises} exercises </strong>;
};

export default Total;
