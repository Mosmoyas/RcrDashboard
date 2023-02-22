import './Courses.css'
import CoursesData from '../../Data/DataCourses'
import { PageHead } from '../../Components'

const Courses = () => {

  const Courses = CoursesData.map((val, key) => {
    return (<>
      <div className="course bg-white p-20 rad-6 p-relative">

        <img className="cover" src={val.imageCover} alt="" />
        <img className="instructor" src={val.imageInstructor} alt="" />
        <div className="p-20">
          <h4>{val.name}</h4>
          <p className="description c-grey mt-15 mb-10 fs-14">{val.description}</p>

        </div>
        <div className="info p-15 p-relative between-flex">
          <span className="title bg-blue c-white btn-shape">Course Info</span>
          <span className="c-grey"><i className="fa-regular fa-user"></i>
            {val.attendents}</span>
          <span className="c-grey"><i className="fa-regular fa-dollar-sign"></i>
            {val.price}</span>
        </div>
      </div>
    </>)
  })
  return (
    <>
      <PageHead>Courses</PageHead>

      <div className="courses-page  d-grid m-20 gap-20">
        {Courses}

      </div></>


  )
}

export default Courses