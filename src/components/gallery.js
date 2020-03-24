import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import { LanguageContext } from '../context';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const customStyles = {
	content: {
		backgroundColor: 'rgba(0,0,0,.6)',
	},
};

const Gallery = props => {
	const context = useContext(LanguageContext);
	const [toggler, setToggler] = useState(false);
	const [photoIndex, setPhotoIndex] = useState(0);
	const images = props.images;

	if (!images) return <Redirect to="/" />;

	const thumbnails = images.map((image, index) => {
		return (
			<div
				key={index}
				className="gallery__thumbnail"
				onClick={() => {
					setPhotoIndex(index);
					setToggler(true);
				}}
			>
				<div
					className={
						context.language === 'pl'
							? 'gallery__thumbnail-curtain gallery__thumbnail-curtain--pl'
							: 'gallery__thumbnail-curtain gallery__thumbnail-curtain--en'
					}
				></div>
				<img className="gallery__thumbnail-image" src={image.tn} alt={context.dictionary.gallery.photo} />
			</div>
		);
	});

	return (
		<section className="content">
			<article className="project">
				<h1 className="project-title">{props.name}</h1>
				<div className="gallery">{thumbnails}</div>
				{toggler && (
					<Lightbox
						mainSrc={images[photoIndex].src}
						nextSrc={images[(photoIndex + 1) % images.length].src}
						prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
						onCloseRequest={() => setToggler(false)}
						onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
						onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
						reactModalStyle={customStyles}
					/>
				)}
			</article>
		</section>
	);
};

export default Gallery;
