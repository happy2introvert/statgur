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

    return () => map.removeControl(searchControlPickUp)
  }, [map, props])

  return null
}
