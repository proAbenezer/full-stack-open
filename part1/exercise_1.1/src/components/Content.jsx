const Content = ({ courseMaterial }) => {
  const courseElement = courseMaterial.map((course) => (
    <p key={course.part}>
      {course.part} {course.exercises}
    </p>
  ));
  return courseElement;
};

export default Content;
