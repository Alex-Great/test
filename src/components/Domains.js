import React, { Component } from 'react';

import Card from './Card'

class MarkSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: [
                {
                    title: "first"
                },
                {
                    title: "second"
                },
                {
                    title: "third"
                },
                {
                    title: "forth"
                },
                {
                    title: "fifth"
                },
                {
                    title: "sixth"
                },
                {
                    title: "seventh"
                },
                {
                    title: "eight"
                },
            ]
        }
    }

    render() {
        return (
            <>
                <div className="mark-section">
                    <div className="domain-grey-blank"></div>
                    <div className="title">
                        <span>NOS</span>
                        <h1>DOMAINS</h1>
                    </div>
                    <div className="domain-grey-blank"></div>

                </div>
                
                <div className="card-mark-section">
                    {this.state.cards.map(card => {
                        return (
                            <Card title={card.title} />
                        )
                    })}
                </div>
            </>
        );
    }
}

export default MarkSection;