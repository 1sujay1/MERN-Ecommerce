
import React from 'react';
import { connect } from 'react-redux';
import { createUserDateWithEmailAndPassword, createUserProfileDocument } from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up.style.scss';


class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
    handleChange = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert("Password donot match");
            return;
        }

        signUpStart(displayName, email, password)

    }
    render() {
        return (
            <div className="sign-up">
                <h1 className="title">I do not have an account</h1>
                <span>Sign up with email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} >
                    <FormInput
                        name='displayName'
                        type='text'
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        required
                        label='Name'
                    />
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label='Password'
                    />
                    <FormInput
                        name='confirmPassword'
                        type='confirmPassword'
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange}
                        required
                        label='Confirm password'
                    />
                    <CustomButton type='submit'>Submit</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({ displayName, email, password }))
})
export default connect(null, mapDispatchToProps)(SignUp);
