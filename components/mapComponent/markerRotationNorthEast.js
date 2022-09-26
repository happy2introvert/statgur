export default function markerRotationNorthEast(direction) {
  switch (direction) {
    case 'NE':
      return 0

    case 'N':
      return 45

    case 'E':
      return -45

    case 'NW':
      return 90

    case 'SE':
      return -90

    case 'W':
      return 135

    case 'S':
      return -135

    case 'SW':
      return 180

    default:
      break
  }
}
