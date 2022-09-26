import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'
import markerRotationNorth from './markerRotationNorth'
import markerRotationEast from './markerRotationEast'
import markerRotationSouth from './markerRotationSouth'
import markerRotationWest from './markerRotationWest'
import markerRotationNorthEast from './markerRotationNorthEast'
import markerRotationNorthWest from './markerRotationNorthWest'
import markerRotationSouthEast from './markerRotationSouthEast'
import markerRotationSouthWest from './markerRotationSouthWest'

const createRoutineMachineLayer = (props) => {
  const startpickUp = [props.pickUp[0] - 0.05, props.pickUp[1] - 0.05]
  const carIcon = L.icon({
    iconUrl: 'car.svg',
    iconSize: [50, 50], // size of the icon
  })

  const instance = L.Routing.control({
    waypoints: [
      L.latLng(props.pickUp[0] - 0.05, props.pickUp[1] - 0.05),
      L.latLng(props.pickUp[0], props.pickUp[1]),
      L.latLng(props.destination[0], props.destination[1]),
    ],
    lineOptions: {
      styles: [{ color: '#000000', weight: 4 }],
    },
    // router: new L.Routing.Google(),
    show: false,
    collapsible: undefined,
    hide: true,
    addWaypoints: false,
    createMarker: function () {
      return null
    },
    routeWhileDragging: true,
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  })

  instance.on('routesfound', function (e) {
    const routes = e.routes
    const summary = routes[0].summary
    let temp = 0
    const lengthCoord = routes[0].coordinates.length
    const lengthDirect = routes[0].instructions.length
    let head = routes[0].instructions[0].direction
    const rotationAngle = markerRotationNorth(head)
    const marker = L.rotatedMarker(startpickUp, {
      icon: carIcon,
      rotationAngle: rotationAngle,
      draggable: false,
      rotationOrigin: 'center center',
    }).addTo(props.map)

    routes[0].coordinates.forEach(function (coord, index) {
      setTimeout(() => {
        marker.setLatLng([coord.lat, coord.lng])
        if (index == lengthCoord - 1) {
          props.setcontrolflagR(true)
          props.map.removeLayer(marker)
          props.setDestinationreached(true)
        }
        if (
          coord.lat.toFixed(3) === props.pickUp[0].toFixed(3) ||
          coord.lng.toFixed(3) === props.pickUp[1].toFixed(3)
        ) {
          if (temp == 0) {
            alert('Please confirm you ride...')
            temp++
          }
        }
      }, 100 * index)
    })
    let tempdistance = 0
    let ndistance = 0
    let temptime = 0
    let ntime = 0

    routes[0].instructions.forEach(function (instruct, index) {
      tempdistance = tempdistance + instruct.distance
      temptime = temptime + instruct.time
      if (instruct.type == 'WaypointReached') {
        ndistance = tempdistance
        ntime = temptime
      }

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

    const finaldistance = (
      (summary.totalDistance - ndistance) / 1000 +
      2
    ).toFixed(2)
    const finaltime = Math.round(
      ((summary.totalTime - ntime) % 3600) / 60 + 20
    ).toFixed(2)
    props.setDistance(finaldistance)
    props.setTime(finaltime)

    alert(
      'Total Distance is ' +
        finaldistance +
        'km and Total Time is ' +
        finaltime +
        ' minutes'
    )
  })

  return instance
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine
