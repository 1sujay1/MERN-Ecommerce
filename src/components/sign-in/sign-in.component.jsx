import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { signInWithEmailAndPassword } from 'firebase/auth';

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await signInWithEmailAndPassword(auth, email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
        }

    }
    render() {
        return (
            <div className="sign-in" >
                <h2 className="title">I Already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} >

                    <FormInput
                        name="email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                        label='Email'
                    />
                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        required
                        label='Password'
                    />

                    <div className="buttons">
                        <CustomButton type="submit">
                            Sign in
                        </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
