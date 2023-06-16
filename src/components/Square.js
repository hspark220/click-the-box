import '../style/shapes.css';

const Square = props => {

    return (
        <div className="square" style={{ top: props.top, left: props.left }} onClick={props.onClick}>

        </div>
    );
}

export default Square;