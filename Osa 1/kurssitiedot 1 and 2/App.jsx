

const App = () => {
  const Content = () => {
    return (
      <div>
        <Part name="Fundamentals of React" exercises={10} />
        <Part name="Using props to pass data" exercises={7} />
        <Part name="State of a component" exercises={14} />
      </div>
    );
  }

  const Part = ({ name, exercises }) => {
    return (
      <div>
        <p>{name} {exercises}</p>
      </div>
    );
  }

  const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    );
  }

  const Total = ({ exercises1, exercises2, exercises3 }) => {
    const totalExercises = exercises1 + exercises2 + exercises3;

    return (
      <p>Total exercises: {totalExercises}</p>
    );
  }

  const course = 'Half Stack application development';
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises1={parts[0].exercises} exercises2={parts[1].exercises} exercises3={parts[2].exercises} />
    </div>
  );
}

export default App;
