import { type JSX } from 'react'
import { GeoJSON } from 'react-leaflet'
import type { FeatureCollection } from '@/types/geometry'


/*
 * 1 collection = 1 map layer
 * 1 collection = array of GeoJSON features
 * 1 feature = may be a point, line, polygon, etc.
 */
interface LayerProps {
  collection: FeatureCollection
}


/* Given a collection, returns an array of <GeoJSON> leaflet components for non-null features. */
export function Layer({ collection }: LayerProps): JSX.Element[] {
  return collection.features
    .filter((feature): feature is NonNullable<typeof feature> => Boolean(feature))
    .map((feature, idx) =>  (
      <GeoJSON
        key={`${collection.name}-${feature.id ?? idx}`} // falls back for null or undefined
        data={feature}
      />
  ));
}
