export default function markerRotationNorthWest(direction) {
  switch (direction) {
    case 'NW':
      return 0

    case 'W':
      return 45

    case 'N':
      return -45

    case 'SW':
      return 90

    case 'NE':
      return -90

    case 'S':
      return 135

    case 'E':
      return -135

    case 'SE':
      return 180

    default:
      break
  }
}
