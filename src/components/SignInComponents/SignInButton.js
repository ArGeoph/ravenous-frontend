import React from 'react';
import './SignInButton.css';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';


class SignInButton extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        }
        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        return (
            <div className="Login">
                <button 
                    onClick={this.toggleButton}
                    className={this.state.showMenu ? 'Button-Active' : ''}>
                    Log In
                </button>
                <div className={!this.state.showMenu ? 'Login-Menu hidden' : 'Login-Menu'}>
                    <FacebookLoginButton>
                        <span>Facebook</span> 
                    </FacebookLoginButton>
                    <GoogleLoginButton>
                        <span>Google</span> 
                    </GoogleLoginButton>
                    <TwitterLoginButton>
                        <span>Twitter</span> 
                    </TwitterLoginButton>
                </div>    
            </div>
        )
    }
} 

export default SignInButton;