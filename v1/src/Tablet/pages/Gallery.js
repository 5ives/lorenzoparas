import FadeIn from 'react-fade-in';
import AlbumGrid from "../../components/gallery/AlbumGrid";

const contentStyle = {
    margin: '8vh 8vw 8vh 8vw',
    textAlign: 'left',
    display: 'inline-block',
    backgroundColor: '#212121',
    marginLeft: '8vw',
	width: 'min(1200px, 84vw)',
	position: 'relative',
    flexDirection: 'column'
}

const headerStyle = {
    color: 'white',
    fontSize: '60px',
    letterSpacing: '1px',
    fontWeight: '600',
    display: 'flex',
    flexDirection: 'row'
};

const subHeaderStyle = {
    color: 'lightgrey',
    fontSize: '30px'
};

function Gallery() {
    return (
        <FadeIn delay={200}>
            <div style={contentStyle}>
                <div style={headerStyle}>
                    /<span style={{color: '#FF4545'}}>gallery</span>
                </div>
                <div style={{marginTop: '-15px'}}>
                    <h3 style={subHeaderStyle}>
                        (pictures from endeavours)
                    </h3>
                </div>
                <AlbumGrid/>
            </div>
        </FadeIn>
    );
}

export default Gallery;