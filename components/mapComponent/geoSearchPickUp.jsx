import { GeoSearchControl } from 'leaflet-geosearch'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet-geosearch/dist/geosearch.css'

export default function GeoSearchPickUp(props) {
  const map = useMap()
  useEffect(() => {
    const searchControlPickUp = new GeoSearchControl(
      {
        prodiver: props.provider,
        ...props,
      },
      []
    )
    map.addControl(searchControlPickUp)

    // map.on('geosearch/marker/dragend', (result) => {
    //   if (props.isRoute) {
    //     console.log('Pickup', result.location.y, result.location.x)
    //     props.handler([result.location.y, result.location.y])
    //   }
    // })

    return () => map.removeControl(searchControlPickUp)
  }, [map, props])

  return null
}
