import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

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

const progressStyle = buildStyles({
    pathTransitionDuration: 0.1,
    pathColor: `grey`,
    textColor: 'black',
    trailColor: '#d6d6d6'
});

const spinnerStyle = {
    height: '33vh',
    width: '33vh'
}

const Loader = (loading) => {
    const [percentage, setPercentage] = React.useState(0);
    const [showMessage, setShowMessage] = React.useState(false);
    let count = 0;

    useState(() => {
        let inc = setInterval(() => {
            if (count >= 100) {
                setPercentage(100);
                clearInterval(inc);
                setShowMessage(true);
            } else {
                count++;
                setPercentage(perc => perc + 1);
            }
        }, (2000/100));

    }, []);

    return (
        <div style={welcomeWrapperStyle}>
            {
                showMessage ?
                <div style={welcomeStyle}>
                    <Typist>
                        welcome to my site!
                    </Typist>
                </div>
                :
                loading ?
                <div style={spinnerStyle}>
                    <CircularProgressbar
                        value={percentage * 1.2}
                        text={`${percentage}%`}
                        styles={progressStyle}
                    />
                </div>
                :
                ""
            }
        </div>
    );
}

export default Loader;