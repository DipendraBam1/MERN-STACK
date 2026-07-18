import { courses } from "../data/courses";
import Button from "./Button";

let featuredCourses = [];
let domain = "https://mindrisers.com.np";

function Course(props) {
  return (
    <li className="course">
      {props.featured ? <span className="badge">Featured</span> : null}  
      <img src={domain + props.image} alt="" />
      <p>{props.title}</p>
      <p>{props.description}</p>
      {<Button size="sm" label="view more" />}
    </li>
  );
}

featuredCourses = courses.filter((el) => el.featured);
function Courses() {
  return (
    <>
      <h1>Featured Courses</h1>
      <ul className="card">
        {featuredCourses.map((el, index) => {
          return (
            <Course
              key={index}
              image={el.image}
              title={el.title}
              description={el.description}
              featured={el.featured}
            />
          );
        })}
        <br />
        <br />
        <br />
      </ul>
      <h1>Available Courses</h1>
      <ul className="card">
        {courses.map((el, index) => {
          return (
            <Course
              key={index}
              image={el.image}
              title={el.title}
              description={el.description}
              featured={el.featured}
            />
          );
        })}
      </ul>
    </>
  );
}
export default Courses;
