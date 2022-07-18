import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'
import  React  from 'react'
import ReactMapGL from 'react-map-gl'
import { useState } from 'react'

function GMapFrame() {
    return (
        <iframe
            title='GmapFrame'
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d493.74132322566464!2d2.792584126372935!3d36.265949487247056!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2sdz!4v1656784198632!5m2!1sfr!2sdz"
            style={{border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    )
}
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

export default React.memo(GMapFrame)