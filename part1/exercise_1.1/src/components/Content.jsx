const Content = ({ courseMaterial }) => {
  const contentElement = courseMaterial.map((course) => (
    <p>
      {course.part} {course.exercise}
    </p>
  ));
  return <div>{contentElement}</div>;
};

export default Content;
