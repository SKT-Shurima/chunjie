import React, { Component } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
let draggingIndex = -1;

interface IProps {
  isOver: boolean;
  connectDragSource: any;
  connectDropTarget: any;
  moveRow: any;
  style: any;
  className: any;
  index: number;
}

interface IState {
  style: any;
}

class BodyRow extends Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = {
      style: null
    };
  }
  public render() {
    const {
      isOver,
      connectDragSource,
      connectDropTarget,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      moveRow,
      ...restProps
    } = this.props;
    const style = { ...restProps.style, cursor: 'move', ...this.state.style };

    let { className } = restProps;
    if (isOver) {
      if (restProps.index > draggingIndex) {
        className += ' drop-over-downward';
      }
      if (restProps.index < draggingIndex) {
        className += ' drop-over-upward';
      }
    }

    return connectDragSource(
      connectDropTarget(
        <tr {...restProps} className={className} style={style} />
      )
    );
  }
}

const rowSource = {
  beginDrag(props: { index: number }) {
    draggingIndex = props.index;
    return {
      index: props.index
    };
  }
};

const rowTarget = {
  drop(props: any, monitor: any) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  }
};

const DraggableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  monitor
}))(
  DragSource('row', rowSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    target: monitor.getItem()
  }))(BodyRow)
);

export default DraggableBodyRow;
