import React, { useRef, useEffect } from "react";
import { select, selectAll } from "d3-selection";
import { axisBottom, axisLeft } from "d3-axis";

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
            .ticks(ticks);
        }
        select(node).call(axis);
        return;
      }

      const updateAxis = () => {
    
        if (orient === "left") {
          const axis = axisLeft(scale).ticks(ticks); 
          selectAll(`.${orient}`).transition(t).call(axis)
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