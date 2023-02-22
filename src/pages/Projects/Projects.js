import "./Projects.css"
import { PageHead } from '../../Components'
import DataProjects from '../../Data/DataProjects'
const Projects = () => {

  const projectsData = DataProjects.map((val, key) => {

    return (<>
      <div className="project bg-white p-20 rad-6 p-relative">
        <span className="date fs-13 c-grey">{val.begindate}</span>
        <h4 className="m-0">{val.projrctName} </h4>

        <p className="c-grey mt-10 mb-20 fs-14">{val.description}</p>
        <div className="team ">

          {(() => {
            let imagesvales = []
            for (let i = 0; i < val.team.length; i++) {
              imagesvales.push(<a href="/#" ><img src={val.team[i]} id={val.id} alt="1" /></a>)

            }
            return imagesvales;
          })()}


        </div>
        <div className="assignment d-flex">

          {(() => {
            let tasks = []
            for (let i = 0; i < val.tasks.length; i++) {
              tasks.push(<span className="fs-13 rad-6 bg-eee">{val.tasks[i]}</span>)

            }
            return tasks;
          })()}


        </div>
        <div className="info between-flex">
          <div className="prog bg-eee">
            <span className="bg-red" style={{ width: val.achieved }}></span>
          </div>
          <div className="fs-14 c-grey">
            <i className="fa-solid fa-dollar-sign"></i>{val.price}
          </div>
        </div>
      </div></>)
  })
  return (
    <>
      <PageHead>Projects</PageHead>
      <div className="projects-page  d-grid m-20 gap-20">

        {projectsData}

      </div>

    </>)
}

export default Projects