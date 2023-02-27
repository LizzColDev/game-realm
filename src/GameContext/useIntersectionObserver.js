import { useEffect, useState, useRef } from 'react';

function useIntersectionObserver(props){
	const imgRef = useRef(null);
	const [loaded, setLoaded] = useState(false);
	const [cache, setCache] = useState({});
		 useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !loaded) {
					if (cache[props.src]) {
						// Si la imagen ya está en caché, marcar como cargada
						setLoaded(true);
					} else {
						// Si no está en caché, crear una nueva instancia de Image
						const img = new Image();
						img.src = props.src;
						img.onload = () => {
							// Al cargar, agregar a la caché y marcar como cargada
							setCache((prevCache) => ({ ...prevCache, [props.src]: img }));
							setLoaded(true);
						};
					}
				}
			});
		});
	
		if (imgRef.current) {
			observer.observe(imgRef.current);
		}
	
		return () => {
			if (imgRef.current) {
				observer.unobserve(imgRef.current);
			}
		};
	}, [props.src, loaded, cache, imgRef]);

	return{imgRef,
		loaded};
}

export {useIntersectionObserver};