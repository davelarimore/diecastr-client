import React from 'react';
import './modelInput.scss';

export class ModelInput extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div className='error'>{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div className='warning'>{this.props.meta.warning}</div>
            );
        }

        return (
            <div className='modelInputField'>
                <label htmlFor={this.props.input.name}>
                    {this.props.label}   
                </label>
                {error}
                {warning}
                <hr></hr>
                <input
                    readOnly={this.props.readOnly || false}
                    defaultValue={this.props.defaultValue}
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    min={this.props.min}
                    step={this.props.step}
                    autoComplete={this.props.autoComplete || ''}
                />
            </div>
        );
    }
}

export default ModelInput;