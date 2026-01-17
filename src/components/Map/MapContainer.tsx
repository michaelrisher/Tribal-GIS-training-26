import { Box } from '@mui/material';
import { MapContainer as LeafletMapContainer, TileLayer } from 'react-leaflet';
import { Layer } from './Layer';
import 'leaflet/dist/leaflet.css';
import type { FeatureCollection } from '@/types/geometry';


/**
 * Props for the MapContainer component.
 * Each entry in `layers` represents a GeoJSON FeatureCollection
 * rendered as an independent map layer.
 */
interface MapContainerProps {
  layers: FeatureCollection[];
}


/**
 * Renders the main interactive map using react-leaflet and displays
 * one or more GeoJSON feature collections as independent layers.
 */
export function MapContainer({
  layers,
}: MapContainerProps) {
  return (
    <Box
      className="map-wrapper"
      component="section"
      aria-label="Interactive map of geographical data"
      role="region"
      tabIndex={0}
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <LeafletMapContainer
        center={[-3.1319, -60.0261]}
        zoom={11}
        style={{ 
          height: '100%', 
          width: '100%',
         }}
        className="leaflet-map-wrapper"
        attributionControl={false}
      >
        {/* OpenStreetMap base layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {layers.map((layer, idx) => (
          <Layer key={idx} collection={layer} />
        ))}
      </LeafletMapContainer>
    </Box>
  );
}
