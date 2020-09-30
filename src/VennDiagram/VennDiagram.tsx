import React, { FC, Fragment, useCallback } from 'react';
import { ChartContainer, ChartContainerChildProps, ChartProps } from '../common/containers';
import { layout } from '@upsetjs/venn.js';
import { VennSeries } from './VennSeries';

export interface VennDiagramData {
  key: string[];
  data: number;
}

export interface VennDiagramProps extends ChartProps {
  data: VennDiagramData[];
}

export const VennDiagram: FC<VennDiagramProps> = ({
  id, width, height, margins, className, data,
}) => {
  const normalized = data.map(d => ({ sets: d.key, size: d.data }));

  const renderChart = useCallback((containerProps: ChartContainerChildProps) => {
    const layoutData = layout(normalized, {
      height: containerProps.height,
      width: containerProps.width
    });

    return <VennSeries data={layoutData} />;
  }, [normalized]);

  return (
    <ChartContainer
      id={id}
      width={width}
      height={height}
      margins={margins}
      xAxisVisible={false}
      yAxisVisible={false}
      center={false}
      className={className}
    >
      {props => renderChart(props)}
    </ChartContainer>
  );
}