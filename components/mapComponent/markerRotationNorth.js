export default function markerRotationNorth(direction) {
  switch (direction) {
    case 'N':
      return 0

    case 'NW':
      return 45

    case 'NE':
      return -45

    case 'W':
      return 90

    case 'E':
      return -90

    case 'SW':
      return 135

    case 'SE':
      return -135

    case 'S':
      return 180

    default:
      break
  }
}
