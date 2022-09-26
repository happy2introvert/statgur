import { useEffect, useRef, useState } from 'react'
import { useMap } from 'react-leaflet/hooks'
import CabRoutingMachine from './cabRoutingMachine'

export default function CabRouting({ pickUp, destination, routingflag }) {
  const map = useMap()
  const cabpickUp = [pickUp[0] - 0.15, pickUp[1] - 0.05]
  const cabdestination = [pickUp[0] + 0.1, pickUp[1] + 0.1]

  const [controlflagCab, setcontrolflagCab] = useState(false)

  const cabMachine = useRef()

  useEffect(() => {
    if (cabMachine.current) {
      if (controlflagCab) {
        map.removeControl(cabMachine.current)
      }
    }
  }, [routingflag, map, controlflagCab])

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
          setcontrolflagCab={setcontrolflagCab}
        />
      )}
    </>
  )
}
