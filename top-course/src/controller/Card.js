import React from 'react'
import { FcLike } from "react-icons/fc";

const Card = (props) => {
  let course = props.course;

  return (
    <div>
    
    <div>
    {console.log(course)}
    <img src={course.image.url} alt='Image'/>
    </div>
    <div>
    <button>
    <FcLike />
    </button>
    </div>
    <div>
      {course.title}
    </div>
    <div>
      {course.description.substring(0, 200)}
    </div>
    </div>
  )
}

export default Card