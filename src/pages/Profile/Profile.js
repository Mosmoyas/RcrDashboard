import "./Profile.css"
import { PageHead } from '../../Components'
import avatar01 from "../../assets/images/avatar-1.jpg"
import activity01 from "../../assets/images/activity-01.png"
import activity02 from "../../assets/images/activity-02.png"
import activity03 from "../../assets/images/activity-03.webp"


const Profile = () => {
  return (
    <>
      <PageHead>Profile</PageHead>
      <div className="profile-page m-20">

        {/* <!-- Start OverView   --> */}

        <div className="overview d-flex  rad-10  align-center  bg-white">
          <div className="avatar-box p-20 txt-c">
            <img src={avatar01} alt="Avatar" className="rad-half mb-10" />

            <h3 className="m-0">Mosmoyas</h3>
            <p className="mt-10 mb-10 c-grey ">Level 20</p>
            <div className="level bg-eee rad-6 p-relative">
              <span style={{ width: "80" }}></span>
            </div>
            <div className="rating mt-10 mb-10">


              {(() => {
                let stars = []
                for (let i = 0; i < 6; i++) {
                  stars.push(<i className="fa-solid fa-star c-orange"></i>)

                }
                return stars;
              })()}

            </div>
            <p className="mt-10 fs-15 c-grey  mb-10">550 Rating</p>
          </div>
          {/* <!-- Start Information Box  --> */}
          <div className="info-box txt-c-mobile w-full">
            <div className="box p-20 d-flex align-center ">
              <h4 className="m-0 c-grey fs-15 w-full">General Information</h4>
              <div className="fs-14">
                <span className="c-grey">Full Name: </span>
                <span>Mostafa Hafez</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Gender: </span>
                <span>Male</span>
              </div>

              <div className="fs-14">
                <span className="c-grey">Country: </span>
                <span>Egypt</span>
              </div>

              <div className="fs-14">
                <label>
                  <input checked className="toggle-checkbox" type="checkbox" name="" id="" />
                  <div className="toggle-switch"></div>
                </label>
              </div>

            </div>
            <div className="box p-20 d-flex align-center ">
              <h4 className="m-0 c-grey fs-15 w-full">Personal Information</h4>
              <div className="fs-14">
                <span className="c-grey">Email: </span>
                <span>Mos@gmx.de</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Phone: </span>
                <span>0173525410</span>
              </div>

              <div className="fs-14">
                <span className="c-grey">Date of Birth: </span>
                <span>11/12/1984</span>
              </div>

              <div className="fs-14">
                <label>
                  <input checked className="toggle-checkbox" type="checkbox" name="" id="" />
                  <div className="toggle-switch"></div>
                </label>
              </div>

            </div>
            <div className="box p-20 d-flex align-center ">
              <h4 className="m-0 c-grey fs-15 w-full">Job Description</h4>
              <div className="fs-14">
                <span className="c-grey">Title: </span>
                <span>Full Stack Developer</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Programming Language: </span>
                <span>Python</span>
              </div>

              <div className="fs-14">
                <span className="c-grey">Year of Experience: </span>
                <span>5+</span>
              </div>

              <div className="fs-14">
                <label>
                  <input checked className="toggle-checkbox" type="checkbox" name="" id="" />
                  <div className="toggle-switch"></div>
                </label>
              </div>

            </div>
            <div className="box p-20 d-flex align-center ">
              <h4 className="m-0 c-grey fs-15 w-full">Billing Information</h4>
              <div className="fs-14">
                <span className="c-grey">Payment Method: </span>
                <span>Paypal</span>
              </div>
              <div className="fs-14">
                <span className="c-grey">Email: </span>
                <span>email@email.com</span>
              </div>

              <div className="fs-14">
                <span className="c-grey">Subscription: </span>
                <span>Monthly</span>
              </div>

              <div className="fs-14">
                <label>
                  <input checked className="toggle-checkbox" type="checkbox" name="" id="" />
                  <div className="toggle-switch"></div>
                </label>
              </div>

            </div>

          </div>
          {/* <!-- End Information Box  --> */}
        </div>
        {/* <!-- End OverView   --> */}
        {/* <!-- Start Other Data  --> */}
        <div className="other-data d-flex gap-20">
          <div className="skills-card p-20 bg-white rad-10 mt-20">
            <h2 className="mt-0 mb-10">My Skills</h2>
            <p className=" mt-0 mb-20 c-grey fs-15">Complete Skills List</p>
            <ul className="m-0 txt-c-mobile">
              <li> <span>HTML</span><span>Pugjs</span><span>HAML</span></li>
              <li> <span>css</span><span>SASS</span><span>Stylus</span> </li>
              <li> <span>JavaScript</span><span>TypeScript</span></li>
              <li> <span>Vujs</span><span>Reactjs</span><span>Angular</span></li>
              <li> <span>Jest</span><span>Jesmin</span></li>
              <li> <span>PHP</span><span>Larvel</span></li>
              <li> <span>Python</span><span>Django</span></li>
              <li> <span>HTML</span><span>Pugjs</span></li>
            </ul>
          </div>
          <div className="Activities p-20 bg-white rad-10 mt-20">
            <h2 className="mt-0 mb-10">Latest Activities</h2>
            <p className=" mt-0 mb-20 c-grey fs-15">Latest Activities done by the User</p>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={activity03} alt="" />
              <div className="info">
                <span className="d-block mb-10">Store</span>
                <span className="c-grey">Bought the Mastring Python Course</span>
              </div>
              <div className="date"><span className="d-block mb-10">18:10</span>
                <span className="c-grey">Monday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={activity02} alt="" />
              <div className="info">
                <span className="d-block mb-10">Bages</span>
                <span className="c-grey">Unclocked the 10 Skills Bages</span>
              </div>
              <div className="date"><span className="d-block mb-10">18:10</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
            <div className="activity d-flex align-center txt-c-mobile">
              <img src={activity01} alt="" />
              <div className="info">
                <span className="d-block mb-10">Store</span>
                <span className="c-grey">Got the PHP Certificate</span>
              </div>
              <div className="date"><span className="d-block mb-10">18:10</span>
                <span className="c-grey">Yesterday</span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Other Data  --> */}


      </div></>
  )
}

export default Profile