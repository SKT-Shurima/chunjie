import * as React from 'react'
import * as Highcharts from 'highcharts'
import HighchartMore from 'highcharts/highcharts-more'
import HighchartsReact from 'highcharts-react-official'
import _ from 'lodash'
import styles from './index.module.less'
HighchartMore(Highcharts)

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
  tooltip: {
    pointFormat: '<b>${point.y:,.2f}</b>'
  },
  credits: {
    enabled: false
  },
  series: []
}

interface IProps extends HighchartsReact.Props {
  title: string
  y: string
  data: any[]
  upColor: string
  color: string
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
        data: _.map(props.data, (item: any) => _.pick(item, ['name', 'y']))
      }
    ]
  }
  return (
    <div className={styles.wrapper}>
      <HighchartsReact highcharts={Highcharts} options={newOptions} {...props} />
    </div>
  )
}

export default Waterfall
