import React from 'react';
import { Field, reduxForm, focus } from 'redux-form';

import Input from '../../../common/components/input';
import { required, nonEmpty, matches, length, isTrimmed, isEmail } from '../../../utils/validators';

import '../../login/components/loginForm.scss';

const userNameLength = length({ min: 3, max: 36 });
const passwordLength = length({ min: 8, max: 72 });
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {

    onSubmit(values) {
        const { email, userName, password } = values;
        const user = { email, userName, password };
        return this.props
            .registerUser(user)
            .then(() => this.props.login(user));
    }

    render() {
        return (
            <form
                className="authForm"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Field
                    label='Email'
                    component={Input}
                    type="email"
                    name="email"
                    autoComplete='email'
                    validate={[required, nonEmpty, isTrimmed, isEmail]}
                />
                <Field
                    label='User Name'
                    component={Input}
                    type="text"
                    name="userName"
                    autoComplete='username'
                    validate={[required, userNameLength, nonEmpty, isTrimmed]}
                />
                <Field
                    label='Password'
                    component={Input}
                    type="password"
                    name="password"
                    autoComplete='new-password'
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Field
                    label='Confirm password'
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    autoComplete='new-password'
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <button
                    className='submit'
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

export default 
    reduxForm({
        form: 'registration',
        onSubmitFail: (errors, dispatch) => dispatch(focus('registration', 'email'))
    })(SignUpForm)