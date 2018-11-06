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
        fontWeight: 700,
        fontSize: 14,
    },
    textArea: {
        fontFamily: "'Lato', sans-serif",
        fontWeight: 700,
        fontSize: 18,
        width: '100%',
        padding: '8px 0',
        resize: 'none',
        border: 'none',
        outline: 'none',
        backgroundColor: 'rgba(0,0,0,0)',
        ":focus": {
            backgroundColor: '#CCC',
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
    hr: {
        display: 'inline-block',
        flex: '1 1 100%',
        color: '#888',
        margin: '0',
        borderStyle: 'solid',
        borderWidth: 1,
    }
}

export class ModelTextArea extends React.Component {
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

        return (
            <div style={styles.field} className="form-input">
                <label style={styles.label} htmlFor={this.props.input.name}>
                    {this.props.label}
                </label>
                {error}
                {warning}
                <hr style={styles.hr}></hr>
                <textarea
                    readOnly={this.props.readOnly || false}
                    defaultValue={this.props.defaultValue}
                    style={styles.textArea}
                    {...this.props.input}
                    rows='2'
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

export default Radium(ModelTextArea);