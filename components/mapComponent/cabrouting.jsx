import { useEffect, useRef, useState } from 'react'
import { useMap } from 'react-leaflet/hooks'
import CabRoutingMachine from './cabRoutingMachine'
import { RotatedMarker } from 'leaflet-marker-rotation'

export default function CabRouting({ pickUp, destination, routingflag }) {
  const map = useMap()
  const cabpickUp = [pickUp[0] - 0.15, pickUp[1] - 0.05]
  const cabdestination = [pickUp[0] + 0.1, pickUp[1] + 0.1]

  const [controlflagCab, setcontrolflagCab] = useState(false)

  const carIcon = L.icon({
    iconUrl: 'car.svg',
    iconSize: [50, 50], // size of the icon
  })

  const marker = L.rotatedMarker(cabpickUp, {
    icon: carIcon,
    draggable: false,
    rotationOrigin: 'center center',
  }).addTo(map)

  const cabMachine = useRef()

  useEffect(() => {
    if (cabMachine.current) {
      if (controlflagCab) {
        map.removeLayer(marker)
        map.removeControl(cabMachine.current)
      }
    }
  }, [routingflag, map, marker, controlflagCab])

  return (
    <>
      {destination.length > 0 ? (
        <></>
      ) : (
        <CabRoutingMachine
          ref={cabMachine}
          map={map}
          pickUp={cabpickUp}
          destination={cabdestination}
          routingflag={routingflag}
          marker={marker}
          setcontrolflagCab={setcontrolflagCab}
        />
      )}
    </>
  )
}
