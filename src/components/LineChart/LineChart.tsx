import React, { useEffect, useRef, RefObject } from "react";
import { select } from "d3-selection";
import { min, max } from "d3";
import { scaleBand, scaleLinear } from "d3-scale";
import { transition } from "d3-transition";
import { line, curveLinear } from "d3-shape";
import { IChartProps, ChartData } from "../../models";
import { axisBottom, axisLeft } from "d3-axis";

const LineChart = ({ data = [], chartProps }: IChartProps) => {
  const ref = useRef<SVGSVGElement | null>(null) as RefObject<SVGSVGElement>;
  useEffect(() => {
    createChart();
  }, [data]);

  const createChart = () => {
    const svg = select(ref.current)
    svg.selectAll("*").remove()
      .selectAll(".line")
      .data(data)
      .enter()
      .append("g")
      .attr(
        "transform",
        `translate(${chartProps.margin.left},${chartProps.margin.top})`
      )
      .attr("class", "line");

    const xScale = scaleBand()
      .domain(data.map((x) => x.name))
      .range([0, chartProps.width])
      .padding(0.26);

    const yScale = scaleLinear()
      .domain([0, max(data, (d) => d.value as any)])
      .range([chartProps.height, 0]);

    const lineGenerator = line<ChartData>()
      .x((d) => xScale(d.name) as number)
      .y((d) => yScale(d.value) as number)
      .curve(curveLinear);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0,${chartProps.height})`)
      .call(axisBottom(xScale).scale(xScale).tickSize(15));

    svg.append("g").attr("class", "y-axis").call(axisLeft(yScale));

    const t = transition().duration(1000);
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#f6c3d0")
      .attr("stroke-width", 4)
      .attr("class", "line")
      .transition()
      .attr("d", lineGenerator);
  };
  return (
    <svg
      ref={ref}
      width={
        chartProps.width + chartProps.margin.left + chartProps.margin.right
      }
      height={
        chartProps.height + chartProps.margin.top + chartProps.margin.bottom
      }
    ></svg>
  );
};

export default LineChart;
