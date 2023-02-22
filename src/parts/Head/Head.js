

import "../Head/Head.css"
import avatar1 from "../../assets/images/avatar-1.jpg"
const Head = () => {
    return (
        <div>
            <div className="head bg-white p-15 between-flex">
                <div className="search p-relative">
                    <input className="p-10 rad-10" type="search" placeholder="Type a Keyword" />
                </div>
                <div className="icons d-flex align-center">
                    <span className="notifications p-relative">
                        <i className="fa-regular fa-bell fa-lg"></i>
                    </span>
                    <img className="h-avatar" src={avatar1} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Head