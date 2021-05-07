import * as React from 'react';
import * as Highcharts from 'highcharts';
import HighchartMore from 'highcharts/highcharts-more';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import styles from './index.module.less';
HighchartMore(Highcharts);

const options: any = {
  chart: {
    type: 'waterfall'
  },
  title: {
    text: ''
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: ''
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: []
};

interface IProps extends HighchartsReact.Props {
  title: string;
  y: string;
  data: any[];
  upColor: string;
  color: string;
}

const Waterfall = (props: IProps) => {
  const newOptions = {
    ...options,
    title: {
      text: props.title
    },
    yAxis: {
      title: {
        text: props.y
      }
    },
    series: [
      {
        upColor: props.upColor,
        color: props.color,
        data: _.map(props.data, (item: any) => _.pick(item, ['name', 'y'])),
        dataLabels: [
          {
            enabled: true,
            useHTML: true,
            formatter: function() {
              const total = this.series.processedYData
                .slice(0, this.x + 1)
                .reduce((a, b) => a + b);
              return `<dl style="position:relative;width:${
                this.point.shapeArgs.width
              }px;height:${
                this.point.shapeArgs.height
              }px"><dt style="position:absolute;    width: 100%;
              text-align: center;${
                this.y >= 0 ? 'top' : 'bottom'
              }:-20px;color:${
                this.y >= 0 ? props.upColor : props.color
              }">${total}</dt><dd style="position:absolute;    width: 100%;
              text-align: center;top:${this.point.shapeArgs.height / 2 -
                10}px">${this.y}</dd></dl>`;
            },
            style: {
              color: '#FFF',
              fontWeight: 'bold',
              textShadow: '0px 0px 3px black'
            }
          }
        ]
      }
    ]
  };
  return (
    <div className={styles.wrapper}>
      <HighchartsReact
        highcharts={Highcharts}
        options={newOptions}
        {...props}
      />
    </div>
  );
};

export default Waterfall;
