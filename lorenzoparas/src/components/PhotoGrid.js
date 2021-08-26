import React, { useEffect } from 'react';
import listReactFiles from 'list-react-files'

const picStyle = {
    height: '200px',
    width: '200px'
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
        <div>
            {
                (images) && images.map((i) => {
                    console.log(i.default)
                    return (
                        <img src={i.default} style={picStyle} alt="profile-pic"/>
                    );
                })
            }
        </div>
    );
}

export default PhotoGrid;