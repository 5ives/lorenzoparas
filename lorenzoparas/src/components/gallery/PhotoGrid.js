import React, { useState, useEffect } from 'react';
import { getAlbums, getImages } from '../../services/AWSS3Service';
import { Link } from 'react-router-dom';

const albumOptionStyle = {
    height: '400px',
    width: '400px',
    margin: '2px'
}

const albumPhotoStyle = {
    height: '300px',
    width: '300px',
    borderRadius: '16px'
}

const albumOptionWrapperStyle = {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    color: 'white'
}

function PhotoGrid() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        initAlbumOptions();
    }, []);

    const initAlbumOptions = async () => {
        const albumData = await getAlbums();
        const albumDataWithImage = await Promise.all(albumData.map(async album => {
            const albumImages = await getImages(album);
            return { location: album, imageUrl: albumImages[0] }
        }));
        setAlbums(albumDataWithImage);
    };

    return (
        <div style={albumOptionWrapperStyle}>
            {
                albums && albums.map(album => {
                    return (
                            <div style={albumOptionStyle}>
                                <Link to={`/gallery/${encodeURIComponent(album.location)}`}>
                                    <img src={album.imageUrl} style={albumPhotoStyle} alt={album.location}/>
                                </Link>
                                <div>{ album.location }</div>
                            </div>
                    );
                })
            }
        </div>
    );
}

export default PhotoGrid;