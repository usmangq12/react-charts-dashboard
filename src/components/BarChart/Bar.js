import React, { useRef, useEffect } from 'react';
import { select } from 'd3-selection';

export const Bar = ({ xScale, yScale, height, data, t }) => {
    const ref = useRef();

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        barTransition();
    }, []);

    const barTransition = () => {
        const node = ref.current;
        select(node)
            .selectAll('.bar')
            .data(data)
            .transition(t)
            .attr('y', d => yScale(d.value))
            .style('margin', 30)
            .attr('height', d => height - yScale(d.value));
    }

    const init = () => {
        const node = ref.current;

        // prepare initial data from where transition starts.
        const initialData = data.map(obj => ({
            name: obj.name,
            value: 0
        }));

        // prepare the field
        const bar = select(node)
            .selectAll('.bar')
            .data(initialData);

        // add rect to svg
        bar
            .enter()
            .append('rect')
            .attr('class', 'bar')
            .attr('x', d => xScale(d.name))
            .attr('y', height)
            .attr('width', xScale.bandwidth())
            .style("fill", "#794c74")

        barTransition();
    }

    return (
        <g
            className="bar-group"
            ref={ref}
        />
    )
}

export default Bar;