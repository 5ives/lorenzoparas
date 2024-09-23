import React from 'react';
import { useMediaQuery } from 'react-responsive'
import Desktop from './Desktop/Desktop';
import Tablet from './Tablet/Tablet';
import Mobile from './Mobile/Mobile';

function Body() {
    const isTablet = useMediaQuery({ query: '(max-width: 900px)' });
	const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
    return isMobile ? <Mobile/> : isTablet ? <Tablet/> : <Desktop/>
}

export default Body;