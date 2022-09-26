export default function markerRotationSouthEast(direction) {
  switch (direction) {
    case 'SE':
      return 0

    case 'E':
      return 45

    case 'S':
      return -45

    case 'NE':
      return 90

    case 'SW':
      return -90

    case 'N':
      return 135

    case 'W':
      return -135

    case 'NW':
      return 180

    default:
      break
  }
}
