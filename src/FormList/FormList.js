import React, { Component } from 'react';
import FormFeature from './FormFeature';

export default class FormList extends Component {
  static defaultProps ={
    features: '',
    selected: '',
    updateFeature: () => {}
  }
     render() {
      const features = Object.keys(this.props.features).map((feature, idx) => {
        const featureHash = feature + '-' + idx;
      return (
        <FormFeature
          key={featureHash}
          feature={feature}
          id={featureHash}
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      );
      });
    return (
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
        </form>
    )
  }
}