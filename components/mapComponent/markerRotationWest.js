export default function markerRotationWest(direction) {
  switch (direction) {
    case 'W':
      return 0

    case 'SW':
      return 45

    case 'NW':
      return -45

    case 'S':
      return 90

    case 'N':
      return -90

    case 'SE':
      return 135

    case 'NE':
      return -135

    case 'E':
      return 180

    default:
      break
  }
}
