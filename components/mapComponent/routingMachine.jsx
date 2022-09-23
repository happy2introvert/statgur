import L from 'leaflet'
import { createControlComponent } from '@react-leaflet/core'
import 'leaflet-routing-machine'

const createRoutineMachineLayer = (props) => {
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

    routes[0].coordinates.forEach(function (coord, index) {
      setTimeout(() => {
        props.marker.setLatLng([coord.lat, coord.lng])
        if (index == length - 1) {
          props.setcontrolflagR(true)
          props.map.removeLayer(props.marker)
        }
        if (
          coord.lat.toFixed(3) === props.pickUp[0].toFixed(3) &&
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
      'Total distance is ' +
        finaldistance +
        'km and total time is ' +
        finaltime +
        ' minutes'
    )
  })

  return instance
}

const RoutingMachine = createControlComponent(createRoutineMachineLayer)

export default RoutingMachine
