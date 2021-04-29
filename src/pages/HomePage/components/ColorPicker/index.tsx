import React from 'react'
import { SketchPicker } from 'react-color'
import styles from './index.module.less'

interface IProps {
  color: any
  onChange: (value: any) => void
}

interface IState {
  displayColorPicker: boolean
}

class ColorPicker extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props)
    this.state = {
      displayColorPicker: false
    }
  }

  private handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  private handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  private handleChange = (color: any) => {
    this.props.onChange(color.rgb)
  }

  public render() {
    const { r, g, b, a } = this.props.color
    return (
      <div>
        <div className={styles.swatch} onClick={this.handleClick}>
          <div className={styles.color} style={{ background: `rgba(${r},${g},${b},${a})` }} />
        </div>
        {this.state.displayColorPicker ? (
          <div className={styles.popover}>
            <div className={styles.cover} onClick={this.handleClose} />
            <SketchPicker color={this.props.color} onChange={this.handleChange} />
          </div>
        ) : null}
      </div>
    )
  }
}

export default ColorPicker
