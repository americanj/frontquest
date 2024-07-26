import React from 'react'

import './card.css'

// Usando props em função


const Card = (props) => {
    return (
        <div className="card">
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

export default Card;