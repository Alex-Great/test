import React, { Component } from 'react';

// import mark
import bag from '../imgs/logo.png';

class Card extends Component {
    render() {
        return (
            <div className="card-body">
                <div>
                    <img className="bag-icon" src={bag} alt="logo" />
                </div>
                <div>
                    <span>{this.props.title}</span>
                </div>
            </div>
        );
    }
}

export default Card;