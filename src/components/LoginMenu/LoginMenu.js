import React from 'react';
import './LoginMenu.css';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

// Buttons style properties
const style = {
    height: '2.3rem',
    margin: '.1rem .3rem'
}

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
            <div className="Login"
                onMouseEnter={this.toggleButton}  
                onMouseLeave={this.toggleButton}>
                <button className={this.state.showMenu ? 'Button-Active' : ''}>
                    Log In
                </button>
                <div className={!this.state.showMenu ? 'Login-Menu hidden' : 'Login-Menu'}>
                    <FacebookLoginButton style={style}>
                        <span>Facebook</span> 
                    </FacebookLoginButton>
                    <GoogleLoginButton style={style}>
                        <span>Google</span> 
                    </GoogleLoginButton>
                    <TwitterLoginButton style={style}>
                        <span>Twitter</span> 
                    </TwitterLoginButton>
                </div>    
            </div>
        )
    }
} 

export default SignInButton;