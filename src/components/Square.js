import '../style/shapes.css';

const Square = props => {

    const topValue = props.top;
    const leftValue = props.left;

    return (
        <div className="square" style={{ top: topValue, left: leftValue }} onClick={() => {
            props.onClick();
        }}>

        </div>
    );
}

export default Square;