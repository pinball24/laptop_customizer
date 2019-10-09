import React, { Component } from 'react';
import FormListItem from './FormListItem';
import slugify from 'slugify';

export default class FormFeature extends Component {
    static defaultProps = {
        featureHash: '',
        selected: '',
        features: '',
        feature: '',
        updateFeature: () => {}
    }
    render() {
        const { selected, features, feature, updateFeature } = this.props
        const options = features[feature].map(item => {
            const selectedClass = item.name === selected[feature].name
            const featureClass = 'feature__option' + selectedClass;
            const itemHash = slugify(JSON.stringify(item));

        return (
            <FormListItem
                key={itemHash}
                id={itemHash}
                feature={feature}
                featureClass={featureClass}
                item={item}
                updateFeature={updateFeature}
            />
        )
        });
        return (
            <fieldset className="feature" key={feature}>
                <legend className="feature__name">
                    <h3>{this.props.feature}</h3>
                </legend>
                { options }
            </fieldset>
        )
    }
}