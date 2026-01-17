import React from 'react';
import { Box, Checkbox } from '@mui/material';
import type { LayerVisibilityMap } from '@/types/map';


interface LayerControlsProps {
  visibilityMap: LayerVisibilityMap;
  onLayerChange: (visibilityMap: LayerVisibilityMap) => void;
}


/**
 * A control panel component for managing map layer visibility
 * @component
 * @param {LayerControlsProps} props - The component props
 * @returns {JSX.Element} A panel with layer toggle controls
 */
export const LayerControls: React.FC<LayerControlsProps> = ({
  visibilityMap,
  onLayerChange
}) => {
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
        {Object.entries(visibilityMap as Record<string, boolean>).map(([layerName, isVisible]) => (
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
};
