import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import { React } from 'react'
import ReactMapGL from 'react-map-gl'
import { useState } from 'react'

function MapsV2() {
    const [viewport, setViewport] = useState({
        latitude: 36.26595699232395,
        longitude: 2.7925826642708573,
        width: '100vw',
        height: '100vh',
        zoom: 10
    });

    return (
        <div>
            <ReactMapGL
                {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle="mapbox://styles/leighhalliday/cjufmjn1r2kic1fl9wxg7u1l4"
                onViewportChange={viewport => {
                    setViewport(viewport);
                }}
            >
            </ReactMapGL>
        </div>
    )
}
function GMap() {
    return (
        <GoogleMap
            defaultCenter={{ lat: 36.266086, lng: 2.792602 }}
            defaultZoom={18}
        />
    )
}
const WrappedMap = withScriptjs(withGoogleMap(GMap))
function Maps() {
    return (
        <div style={{ width: '100%', height: '100%' }} className='map-block'>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export { Maps, MapsV2 }