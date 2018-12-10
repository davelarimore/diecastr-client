import React from 'react';
import './modelSelect.scss';

export class ModelSelect extends React.Component {
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

        const options = this.props.options.map((option, index) =>
            <option
                key={index}
                value={option.value}
            >{option.text}
            </option>
        )

        const select =
            <select
                {...this.props.input}
                id={this.props.input.name}
                ref={input => (this.input = input)}
                autoComplete={this.props.autoComplete || ''}
            >
                {options || null}
            </select>

        //convert to text field for read-only views
        const input =
            <input
                readOnly={true}
                defaultValue={this.props.defaultValue}
                {...this.props.input}
                id={this.props.input.name}
                type='text'
                ref={input => (this.input = input)}
            />

        return (
            <div className='modelSelectField'>
                <label htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                {error}
                {warning}
                <hr></hr>
                {this.props.readOnly ? input : select}
            </div>
        );
    }
}

export default ModelSelect;