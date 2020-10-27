import React, { Component } from 'react';

// import mark
import bag from '../imgs/logo.png';

class MarkSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            marks: [1, 2, 3, 4, 5]
        }
    }

    render() {
        return (
            <>
                <div className="mark-section">
                    <img className="bag-icon" src={bag} alt="logo" />
                    <div className="grey-blank"></div>
                    <div className="title">
                        <span>NOS</span>
                        <h1>FOURNISSEURS</h1>
                    </div>
                    <div className="grey-blank"></div>
                </div>

                <div className="mark-section">
                    {this.state.marks.map(mark => {
                        return (
                            <img className="slide-bag-icon" src={bag} alt="logo" />
                        )
                    })}
                </div>
                <div className="more-title">
                    <span>Et plus de 300 autres fournisseurs</span>
                </div>
            </>
        );
    }
}

export default MarkSection;