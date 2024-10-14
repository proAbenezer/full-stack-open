import Part from "./Part";

const Content = (props) => {
  const contentElements = props.courseMaterial((course) => (
    <Part part={course.part} exercises={course.exercises} />
  ));

  return { contentElements };
};

export default Content;
