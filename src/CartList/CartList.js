import React, { Component } from 'react';
import CartListItem from './CartListItem';
import CartListTotal from './CartListTotal';

export default class CartList extends Component {
    render() {
        const {selected} = this.props;

        const summary = Object.keys(selected).map((feature, idx) => {

            return (
                <CartListItem
                    key={idx}
                    selected={selected}
                    summaryKey={feature}
                />
            );
        });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <CartListTotal
                    selected={selected}
                />
            </section>
        )
    }
}