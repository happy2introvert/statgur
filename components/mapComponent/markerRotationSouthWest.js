export default function markerRotationSouthWest(direction) {
  switch (direction) {
    case 'SW':
      return 0

    case 'S':
      return 45

    case 'W':
      return -45

    case 'SE':
      return 90

    case 'NW':
      return -90

    case 'E':
      return 135

    case 'N':
      return -135

    case 'NE':
      return 180

    default:
      break
  }
}
