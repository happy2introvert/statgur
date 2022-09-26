export default function markerRotationEast(direction) {
  switch (direction) {
    case 'E':
      return 0

    case 'NE':
      return 45

    case 'SE':
      return -45

    case 'N':
      return 90

    case 'S':
      return -90

    case 'NW':
      return 135

    case 'SW':
      return -135

    case 'W':
      return 180

    default:
      break
  }
}
