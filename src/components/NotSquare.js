
const NotSquare = props => {

    return (
        <div className="not-square" style={{top: props.top, left: props.left, transform: `rotate(${props.degree}deg)`}} onClick={props.onClick}>
            
        </div>
    )
}

export default NotSquare;