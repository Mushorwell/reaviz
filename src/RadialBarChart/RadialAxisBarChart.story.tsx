import moment from 'moment';
import { medDateData, multiCategory } from '../../demo';
import {
  RadialAxis,
  RadialAxisArcSeries,
  RadialAxisTick,
  RadialAxisTickLabel,
  RadialAxisTickLine,
  RadialAxisTickSeries
} from '@/common/Axis/RadialAxis';
import { schemes } from '@/common/color';
import { RadialBarChart } from './RadialBarChart';
import { RadialBar, RadialBarSeries, RadialGuideBar } from './RadialBarSeries';

export default {
  title: 'Charts/Bar Chart/Radial/Axis',
  component: RadialBarChart,
  subcomponents: {
    RadialBarSeries,
    RadialBar,
    RadialGuideBar
  }
};

export const SemiCircle = () => (
  <RadialBarChart
    height={450}
    width={450}
    innerRadius={50}
    data={medDateData}
    series={
      <RadialBarSeries
        animated
        colorScheme={schemes['cybertron'][0]}
        bar={<RadialBar curved={false} gradient={false} guide={null} />}
      />
    }
    axis={
      <RadialAxis
        ticks={
          <RadialAxisTickSeries
            tick={
              <RadialAxisTick line={<RadialAxisTickLine position="inside" />} />
            }
          />
        }
        arcs={<RadialAxisArcSeries count={10} />}
      />
    }
    startAngle={-0.5 * Math.PI}
    endAngle={0.5 * Math.PI}
  />
);

export const Quarter = () => (
  <RadialBarChart
    height={450}
    width={450}
    innerRadius={50}
    data={medDateData}
    series={
      <RadialBarSeries
        animated
        colorScheme={schemes['cybertron'][0]}
        bar={<RadialBar curved={false} gradient={false} guide={null} />}
      />
    }
    axis={
      <RadialAxis
        ticks={
          <RadialAxisTickSeries
            tick={
              <RadialAxisTick
                line={<RadialAxisTickLine position="inside" />}
                label={
                  <RadialAxisTickLabel
                    format={(f) => moment(new Date(f)).format('M/D')}
                  />
                }
              />
            }
          />
        }
        arcs={<RadialAxisArcSeries count={10} />}
      />
    }
    startAngle={0}
    endAngle={0.5 * Math.PI}
  />
);

export const Custom = () => (
  <RadialBarChart
    height={450}
    width={450}
    innerRadius={50}
    data={medDateData}
    series={
      <RadialBarSeries
        animated
        colorScheme={schemes['cybertron'][0]}
        bar={<RadialBar curved={false} gradient={false} guide={null} />}
      />
    }
    axis={
      <RadialAxis
        ticks={
          <RadialAxisTickSeries
            tick={
              <RadialAxisTick
                line={<RadialAxisTickLine position="inside" />}
                label={
                  <RadialAxisTickLabel
                    format={(f) => moment(new Date(f)).format('M/D')}
                  />
                }
              />
            }
          />
        }
        arcs={<RadialAxisArcSeries count={10} />}
      />
    }
    startAngle={-0.4 * Math.PI}
    endAngle={0.4 * Math.PI}
  />
);

export const SemiCircleMultiSeries = () => (
  <RadialBarChart
    height={450}
    width={450}
    innerRadius={50}
    data={multiCategory}
    series={
      <RadialBarSeries
        type="grouped"
        animated
        colorScheme="cybertron"
        bar={<RadialBar curved={false} gradient={false} guide={null} />}
      />
    }
    axis={
      <RadialAxis
        type="category"
        ticks={
          <RadialAxisTickSeries
            tick={
              <RadialAxisTick line={<RadialAxisTickLine position="inside" />} />
            }
          />
        }
        arcs={<RadialAxisArcSeries count={10} />}
      />
    }
    startAngle={-0.5 * Math.PI}
    endAngle={0.5 * Math.PI}
  />
);

export const QuarterCircleMultiSeries = () => (
  <RadialBarChart
    height={450}
    width={450}
    innerRadius={50}
    data={multiCategory}
    series={
      <RadialBarSeries
        type="grouped"
        animated
        colorScheme="cybertron"
        bar={<RadialBar curved={false} gradient={false} guide={null} />}
      />
    }
    axis={
      <RadialAxis
        type="category"
        ticks={
          <RadialAxisTickSeries
            tick={
              <RadialAxisTick line={<RadialAxisTickLine position="inside" />} />
            }
          />
        }
        arcs={<RadialAxisArcSeries count={10} />}
      />
    }
    startAngle={0}
    endAngle={0.5 * Math.PI}
  />
);

export const CustomCircle1MultiSeries = () => (
  <RadialBarChart
    height={450}
    width={450}
    innerRadius={50}
    data={multiCategory}
    series={
      <RadialBarSeries
        type="grouped"
        animated
        colorScheme="cybertron"
        bar={<RadialBar curved={false} gradient={false} guide={null} />}
      />
    }
    axis={
      <RadialAxis
        type="category"
        ticks={
          <RadialAxisTickSeries
            tick={
              <RadialAxisTick line={<RadialAxisTickLine position="inside" />} />
            }
          />
        }
        arcs={<RadialAxisArcSeries count={10} />}
      />
    }
    startAngle={-0.75 * Math.PI}
    endAngle={0.75 * Math.PI}
  />
);

export const CustomCircle2MultiSeries = () => (
  <RadialBarChart
    height={450}
    width={450}
    innerRadius={50}
    data={multiCategory}
    series={
      <RadialBarSeries
        type="grouped"
        animated
        colorScheme="cybertron"
        bar={<RadialBar curved={false} gradient={false} guide={null} />}
      />
    }
    axis={
      <RadialAxis
        type="category"
        ticks={
          <RadialAxisTickSeries
            tick={
              <RadialAxisTick line={<RadialAxisTickLine position="inside" />} />
            }
          />
        }
        arcs={<RadialAxisArcSeries count={10} />}
      />
    }
    startAngle={-0.25 * Math.PI}
    endAngle={0.25 * Math.PI}
  />
);
