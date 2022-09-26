import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.js'
import 'leaflet-routing-machine/dist/leaflet.routing.icons.png'
import mapstyle from './MapStyle.module.scss'
import MiniMapComponent from './miniMapComponent'
import Routing from './routing'
import GeoSearchPickUp from './geoSearchPickUp'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import { useEffect, useState, Suspense } from 'react'
import GeoSearchDestination from './geoSearchDestination'
import CabRouting from './cabrouting'

import dynamic from 'next/dynamic'

const ArticlesList = dynamic(() => import('../article/ArticlesList'), {
  suspense: true,
})

export default function MapComponent() {
  const prov = new OpenStreetMapProvider()

  const defaultPickUpValue = [19.076, 72.8777]

  const [pickUp, setPickUp] = useState([])

  const [destination, setDestination] = useState([])

  const [routingflag, setRoutingFlag] = useState(false)

  const [distance, setDistance] = useState()

  const [time, setTime] = useState()

  const [reset, setReset] = useState(false)

  useEffect(() => {
    if (pickUp.length == 0) {
      navigator.geolocation.getCurrentPosition(function (position) {
        if (position.coords.latitude || position.coords.longitude) {
          setPickUp([position.coords.latitude, position.coords.longitude])
        }
      })
    }

    if (destination.length > 0) {
      setRoutingFlag(true)
    } else {
      setRoutingFlag(false)
    }

    if (reset) {
      setPickUp([])
      setDestination([])
      setDistance()
      setTime()
      setReset(false)
      alert('Thankyou for ride..')
    }
  }, [pickUp, destination, reset])

  return (
    <MapContainer
      className={mapstyle.map}
      center={pickUp.length > 0 ? pickUp : defaultPickUpValue}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      {pickUp.length > 0 ? (
        <>
          <div className={mapstyle.article}>
            <ArticlesList distance={distance} time={time} />
          </div>
          <MiniMapComponent
            className={mapstyle.MiniMapComponent}
            pickUp={pickUp}
          />
          {pickUp.length > 0 && destination.length == 0 ? (
            <CabRouting
              pickUp={pickUp}
              destination={destination}
              routingflag={routingflag}
            />
          ) : (
            <>
              {pickUp.length > 0 && destination.length > 0 ? (
                <Routing
                  pickUp={pickUp}
                  destination={destination}
                  routingflag={routingflag}
                  setDistance={setDistance}
                  setTime={setTime}
                  setReset={setReset}
                />
              ) : (
                <></>
              )}
            </>
          )}
        </>
      ) : (
        <></>
      )}

      {pickUp.length > 0 ? <Marker position={pickUp} /> : <></>}
      <GeoSearchPickUp
        style='bar'
        provider={prov}
        showMarker={true}
        showPopup={false}
        popupFormat={({ _query, result }) => {
          setPickUp([result.y, result.x])
          return result.label
        }}
        maxMarkers={3}
        retainZoomLevel={false}
        animateZoom={true}
        autoClose={false}
        searchLabel={'Deafult Location or Enter Pick up address'}
        keepResult={true}
        handler={setDestination}
        isRoute={true}
      ></GeoSearchPickUp>
      <GeoSearchDestination
        style='bar'
        provider={prov}
        showMarker={true}
        showPopup={false}
        popupFormat={({ _query, result }) => {
          setDestination([result.y, result.x])
          return result.label
        }}
        maxMarkers={3}
        retainZoomLevel={false}
        animateZoom={true}
        autoClose={false}
        searchLabel={'Enter Destination address, please'}
        keepResult={true}
        handler={setDestination}
        isRoute={false}
      />
    </MapContainer>
  )
}
