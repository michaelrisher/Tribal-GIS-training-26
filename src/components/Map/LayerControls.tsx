import { type JSX } from 'react';
import { Box, Checkbox } from '@mui/material';
import type { LayerVisibilityMap } from '@/types/map';


/**
 * Props contract for the LayerControls component.
 * Defines the visibility state for each map layer and
 * the callback used to toggle layer visibility.
 */
interface LayerControlsProps {
  visibilityMap: LayerVisibilityMap;
  onLayerChange: (visibilityMap: LayerVisibilityMap) => void;
}


/* Renders a control panel for toggling map data layers on and off. */
export function LayerControls({
  visibilityMap,
  onLayerChange,
}: LayerControlsProps): JSX.Element {
  return (
    <Box
      component="section"
      className="gen-components controls-wrapper"
      aria-labelledby="layer-controls-title"
      role="region"
      sx={{
        position: 'absolute',
        top: 'var(--col-1)',
        right: 'var(--col-1)',
        minWidth: 'var(--width-controls)',
        padding: 'var(--col-1)',
        zIndex: 'var(--zIndex)',
      }}
    >
      <h3 className="gen-header controls-header">
        Map Data Layers
      </h3>

      <ul role="group" aria-label="Map Data Layers">
        {Object.entries(visibilityMap).map(([layerName, isVisible]) => (
          <Box
            component="li"
            key={layerName}
            className="controls-item"
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              padding: 'var(--row-gutter)',
              borderRadius: 'var(--row-gutter)',
              marginBottom: 'var(--row-gutter)',
            }}
          >
            <label>
              <Checkbox
                checked={isVisible}
                onChange={() =>
                  onLayerChange({ ...visibilityMap, [layerName]: !isVisible })
                }
                slotProps={{
                  input: {
                    'aria-label': layerName,
                    'aria-checked': isVisible,
                  },
                }}
              />
              <span>{layerName}</span>
            </label>
          </Box>
        ))}
      </ul>
    </Box>
  );
}


/* Commented out from previous version:

import { PawPrint, Droplets, Mountain, Calendar } from 'lucide-react';

// Map layer types to icons for UI representation
const layerIcons = {
  species: PawPrint,
  water: Droplets,
  soil: Mountain,
  events: Calendar,
};

// Render buttons for switching active layer types (with icons)
<div className="layer-icons">
  {Object.entries(layerIcons).map(([type, Icon]) => (
    <button
      key={type}
      className={`layer-icon-button ${
        activeLayerType === type ? 'active' : ''
      }`}
      onClick={() => onLayerTypeChange(type)}
    >
      <Icon size={20} />
      <span className="layer-icon-text">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </button>
  ))}
</div>
*/
