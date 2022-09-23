import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'

const createRoutineMachineLayer = (props) => {
  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.pickUp[0], props.pickUp[1]),
      L.latLng(props.destination[0], props.destination[1]),
    ],
    lineOptions: {
      styles: [{ color: 'transparent', weight: 4 }],
    },
    // router: new L.Routing.Google(),
    show: false,
    createMarker: function () {
      return null
    },
    addWaypoints: true,
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  })

  instance.on('routesfound', function (e) {
    const routes = e.routes
    const lengthCoord = routes[0].coordinates.length
    const lengthDirect = routes[0].instructions.length

    routes[0].coordinates.forEach(function (coord, index) {
      setTimeout(() => {
        props.marker.setLatLng([coord.lat, coord.lng])
        if (index == lengthCoord - 1) {
          props.setcontrolflagCab(true)
          props.map.removeLayer(props.marker)
        }
      }, 100 * index)
    })

    routes[0].instructions.forEach(function (instruct, index) {
      setTimeout(() => {
        switch (instruct.direction) {
          case 'N':
            props.marker.setRotationAngle(0)
            break
          case 'NW':
            props.marker.setRotationAngle(45)
            break
          case 'W':
            props.marker.setRotationAngle(90)
            break
          case 'SW':
            props.marker.setRotationAngle(135)
            break
          case 'S':
            props.marker.setRotationAngle(180)
            break
          case 'SE':
            props.marker.setRotationAngle(225)
            break
          case 'E':
            props.marker.setRotationAngle(270)
            break
          case 'NE':
            props.marker.setRotationAngle(315)
            break

          default:
            break
        }
      }, 100 * index * (lengthCoord / lengthDirect))
    })
  })

  return instance
}

const CabRoutingMachine = createControlComponent(createRoutineMachineLayer)

export default CabRoutingMachine
