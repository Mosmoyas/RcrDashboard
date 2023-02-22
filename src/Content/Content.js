import "./Content.css"

const Content = (props) => {
    return (
        <>
            <div className="content w-full .overflow-h">
                {props.children}
                
            </div>
        </>
    )
}

export default Content