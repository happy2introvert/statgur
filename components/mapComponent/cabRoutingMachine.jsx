import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'
import { RotatedMarker } from 'leaflet-marker-rotation'
import markerRotationNorth from './markerRotationNorth'
import markerRotationEast from './markerRotationEast'
import markerRotationSouth from './markerRotationSouth'
import markerRotationWest from './markerRotationWest'
import markerRotationNorthEast from './markerRotationNorthEast'
import markerRotationNorthWest from './markerRotationNorthWest'
import markerRotationSouthEast from './markerRotationSouthEast'
import markerRotationSouthWest from './markerRotationSouthWest'

const createRoutineMachineLayer = (props) => {
  const carIcon = L.icon({
    iconUrl: 'car.svg',
    iconSize: [50, 50], // size of the icon
  })

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

    let head = routes[0].instructions[0].direction
    const rotationAngle = markerRotationNorth(head)
    const marker = L.rotatedMarker(props.pickUp, {
      icon: carIcon,
      rotationAngle: rotationAngle,
      draggable: false,
      rotationOrigin: 'center center',
    }).addTo(props.map)

    routes[0].coordinates.forEach(function (coord, index) {
      setTimeout(() => {
        marker.setLatLng([coord.lat, coord.lng])
        if (index == lengthCoord - 1) {
          props.setcontrolflagCab(true)
          props.map.removeLayer(marker)
        }
      }, 100 * index)
    })
    routes[0].instructions.forEach(function (instruct, index) {
      setTimeout(() => {
        if (head == 'N') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationNorth(instruct.direction))
        } else if (head == 'S') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationSouth(instruct.direction))
        } else if (head == 'E') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationEast(instruct.direction))
        } else if (head == 'W') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationWest(instruct.direction))
        } else if (head == 'NW') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationNorthWest(instruct.direction))
        } else if (head == 'NE') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationNorthEast(instruct.direction))
        } else if (head == 'SW') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationSouthWest(instruct.direction))
        } else if (head == 'SE') {
          head = instruct.direction
          marker.setRotationAngle(markerRotationSouthEast(instruct.direction))
        }
      }, 100 * index * (lengthCoord / lengthDirect))
    })
  })

  return instance
}

const CabRoutingMachine = createControlComponent(createRoutineMachineLayer)

export default CabRoutingMachine
