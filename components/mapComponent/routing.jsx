import { useEffect, useRef, useState } from 'react'
import { useMap } from 'react-leaflet/hooks'
import RoutingMachine from './routingMachine'
import { RotatedMarker } from 'leaflet-marker-rotation'

export default function Routing({
  pickUp,
  destination,
  routingflag,
  setDistance,
  setTime,
  setReset,
}) {
  const map = useMap()

  const rMachine = useRef()

  const [controlflagR, setcontrolflagR] = useState(false)
  const [destinationReached, setDestinationreached] = useState(false)

  useEffect(() => {
    if (destinationReached) {
      map.eachLayer(function (layer) {
        if (!layer.options.attribution) {
          setReset(true)
          map.removeLayer(layer)
        }
      })
    }
    if (rMachine.current) {
      if (controlflagR) {
        map.removeControl(rMachine.current)
      }
    }
  }, [controlflagR, routingflag, map, destinationReached, setReset])

  return (
    <>
      {!routingflag ? (
        <></>
      ) : (
        <RoutingMachine
          ref={rMachine}
          map={map}
          pickUp={pickUp}
          destination={destination}
          setcontrolflagR={setcontrolflagR}
          setDistance={setDistance}
          setTime={setTime}
          setDestinationreached={setDestinationreached}
        ></RoutingMachine>
      )}
    </>
  )
}
