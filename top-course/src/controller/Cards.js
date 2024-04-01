import React from "react";
import Card from "./Card";
const Cards = (props) => {
  let courses= props.courses
  console.log("courses +>" +props);
  let allCourses = [];


  const getCourses = () => {
   // console.log("courses "+JSON.stringify(courses));
   Object.values(courses).forEach( (courseCategory) => {   //key: category, value: courses in category
    // console.log(courseCategory);
    console.log("course cat "+typeof(courseCategory))
    courseCategory.forEach( (course) => {
        // console.log(course);
    console.log("course "+typeof(course))
        allCourses.push(course);
    })
})
return allCourses;
  return allCourses;
  };

  return (
    <div>
    { 
      getCourses().map((course)=>{
      return <Card key={course.id} course={course}/>
     })
     }
    </div>
  );
};

export default Cards;
