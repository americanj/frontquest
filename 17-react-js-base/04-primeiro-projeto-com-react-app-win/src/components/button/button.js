import './button.css'
import React from 'react'

const sayHello = () => {
    console.log('olá');
}

const Button = (props) => {
    return <button className="btn" onClick={sayHello}>
                {props.label}
            </button>
}

/*class Button extends React.Component {
    render() {
        return <button className="btn">{this.props.label}</button>
    }
}*/

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button; 