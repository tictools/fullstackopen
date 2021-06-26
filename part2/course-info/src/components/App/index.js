import { courses } from "../../common/courses";
import Course from "../Course";

export default function App() {
  const [course1, course2] = courses;
  return (
    <>
      <Course course={course1} />
      <Course course={course2} />
    </>
  );
}

// export default App;
