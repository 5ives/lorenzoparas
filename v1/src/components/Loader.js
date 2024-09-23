import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import { INTRO_AVG_TYPING_DELAY, INTRO_WELCOME_MESSAGE } from '../consts/IntroValues';

const welcomeWrapperStyle = {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    textAlign: 'center'
}

const welcomeStyle = {
    fontFamily: 'Benne-Regular',
    fontSize: '64px'
}

const Loader = () => {
    return (
        <div style={welcomeWrapperStyle}>
            <div style={welcomeStyle}>
                <Typist avgTypingDelay={INTRO_AVG_TYPING_DELAY}>
                    {INTRO_WELCOME_MESSAGE}
                </Typist>
            </div>
        </div>
    );
}

export default Loader;