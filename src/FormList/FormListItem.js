import React, { Component } from 'react';
import slugify from 'slugify';


const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class FormListItem extends Component {

    render() {
      const { id, feature, item, updateFeature } = this.props

        return (
            <div key={item} className="feature__item">
              <input
                type="radio"
                id={id}
                className="feature__option"
                name={slugify(feature)}
                checked={this.props.selectedClass}
                onChange={e => updateFeature(feature, item)}
              />
              <label htmlFor={id} className="feature__label">
                {item.name} ({USCurrencyFormat.format(item.cost)})
              </label>
            </div>
        )
    }
}