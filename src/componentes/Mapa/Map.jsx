import React from 'react'
import {GoogleMap,
withScriptjs,
withGoogleMap
}from 'react-google-maps'

const Map=(props)=> {
    return (
        <GoogleMap
        defaultZoom={10}
        defaultCenter={{lat:19.42,lng:-99.16}}
        >

        </GoogleMap>

    )
}

export default withScriptjs(
    withGoogleMap(Map)
)
