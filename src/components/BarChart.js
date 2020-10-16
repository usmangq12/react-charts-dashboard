import React, { useState } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from './shared/XY_Axis';
import Grid from './shared/Grid';
import Bar from './Bar';
import { transition } from 'd3-transition';

export const BarChart = () => {
    const [data, setData] = useState([
        { name: 'Sun', value: 500 },
        { name: 'Mon', value: 400 },
        { name: 'Tue', value: 300 },
        { name: 'Wed', value: 200 },
        { name: 'Thu', value: 100 },
        { name: 'Fri', value: 50 },
    ]);

    const parentWidth = 500;
    const margin = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 40,
    };
    const ticks = 6;
    const t = transition().duration(1000);

    const width = parentWidth - margin.left - margin.right;
    const height = parentWidth * 0.5 - margin.top - margin.bottom;

    const xScale = scaleBand()
        .domain(data.map(d => d.name))
        .range([0, width])
        .padding(0.26);

    const yScale = scaleLinear()
        .domain([0, Math.max(...data.map(d => d.value))])
        .range([height, 0])
        .nice();

    return (
        <div>
            <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
                <g transform={`translate(${margin.left}, ${margin.top})`}>
                    <XYAxis {...{ xScale, yScale, height, ticks, t }} />
                    <Grid {...{ xScale, yScale, width, ticks, t }} />
                    <Bar
                        {...{
                            xScale,
                            yScale,
                            data,
                            height,
                            t,
                        }}
                    />
                </g>
            </svg>
        </div>
    )
}

export default BarChart;