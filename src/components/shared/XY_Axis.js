import React from 'react';
import Axis from './Axis';

export const XY_Axis = ({ xScale, yScale, height, ticks, t }) => {

    const xSettings = {
        scale: xScale,
        orient: 'bottom',
        transform: `translate(0, ${height})`,
        t
      };
      const ySettings = {
        scale: yScale,
        orient: 'left',
        transform: 'translate(0, 0)',
        ticks,
        t
      };

    return (
        <g className="axis-group">
        <Axis {...xSettings} />
        <Axis {...ySettings} />
      </g>
    )
}

export default XY_Axis;