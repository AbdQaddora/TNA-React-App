import React, { useRef, useEffect } from 'react'

// Tom Tom map
import '@tomtom-international/web-sdk-maps/dist/maps.css'
import tt from '@tomtom-international/web-sdk-maps';
// css
import './map.css'
// icons

export default function Map({ lat, lng }) {
    const mapElement = useRef(null);

    useEffect(() => {
        let map = tt.map({
            key: process.env.REACT_APP_TOM_TOM_API_KEY,
            container: mapElement.current,
            center: [lng, lat],
            zoom: 13
        });
        const markerImg = document.createElement("img");
        markerImg.src = 'assets/images/marker.svg'
        markerImg.className = "marker";

        new tt.Marker({
            element: markerImg,
        }).setLngLat([lng, lat]).addTo(map);
        map.scrollZoom.disable();

        return () => map.remove();
    }, [lat, lng]);
    return (
        <div ref={mapElement} className="map-container"></div>
    )
}
