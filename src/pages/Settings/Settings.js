import "./Settings.css"
import { PageHead } from '../../Components'


const Settings = () => {
  return (
    <>
      <PageHead>Settings</PageHead>

      {/* <!-- Start Settings page  --> */}
      <div className="setting-page  m-20 d-grid gap-20">
        {/* <!-- Start Settings Box  --> */}
        <div className="p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Site Control</h2>
          <p className="mt-0 mb-20 c-grey fs-15">
            Control the Website if there is Maintenance</p>
          <div className="mb-15 between-flex">
            <div>
              <span>Website Control</span>
              <p className="c-grey mt-5 mb-5 fs-13">Open / Close Website and type the Reason</p>
            </div>

            <label>
              <input className="toggle-checkbox" type="checkbox" name="" id="" />
              <div className="toggle-switch"></div>
            </label>

          </div>
          <textarea className="close-message  b-none fs-15 p-10 rad-6 d-block w-full"
            placeholder="Close Message Content"></textarea>
        </div>
        {/* <!-- End Settings Box  --> */}

        {/* <!-- Start genral Info  --> */}
        <div className="general-info p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">General Info</h2>
          <p className="mt-0 mb-20 c-grey fs-15">
            General Information about your Account</p>
          <div className="mb-15">
            <label htmlFor="first" className="fs-14 c-grey d-block mb-10">First Name</label>
            <input className=" p-10  rad-6 d-block w-full b-ccc" type="text" id="first"
              placeholder="First Name" />
          </div>
          <div className="mb-15">
            <label htmlFor="last" className="fs-14 c-grey d-block mb-10">Last Name</label>
            <input className=" p-10  rad-6 d-block w-full b-ccc" type="text" id="last"
              placeholder="Last Name" />
          </div>
          <div>
            <label htmlFor="email" className="  fs-14 c-grey d-block mb-10">Email</label>
            <input className=" email disable  p-10 w-fulls  rad-6 b-ccc" type="email" value="Mosmoyas@nn.mos"
              id="email" placeholder="Email" disabled />
            <a className="c-blue" href="/#">Change</a>
          </div>
        </div>
        {/* <!-- End General Info  --> */}
        {/* <!-- Start Security   --> */}
        <div className="p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">General Info</h2>
          <p className="mt-0 mb-20 c-grey fs-15">
            Security Information about your Account</p>
          <div className="security-box mb-15 between-flex">
            <div>
              <span>Password</span>
              <p className="c-grey mt-5 mb-0 fs-13">Last chane on 14/08/2022</p>
            </div>
            <a href="/#" className="button c-white bg-blue btn-shape">Change</a>
          </div>
          <div className="security-box mb-15 between-flex">
            <div>
              <span>Tow-Factor Authentication</span>
              <p className="c-grey mt-5 mb-0 fs-13">Enable / Disable The Feature</p>
            </div>
            <label>
              <input className="toggle-checkbox" type="checkbox" name="" id="" />
              <div className="toggle-switch"></div>
            </label>
          </div>
          <div className="security-box  between-flex">
            <div>
              <span>Devices</span>
              <p className="c-grey mt-5 mb-0 fs-13">Check the Login Devices list</p>
            </div>
            <a href="/#" className=" c-black bg-eee btn-shape">Devices List</a>
          </div>
        </div>
        {/* <!-- End Security  --> */}
        {/* <!-- Start Social Media Settings --> */}
        <div className=" social-boxes p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Social Media Information</h2>
          <p className="mt-0 mb-20 c-grey fs-15">
            Social Media Information for your Account</p>
          <div className=" mb-15 d-flex align-center">
            <i className="fa-brands fa-facebook center-flex c-grey"></i>
            <input className="rad-10" type="text" name="" id="" placeholder="Facebook Username" />
          </div>
          <div className=" mb-15 d-flex align-center">
            <i className="fa-brands fa-twitter center-flex c-grey"></i>
            <input className="rad-10" type="text" name="" id="" placeholder="Twitter Username" />
          </div>
          <div className=" mb-15 d-flex align-center">
            <i className="fa-brands fa-linkedin center-flex c-grey"></i>
            <input className="rad-10" type="text" name="" id="" placeholder="Linkedin Username" />
          </div>
          <div className=" mb-15 d-flex align-center">
            <i className="fa-brands fa-youtube center-flex c-grey"></i>
            <input className="rad-10" type="text" name="" id="" placeholder="Youtube Username" />
          </div>
        </div>
        {/* <!-- End Social Media Settings --> */}
        {/* <!-- Start Task Control  --> */}
        <div className="widgets-control p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Widgets Control</h2>
          <p className="mt-0 mb-20 c-grey fs-15">
            Show / Hide Widgets</p>

          <div className="control d-flex align-center mb-15">
            <input type="checkbox" id="second" />
            <label htmlFor="second">Yearly Targets</label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input type="checkbox" id="one" />
            <label htmlFor="one">Latest Projects</label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input type="checkbox" id="third" />
            <label htmlFor="third">Tickets Statistics</label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input type="checkbox" id="forth" />
            <label htmlFor="forth">Latest News</label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input type="checkbox" id="fifth" />
            <label htmlFor="fifth">Latest checked tasks</label>
          </div>
          <div className="control d-flex align-center mb-15">
            <input type="checkbox" id="sixth" />
            <label htmlFor="sixth">Top Serch Items</label>
          </div>
        </div>
        {/* <!-- Start Task Control  --> */}
        {/* <!-- Start Backup  Control  --> */}
        <div className="backup-control p-20 bg-white rad-10">
          <h2 className="mt-0 mb-10">Backup Management</h2>
          <p className="mt-0 mb-20 c-grey fs-15">
            Control Backup Time and Location</p>

          <div className="date d-flex align-center mb-15">
            <input type="radio" name="time" id="daily" />
            <label htmlFor="daily">Daily</label>
          </div>
          <div className="date d-flex align-center mb-15">
            <input type="radio" name="time" id="weakly" />
            <label htmlFor="weakly">Weakly</label>
          </div>
          <div className="date d-flex align-center mb-15">
            <input type="radio" name="time" id="monthly" />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div className="servers d-flex align-center txt-c">
            <input type="radio" name="servers" id="server-one" />
            <div className="server mb-15 rad-10 w-full mr-5 ">
              <label className="d-block m-15" htmlFor="server-one">
                <i className="fa-solid fa-server d-block mb-10"></i>
                Megaman</label>
            </div>
            <input type="radio" name="servers" id="server-two" />
            <div className="server mb-15 rad-10 w-full mr-5 ">
              <label className="d-block m-15" htmlFor="server-two">
                <i className="fa-solid fa-server d-block mb-10"></i>
                Zero</label>
            </div>
            <input type="radio" name="servers" id="server-three" />
            <div className="server mb-15 rad-10 w-full  ">
              <label className="d-block m-15" htmlFor="server-three">
                <i classNameName="fa-solid fa-server d-block mb-10"></i>
                Sigma</label>
            </div>
          </div>

        </div>



      </div>

    </>
  )
}

export default Settings