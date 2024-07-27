import React from 'react'
import './card.css'

const Card = (props) => {
    return (
        <div 
        className="card" 
        style={{backgroundColor: props.color}} 
        onClick={() => props.showCardColor(props.color)}>
           {props.children}
        </div>
    );
}

/*class Card extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="card">
                <h3>{this.props.title}</h3>
                <p>esse é um parágrafo</p>
            </div>
        );
    }
}*/

Card.defaultProps = {
    color: 'red'
}

export default Card;