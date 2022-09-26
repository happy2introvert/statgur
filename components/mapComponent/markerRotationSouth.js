export default function markerRotationSouth(direction) {
  switch (direction) {
    case 'S':
      return 0

    case 'SE':
      return 45

    case 'SW':
      return -45

    case 'E':
      return 90

    case 'W':
      return -90

    case 'NE':
      return 135

    case 'NW':
      return -135

    case 'N':
      return 180

    default:
      break
  }
}
