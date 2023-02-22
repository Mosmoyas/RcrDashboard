import "./Files.css"
import { PageHead } from '../../Components'
import DataFiles from '../../Data/DataFiles'
const Files = () => {

  const FileData = DataFiles.map((val) => {
    return (<>
      <div className="file bg-white p-10 rad-10" id={val.id}>

        <i className="fa-solid fa-download c-grey p-absolute"></i>
        <div className="icon txt-c">
          <img src={val.imgFile} alt="" className="mt-15 mb-15" />
        </div>
        <div className="txt-c mb-10 fs-14">
          {val.filename}
        </div>
        <p className="c-grey fs-13">{val.uploader}</p>
        <div className="info between-flex mt-10 pt-10 fs-13 c-grey">
          <span>{val.uploadDate}</span>
          <span>{val.capacity}</span>
        </div>
      </div></>)
  })
  return (
    <>
      <PageHead>Files</PageHead>
      <div className="files-page  d-flex m-20 gap-20">
        <div className="files-stats bg-white p-20 rad-10 ">
          <h2 className=" mt-0 mb-15 txt-c-mobile">Files Statistics</h2>
          <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i className="fa-regular fa-file-pdf fa-lg blue center-flex c-blue icon">

            </i>
            <div className="info"><span>PDF Files</span>
              <span className="c-grey d-block mt-5">130</span>
            </div>
            <div className="size c-grey">6.5GB</div>
          </div>
          <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i className="fa-regular fa-images fa-lg green center-flex c-green icon">

            </i>
            <div className="info">
              <span>Images</span>
              <span className="c-grey d-block mt-5">115 Files</span>
            </div>
            <div className="size c-grey">3.5GB</div>
          </div>
          <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i className="fa-regular fa-file-word fa-lg red center-flex c-red icon">

            </i>
            <div className="info">
              <span>Word Files</span>
              <span className="c-grey d-block mt-5">175 Files</span>
            </div>
            <div className="size c-grey">8.2GB</div>
          </div>
          <div className="d-flex align-center border-eee p-10 rad-6 mb-15 fs-13">
            <i className="fa-solid fa-file-csv fa-lg orange center-flex c-orange icon">

            </i>
            <div className="info">
              <span>CSV Files</span>
              <span className="c-grey d-block mt-5">230 Files</span>
            </div>
            <div className="size c-grey">20.5GB</div>
          </div>
          <a href="/#" className="upload c-white fs-13 rad-6 d-block bg-blue w-fit">
            <i className="fa-solid fa-angles-up mr-10"></i>
            Upload</a>
        </div>
        <div className="files-content d-grid gap-20">
          {FileData}

          {/* </div> */}
        </div>
      </div>

    </>)
}

export default Files