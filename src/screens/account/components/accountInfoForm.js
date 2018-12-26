import React from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import { updateUserData } from '../../../modules/account';
import './accountInfoForm.scss'

const renderField = field => (
    <div>
        <label className='accountFormLabel' htmlFor={field.label}>User Name</label>
        <input className='accountFormInput' {...field.input} id={field.input.name}/>
        {field.touched && field.error && <div className="error">{field.error}</div>}
    </div>
);

export class AccountInfoFormComponent extends React.Component {
    render() {
        const { handleSubmit } = this.props;
        return (
                <form onSubmit={handleSubmit}>
                    <Field name="userName" type="text" id='userName' label='userName' component={renderField} />
                    <button className='accountFormButton' action="submit">Save changes</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfoForm)