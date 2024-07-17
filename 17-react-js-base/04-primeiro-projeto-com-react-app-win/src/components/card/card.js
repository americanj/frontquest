import React from 'react'

import './card.css'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <h3>Título</h3>
                <p>esse é um parágrafo</p>
            </div>
        );
    }
}

export default Card;