import React from 'react';
import Radium from 'radium';
import { Field, reduxForm, focus } from 'redux-form';
import Input from '../../../common/components/input';
import { required, nonEmpty } from '../../../utils/validators';

import './loginForm.css';

export class LoginForm extends React.Component {

    onSubmit(values) {
        return this.props.login(values)
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="formError" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <form
                className="authForm"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <Field
                    label='Email'
                    component={Input}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete='email'
                    validate={[required, nonEmpty]}
                />
                <Field
                    label='Password'
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    autoComplete='password'
                    validate={[required, nonEmpty]}
                />
                <button className='submit' disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </button>
            </form>
        );
    }
}


export default Radium(
    reduxForm({
        form: 'login',
        onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
    })(LoginForm)
)