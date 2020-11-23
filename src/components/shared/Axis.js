import React, { useRef, useEffect } from "react";
import { select, selectAll } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";
import * as d3 from "d3";

export const Axis = ({ scale, orient, ticks, transform, t }) => {
    const ref = useRef();

    useEffect(() => {
        renderAxis();
    }, []);

    useEffect(() => {
        updateAxis();
    }, []);

    const renderAxis = () => {
        const node = ref.current;
        let axis;
    
        if (orient === "bottom") {
          axis = axisBottom(scale);
        }
        if (orient === "left") {
          axis = axisLeft(scale)
            .ticks(ticks, "s")
        }
        select(node).call(axis);
        return;
      }

      const updateAxis = () => {
    
        if (orient === "left") {
          const axis = axisLeft(scale).ticks(ticks); 
          selectAll(`.${orient}`).transition(1000).call(axis)
        }
      }

    return (
        <g
            ref={ref}
            transform={transform}
            className={`${orient} axis`}
        />
    )
}

export default Axis;