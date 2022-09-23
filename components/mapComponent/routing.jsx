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
}) {
  const startpickUp = [pickUp[0] - 0.05, pickUp[1] - 0.05]
  const map = useMap()

  const carIcon = L.icon({
    iconUrl: 'car.svg',
    iconSize: [50, 50], // size of the icon
  })

  const marker = L.rotatedMarker(startpickUp, {
    icon: carIcon,
    draggable: false,
    rotationOrigin: 'center center',
  }).addTo(map)

  const rMachine = useRef()

  const [controlflagR, setcontrolflagR] = useState(false)

  useEffect(() => {
    if (rMachine.current) {
      if (controlflagR) {
        map.removeLayer(marker)
        map.removeControl(rMachine.current)
      }
    }
  }, [controlflagR, routingflag, map, marker])

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
          marker={marker}
          setcontrolflagR={setcontrolflagR}
          setDistance={setDistance}
          setTime={setTime}
        />
      )}
    </>
  )
}
