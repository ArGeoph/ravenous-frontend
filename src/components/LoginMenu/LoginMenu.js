import React, { useState } from 'react';
import './LoginMenu.css';
import { FacebookLoginButton, GoogleLoginButton, TwitterLoginButton } from 'react-social-login-buttons';

// Buttons style properties
const style = {
    height: '2.3rem',
    margin: '.1rem .3rem'
}

export const LoginMenu = React.memo(() => {
    const [ isLoginMenuVisible, setLoginMenuVisibility ] = useState(false);

    return (
        <div
            className='Login'
            onMouseEnter={ () => setLoginMenuVisibility(true) }
            onMouseLeave={ () => setLoginMenuVisibility(false) }
        >
            <button className={ isLoginMenuVisible ? 'Login-Button Login-Button-Active' : 'Login-Button' }>
                Log In With
            </button>

            <div className={ isLoginMenuVisible ? 'Login-Menu' : 'Login-Menu hidden' }>
                <FacebookLoginButton style={ style }>
                    <span>Facebook</span>
                </FacebookLoginButton>
                <GoogleLoginButton style={ style }>
                    <span>Google</span>
                </GoogleLoginButton>
                <TwitterLoginButton style={ style }>
                    <span>Twitter</span>
                </TwitterLoginButton>
            </div>
        </div>
    );
});
