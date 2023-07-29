import React, { useState, useEffect } from 'react';
import { getAlbums, getImages } from '../../services/aws-s3-service';
import { Link } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

const albumOptionStyle = {
    height: '400px',
    width: '400px',
    fontSize: '24px'
}

const albumPhotoStyle = {
    height: '376px',
    width: '376px',
    borderRadius: '16px'
}

const albumOptionWrapperStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, max-content))',
    columnGap: '64px',
    rowGap: '64px',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'center'
}

function AlbumGrid() {
    const [albums, setAlbums] = useState([]);
    const [numImagesLoaded, setNumImagesLoaded] = useState(0);

    useEffect(() => {
        initAlbumOptions();
    }, []);

    const initAlbumOptions = async () => {
        const albumData = await getAlbums();
        const albumDataWithImage = await Promise.all(albumData.map(async album => {
            const albumImages = await getImages(album, 1);
            return { location: album, imageUrl: albumImages[0] }
        }));
        setAlbums(albumDataWithImage);
    };

    return (
        <>
            { numImagesLoaded !== albums.length && (
                <LinearProgress variant="determinate" value={(numImagesLoaded/albums.length) * 100}/>
            )}
            <div style={albumOptionWrapperStyle} hidden={ numImagesLoaded !== albums.length }>
                {
                    albums && albums.map(album => {
                        return (
                            <div style={albumOptionStyle} hidden={ numImagesLoaded !== albums.length }>
                                <Link to={`/gallery/${encodeURIComponent(album.location)}`}>
                                    <img
                                        hidden={ numImagesLoaded !== albums.length }
                                        src={album.imageUrl}
                                        style={albumPhotoStyle}
                                        alt={album.location}
                                        onLoad={() => setNumImagesLoaded(numImagesLoaded => numImagesLoaded + 1)}
                                    />
                                </Link>
                                <div>{ album.location }</div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
}

export default AlbumGrid;