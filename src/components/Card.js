import React, { Component } from 'react';

// import mark
import bag from '../imgs/logo.png';

class Card extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="card-body">
                <div>
                    <img className="bag-icon" src={bag} />
                </div>
                <div>
                    <span>{this.props.title}</span>
                </div>
            </div>
        );
    }
}

export default Card;