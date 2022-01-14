import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.style.scss';
import { auth } from '../../firebase/firebase.utils';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

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
    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;
        emailSignInStart(auth, email, password);
    }
    render() {
        const { googleSignInStarts } = this.props;
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
                        <CustomButton type="button" isGoogleSignIn onClick={googleSignInStarts}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStarts: () => dispatch(googleSignInStart()),
    emailSignInStart: (auth, email, password) => dispatch(emailSignInStart({ auth, email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);
