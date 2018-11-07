import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import Radium from 'radium';
import { updateUserData } from '../../../modules/account';

const styles = {
    input: {
        height: 40,
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 40,
        padding: 0,
        textAlign: 'center',
        border: 'none',
        outline: 'none',
        borderRadius: 4,
        backgroundColor: '#FFF',
        margin: '10px 0',
        ":focus": {
            backgroundColor: '#CCC',
            height: 40,
            lineHeight: 40,
            outlineOffset: 0,
        },
    },
    button: {
        fontFamily: "'Lato', sans-serif",
        fontSize: 12,
        lineHeight: '26px',
        fontWeight: 700,
        textTransform: 'uppercase',
        border: 'none',
        borderRadius: 4,
        display: 'inline-block',
        backgroundColor: '#FFF',
        padding: '6px 15px',
        cursor: 'pointer',
        margin: '10px 10px',
        ':hover': {
            color: '#CCC',
        },
    }
}

const renderField = field => (
    <div>
        <input style={styles.input} {...field.input} />
        {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

export class AccountInfoFormComponent extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
                <form onSubmit={handleSubmit}>
                <label>User Name</label>
                    <Field name="userName" type="text" component={renderField} />
                    <button style={styles.button} action="submit">Save changes</button>
                </form>
        );
    }
}

// Decorate with reduxForm(). It will read the initialValues prop provided by connect()
const AccountInfoForm = reduxForm({
    form: 'AccountInfoForm', // a unique identifier for this form
    enableReinitialize: true
})(AccountInfoFormComponent)

const mapStateToProps = state => ({
    initialValues: state.account.user,
})

const mapDispatchToProps = dispatch => ({
    onSubmit: values => { dispatch(updateUserData(values)) },
})

export default Radium(connect(mapStateToProps, mapDispatchToProps)(AccountInfoForm))