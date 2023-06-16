
const NotSquare = props => {

    return (
        <div className="not-square" style={{top: 80, left: 80, transform: `rotate(45deg)`}} onClick={() => {
            props.onClick();
        }}>
            
        </div>
    )
}

export default NotSquare;