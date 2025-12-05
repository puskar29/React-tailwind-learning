import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const parms = useParams();
    console.log(parms);
    

  return (
    <div>
      <h1>Courses Details</h1>
    </div>
  )
}

export default CoursesDetails
