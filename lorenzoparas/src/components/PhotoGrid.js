import React, { useEffect } from 'react';

const picStyle = {
    height: '200px',
    width: '200px',
    margin: '2px',
    borderRadius: '16px'
}

const picWrapperStyle = {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap'
}

function PhotoGrid() {
    const [images, setImages] = React.useState([]);

    useEffect(() => {
        const imgs = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
        setImages(imgs);
    }, []);

    function importAll(r) {
        return r.keys().map(r);
    }

    return (
        <div style={picWrapperStyle}>
            {
                (images) && images.map((i) => {
                    return (
                        <img src={i.default} style={picStyle} alt="profile-pic"/>
                    );
                })
            }
        </div>
    );
}

export default PhotoGrid;