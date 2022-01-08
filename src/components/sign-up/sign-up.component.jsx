
import React from 'react';
import { createUserDateWithEmailAndPassword, createUserProfileDocument } from '../../firebase/firebase.utils';
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
        console.log("this", this.state);
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Password donot match");
            return;
        }
        try {
            const { user } = await createUserDateWithEmailAndPassword(email, password);
            console.log("user", user);
            await createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
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

export default SignUp;
