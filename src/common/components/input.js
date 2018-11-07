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
        '@media screen and (max-width: 767px)': {
            flex: '1 1 30%',
        },
        '@media screen and (max-width: 420px)': {
            flex: '1 1 30%',
        },
    },
    error: {
        display: 'inline-block',
        flex: '1 1 50%',
        textAlign: 'right',
        fontSize: 12,
        color: 'red',
        '@media screen and (max-width: 767px)': {
            flex: '1 1 70%',
        },
        '@media screen and (max-width: 420px)': {
            flex: '1 1 70%',
        },
    },
    input: {
        width: '100%',
        height: 40,
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 40,
        padding: 0,
        // textIndent: 8,
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
        backgroundColor: '#888',
        margin: '0',
        border: 'none',
        height: 1,
    }
}

export class Input extends React.Component {
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
                <input
                    style={styles.input}
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                    autoComplete={this.props.autoComplete || ''}
                />
            </div>
        );
    }
}

export default Radium(Input);