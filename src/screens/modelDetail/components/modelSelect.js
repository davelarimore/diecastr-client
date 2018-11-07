import React from 'react';
import Radium from 'radium';

const styles = {
    field: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        textAlign: 'left',
        marginBottom: 15,
    },
    label: {
        color: '#666',
        display: 'inline-block',
        flex: '1 1 50%',
        fontWeight: 400,
        fontSize: 14,
    },
    select: {
        fontFamily: "'Lato', sans-serif",
        fontWeight: 700,
        fontSize: 18,
        width: '100%',
        height: 40,
        lineHeight: 40,
        border: 0,
        borderRadius: 0,
        outlineOffset: -1,
        textIndent: 0,
        outline: '1px solid rgba(0,0,0,0)',
        backgroundColor: 'rgba(0,0,0,0)',
        padding: 0,
        ":focus": {
            backgroundColor: '#CCC',
            height: 40,
            lineHeight: 40,
            outlineOffset: 0,
        }
    },
    error: {
        display: 'inline-block',
        flex: '1 1 50%',
        textAlign: 'right',
        fontSize: 12,
        color: 'red',
    },
    warning: {
        display: 'inline-block',
        flex: '1 1 50%',
        textAlign: 'right',
        fontSize: 12,
        color: 'blue',
    },
    input: {
        width: '100%',
        height: 40,
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 40,
        padding: 0,
        border: 'none',
        outline: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        ":focus": {
            backgroundColor: '#CCC',
            height: 40,
            lineHeight: 40,
            outlineOffset: 0,
        },
    },
    hr: {
        display: 'inline-block',
        flex: '1 1 100%',
        color: '#888',
        backgroundColor: '#888',
        margin: '0',
        border: 'none',
        height: 1,
    }
}

export class ModelSelect extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {

        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <div style={styles.error}>{this.props.meta.error}</div>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = (
                <div style={styles.warning}>{this.props.meta.warning}</div>
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
                style={styles.select}
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
                style={styles.input}
                {...this.props.input}
                id={this.props.input.name}
                type='text'
                ref={input => (this.input = input)}
            />

        return (
            <div style={styles.field} className="form-input">
                <label style={styles.label} htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                {error}
                {warning}
                <hr style={styles.hr}></hr>
                {this.props.readOnly ? input : select}
            </div>
        );
    }
}

export default Radium(ModelSelect);