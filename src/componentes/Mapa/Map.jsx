import React from 'react'
import {GoogleMap,
withScriptjs,
withGoogleMap
}from 'react-google-maps'

const Map=(props)=> {
    return (
        <GoogleMap
        defaultZoom={20}
        defaultCenter={{lat:-33.043653,lng:-71.627484}}
        text="Hotel Ecomusic"
        >

        </GoogleMap>

    )
   //   -33.0437133,-71.6296591
}

export default withScriptjs(
    withGoogleMap(Map)
)
