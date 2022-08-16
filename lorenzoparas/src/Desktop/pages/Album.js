/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { useParams } from "react-router-dom";
import { getImages } from "../../services/AWSS3Service";

const picStyle = {
    height: '400px',
    width: '400px',
    margin: '2px',
    borderRadius: '16px'
}

const picWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, max-content))',
    columnGap: '64px',
    rowGap: '64px',
    justifyContent: 'center'
}

const contentStyle = {
    margin: '8vh 8vw 8vh 8vw',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#212121',
    marginLeft: '8vw',
	width: 'min(1200px, 65vw)',
	position: 'relative',
    flexDirection: 'column',
}

const headerStyle = {
    color: 'white',
    fontSize: '90px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row'
};

const subHeaderStyle = {
    color: 'lightgrey',
    fontSize: '45px'
}

const Album = () => {
    const [imageUrls, setImageUrls] = useState([]);
    let { album } = useParams();
    const decodedAlbum = decodeURIComponent(album);

    useEffect(() => {
        initImages();
    }, []);

    const initImages = async () => {
        const imageUrlData= await getImages(decodedAlbum) || [];
        setImageUrls(imageUrlData);
    };

    return (
        <FadeIn delay={200}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    /<span style={{color: '#FF4545'}}>gallery</span>
                </div>
                <div style={{marginTop: '-45px'}}>
                    <h3 style={subHeaderStyle}>
                        { decodedAlbum }
                    </h3>
                </div>
                <div style={picWrapperStyle}>
                    {
                        imageUrls && imageUrls.map(imageUrl => {
                            return (
                                <img src={imageUrl} style={picStyle} alt="profile-pic"/>
                            );
                        })
                    }
                </div>
                </div>
        </FadeIn>
        
    );
};

export default Album;