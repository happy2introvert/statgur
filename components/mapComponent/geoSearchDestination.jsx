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

    return () => map.removeControl(searchControl)
  }, [map, props])

  return null
}
