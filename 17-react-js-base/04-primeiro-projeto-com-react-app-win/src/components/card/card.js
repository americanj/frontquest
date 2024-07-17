import React from 'react'

import './card.css'

// Usando props em função
const Card = ({title}) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            <p>esse é um parágrafo</p>
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

export default Card;