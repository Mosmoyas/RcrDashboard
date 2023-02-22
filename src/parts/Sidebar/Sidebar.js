import "../Sidebar/Sidebar.css"
import { Link } from "react-router-dom"


const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <h3 className="logo-h3">MosMoyas</h3>
                <ul>
                    <li>
                        <Link to={"/"} className="page-link " >
                            <i className="fa-regular fa-chart-bar fa-fw"></i>
                            <span>Dashboard</span></Link>
                    </li>
                    <li>
                        <Link className=" page-link " to="/settings"><i
                            className="fa-solid fa-gear fa-fw"></i>
                            <span>Settings</span></Link>
                    </li>
                    <li>
                        <Link className="page-link " to="/profile"><i
                            className="fa-regular fa-user fa-fw"></i>
                            <span>Profile</span></Link>
                    </li>
                    <li>
                        <Link className="page-link" to="/projects"><i
                            className="fa-solid fa-diagram-project fa-fw"></i>
                            <span>Projects</span></Link>
                    </li>
                    <li>
                        <Link className="active page-link " to="/courses"><i
                            className="fa-solid fa-graduation-cap fa-fw"></i>
                            <span>Courses</span></Link>
                    </li>
                    <li>
                        <Link className=" page-link " to="/friends">
                            <i className="fa-solid fa-user-group  fa-fw"></i>
                            <span>Friends</span></Link>
                    </li>
                    <li>
                        <Link className="page-link " to="/files">
                            <i className="fa-regular fa-file fa-fw"></i>
                            <span>Files</span></Link>
                    </li>
                    <li>
                        <Link className="page-link " to={"/plans"}>
                            <i className="fa-solid fa-ruler-combined fa-fw"></i>
                            <span>Plans</span></Link>
                    </li>
                </ul>
            </div>
        </>)
}

export default Sidebar