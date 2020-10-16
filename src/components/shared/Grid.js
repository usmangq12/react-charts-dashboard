import React, { useEffect, useRef } from 'react';
import { axisLeft } from 'd3-axis';
import { select } from 'd3-selection';

export const Grid = ({ yScale, width, ticks, t }) => {
    const ref = useRef();

    const gridlines = () => axisLeft(yScale)
        .ticks(ticks)
        .tickSize(-width)
        .tickFormat('');

    useEffect(() => {
        renderAxis();
    }, [])

    useEffect(() => {
        updateAxis();
    }, []);

    const renderAxis = () => {
        const node = ref.current;
        select(node).call(gridlines({ yScale, width, ticks }));
    }
    const updateAxis = () => {
        const node = ref.current;
        select('.grid-group').transition(t).call(gridlines({ yScale, width, ticks }))
        .attr("stroke-width", 0.2)

    }

    return (
        <g
            ref={ref}
            className="grid-group"
        />
    )
}
export default Grid;