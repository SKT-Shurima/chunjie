import React, { Component } from 'react';
import { Table, Button, Row, Col, InputNumber, Input, Select } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import Waterfall from './components/Waterfall';
import ColorPicker from './components/ColorPicker';
import styles from './index.module.less';

const { Option } = Select;

interface IHomeProps {}

interface IState {
  data: any[];
  subData: any;
  subIndex: number;
  upColor: any;
  color: any;
  title: string;
  subTitle: string;
  y1: string;
  y2: string;
}

export const transJsonParse = (value: any, defaultValue = {}) => {
  try {
    return JSON.parse(value);
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
};

class Home extends Component<IHomeProps, IState> {
  public constructor(props: IHomeProps) {
    super(props);
    const arr: any[] = [];
    arr.length = 12;
    const data = transJsonParse(
      window.localStorage.getItem('data') || '[]',
      []
    );
    const subData = transJsonParse(
      window.localStorage.getItem('subData') || '[]',
      []
    );
    const {
      subIndex = 0,
      upColor = {
        r: 144,
        g: 237,
        b: 125,
        a: 1
      },
      color = { r: 247, g: 163, b: 92, a: 1 },
      title = '标题1',
      subTitle = '标题2',
      y1 = '数值',
      y2 = '数值'
    } = transJsonParse(window.localStorage.getItem('otherInfo') || '{}', {});
    this.state = {
      data: data.length
        ? data
        : _.map(arr, (_item: any, index: number) => ({
            key: uuidv4().slice(-6),
            name: `${index + 1}月`,
            y: 21
          })),
      subData: subData,
      subIndex,
      upColor,
      color,
      title,
      subTitle,
      y1,
      y2
    };
  }

  public componentDidMount() {
    window.onunload = () => {
      window.localStorage.setItem('data', JSON.stringify(this.state.data));
      window.localStorage.setItem(
        'subData',
        JSON.stringify(this.state.subData)
      );
      window.localStorage.setItem(
        'otherInfo',
        JSON.stringify(
          _.pick(this.state, [
            'upColor',
            'color',
            'title',
            'subTitle',
            'subIndex',
            'y1',
            'y2'
          ])
        )
      );
    };
  }

  private handleChangeColor = (type: string, color: any) => {
    if (type === 'upColor') {
      this.setState({
        upColor: color
      });
    } else if (type === 'color') {
      this.setState({
        color: color
      });
    }
  };

  private handleTitle = (type: string, e: any) => {
    if (type === 'title') {
      this.setState({
        title: e.target.value
      });
    } else if (type === 'subTitle') {
      this.setState({
        subTitle: e.target.value
      });
    }
  };

  private handleY = (type: string, e: any) => {
    if (type === 'y1') {
      this.setState({
        y1: e.target.value
      });
    } else if (type === 'y2') {
      this.setState({
        y2: e.target.value
      });
    }
  };

  private handleSelect = (value: any) => {
    this.setState({
      subIndex: value
    });
  };

  private handleChangeName = (rowIndex: any, index: number, e: any) => {
    const { value } = e.target;
    if (_.isNil(rowIndex)) {
      const newData = [...this.state.data];
      newData[index].name = value;
      this.setState({
        data: newData
      });
    } else {
      const subData = [...this.state.subData];
      subData[rowIndex][index].name = value;
      this.setState({
        subData
      });
    }
  };
  private handleChangeValue = (rowIndex: any, index: number, value: any) => {
    if (_.isNil(rowIndex)) {
      const newData = [...this.state.data];
      newData[index].y = value;
      this.setState({
        data: newData
      });
    } else {
      const subData = [...this.state.subData];
      subData[rowIndex][index].y = value;
      this.setState({
        subData
      });
    }
  };

  private handleDelete = (rowIndex: any, index: number) => {
    const subData = [...this.state.subData];
    const data = [...this.state.data];
    if (_.isNil(rowIndex)) {
      data.splice(index, 1);
      subData.splice(index, 1);
      this.setState({
        data,
        subData
      });
    } else {
      const targetSubData = [...subData[rowIndex]];
      targetSubData.splice(index, 1);
      subData[rowIndex] = targetSubData;
      this.setState({
        subData
      });
    }
  };

  private getColumns = (rowIndex?: number) => {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        width: '30%',
        render: (text: any, _record: any, index: number) => (
          <Input
            value={text}
            onChange={this.handleChangeName.bind(this, rowIndex, index)}
          />
        )
      },
      {
        title: 'Value',
        dataIndex: 'y',
        key: 'y',
        width: '50%',
        render: (text: any, _record: any, index: number) => (
          <InputNumber
            value={text}
            onChange={this.handleChangeValue.bind(this, rowIndex, index)}
          />
        )
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (_text: any, _record: any, index: number) => (
          <a onClick={this.handleDelete.bind(this, rowIndex, index)}>Delete</a>
        )
      }
    ];
  };

  private addRow = () => {
    this.setState({
      data: _.concat(this.state.data, {
        key: uuidv4().slice(-6),
        name: 'series',
        y: 0
      })
    });
  };

  private addSubRow = (rowIndex: number) => {
    const subData = [...this.state.subData];
    subData[rowIndex] = subData[rowIndex] || [];
    subData[rowIndex] = _.concat(subData[rowIndex], {
      key: uuidv4().slice(-6),
      name: 'series',
      y: 0
    });
    this.setState({
      subData
    });
  };

  private subTable = (record: any, rowIndex: number) => {
    const { subData } = this.state;
    return (
      <div>
        <Table
          size="small"
          columns={this.getColumns(rowIndex)}
          dataSource={subData[rowIndex]}
          pagination={false}
        />
        <Button
          type="dashed"
          onClick={() => {
            this.addSubRow(rowIndex);
          }}
          block
        >
          新增{record.name}行
        </Button>
      </div>
    );
  };

  public render() {
    const {
      data,
      subData,
      subIndex,
      upColor,
      color,
      title,
      subTitle,
      y1,
      y2
    } = this.state;
    return (
      <dl className={styles.wrapper}>
        <dt className={styles.leftContainer}>
          <Row>
            <Col span={6} className={styles.labelWrapper}>
              <label htmlFor="标题1">标题1</label>
              <Input
                value={title}
                onChange={this.handleTitle.bind(this, 'title')}
              ></Input>
            </Col>
            <Col span={6} className={styles.labelWrapper}>
              <label htmlFor="标题2">标题2</label>
              <Input
                value={subTitle}
                onChange={this.handleTitle.bind(this, 'subTitle')}
              ></Input>
            </Col>
            <Col span={6} className={styles.labelWrapper}>
              <label htmlFor="Y1">Y1</label>
              <Input
                value={y1}
                onChange={this.handleY.bind(this, 'y1')}
              ></Input>
            </Col>
            <Col span={6} className={styles.labelWrapper}>
              <label htmlFor="Y2">Y2</label>
              <Input
                value={y2}
                onChange={this.handleY.bind(this, 'y2')}
              ></Input>
            </Col>
          </Row>
          <Row>
            <Col span={6} className={styles.labelWrapper}>
              <label htmlFor="正值颜色">正值颜色</label>
              <ColorPicker
                color={upColor}
                onChange={this.handleChangeColor.bind(this, 'upColor')}
              />
            </Col>
            <Col span={6} className={styles.labelWrapper}>
              <label htmlFor="负值颜色">负值颜色</label>
              <ColorPicker
                color={color}
                onChange={this.handleChangeColor.bind(this, 'color')}
              />
            </Col>
            <Col span={6} className={styles.labelWrapper}>
              <label htmlFor="次图维度">次图维度</label>
              <Select
                style={{ width: '50%' }}
                value={subIndex}
                onChange={this.handleSelect}
              >
                {_.map(data, (item: any, index: number) => (
                  <Option key={`${item.name}_${index}`} value={index}>
                    {item.name}
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>
          <Table
            size="middle"
            rowKey="key"
            columns={this.getColumns()}
            expandedRowRender={this.subTable}
            dataSource={data}
            pagination={false}
          />
          <Button type="dashed" onClick={this.addRow} block>
            新增
          </Button>
        </dt>
        <dd className={styles.rightContainer}>
          <Waterfall
            title={title}
            y={y1}
            data={data}
            upColor={`rgba(${upColor.r},${upColor.g},${upColor.b},${upColor.a})`}
            color={`rgba(${color.r},${color.g},${color.b},${color.a})`}
          />
          <Waterfall
            title={subTitle}
            y={y2}
            data={subData[subIndex] || []}
            upColor={`rgba(${upColor.r},${upColor.g},${upColor.b},${upColor.a})`}
            color={`rgba(${color.r},${color.g},${color.b},${color.a})`}
          />
        </dd>
      </dl>
    );
  }
}

export default Home;
