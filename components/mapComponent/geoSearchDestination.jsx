import { GeoSearchControl } from 'leaflet-geosearch'
import { useEffect } from 'react'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet-geosearch/dist/geosearch.css'

export default function GeoSearchDestination(props) {
  const map = useMap()
  useEffect(() => {
    const searchControl = new GeoSearchControl(
      {
        prodiver: props.provider,
        ...props,
      },
      []
    )

    map.addControl(searchControl)

    // if (!props.isRoute) {
    //   map.on('geosearch/showlocation', (result) => {
    //     console.log('Destion ', result.location.y, result.location.x)
    //     props.handler([result.location.y, result.location.x])
    //   })
    // }

    return () => map.removeControl(searchControl)
  }, [map, props])

  return null
}
