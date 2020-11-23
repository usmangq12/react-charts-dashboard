import React, { useState } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from '../../shared/XY_Axis';
import Grid from '../../shared/Grid';
import Bar from './Bar';
import { transition } from 'd3-transition';
import { FormatItalic } from '@material-ui/icons';

export const BarChart = () => {
    const [data, setData] = useState([
        { name: 'Shoes', value: "20K" },
        { name: 'Shirts', value: "16K" },
        { name: 'Pants', value: "12K" },
        { name: 'Jackets', value: "8K" },
        { name: 'Wallets', value: "4K" },
        { name: 'Belts', value: "2K" },
    ]);

    // To be implemented
    const parentWidth = 400;
    const margin = {
        top: 10,
        right: 10,
        bottom: 20,
        left: 60,
    };
    const ticks = 6;
    const t = transition().duration(1000);

    const width = parentWidth - margin.left - margin.right;
    const height = parentWidth * 0.5 - margin.top - margin.bottom;

    const xScale = scaleBand()
        .domain(data.map(d => d.name))
        .range([0, width])
        .padding(0.26);

    const yScale = scaleBand()
        .domain([...data.map(d => d.value), 0])
        .range([0, height])
        .paddingInner(1)

    return (
        <div>
            <svg style={{overflow: "visible"}} width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
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
                <text transform={`translate(${15}, ${180}) rotate(270)`} x="0" y="15" style={{fontSize: "12px", fontStyle: "italic", fontWeight: 500}} >Revenue</text>
            </svg>
        </div>
    )
}

export default BarChart;