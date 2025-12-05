import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const params = useParams();
    console.log(params.id);

  return (
    <div>
      <h1>{params.id}Courses Details</h1>
    </div>
  )
}

export default CoursesDetails
