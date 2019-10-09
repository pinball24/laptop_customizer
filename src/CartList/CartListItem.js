import React, { Component } from 'react';


export default class CartListItem extends Component {
    static defaultProps = {
        summaryKey:'',
        selected:''
    }

    render() {
        const { summaryKey, selected } = this.props;
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
        return (
            <div className="summary__option" key={summaryKey}>
                <div className="summary__option__label">{summaryKey}</div>
                <div className="summary__option__value">{selected[summaryKey].name}</div>
                <div className="summary__option__cost">
                    {USCurrencyFormat.format(selected[summaryKey].cost)}
                </div>
            </div>
        );
    }
}