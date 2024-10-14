import Header from "./components/Header";
import Total from "./components/Total";
import Content from "./components/Content";

function App() {
  const course = "Half Stack application development";

  const courseMaterial = [
    { part: "Fundamentals of React", exercises: 10 },
    { part: "Using props to pass data", exercises: 7 },
    { part: "State of a component", exercises: 14 },
  ];
  let total = 0;
  courseMaterial.forEach((course) => {
    total += course.exercises;
  });

  return (
    <div>
      <Header course={course} />
      <Content courseMaterial={courseMaterial} />
      <Total total={total} />
    </div>
  );
}

export default App;
