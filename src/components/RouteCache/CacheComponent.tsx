import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import * as manager from './manager';
import { isExist, get, run } from './utils/utils';

export const COMPUTED_UNMATCH_KEY = '__isComputedUnmatch';
export const isMatch = (match: any) =>
  isExist(match) && get(match, COMPUTED_UNMATCH_KEY) !== true;

const getDerivedStateFromProps = (nextProps: any, prevState: any) => {
  let { match: nextPropsMatch } = nextProps;

  if (!isMatch(nextPropsMatch)) {
    nextPropsMatch = null;
  }

  if (!prevState.cached && nextPropsMatch) {
    return {
      cached: true,
      matched: true
    };
  }

  /**
   * Determines whether it needs to cancel the cache based on the next unmatched props action
   *
   * 根据下个未匹配状态动作决定是否需要取消缓存
   */
  // if (prevState.matched && !nextPropsMatch && when) {
  //   return {
  //     cached: false,
  //     matched: false
  //   };
  // }

  return {
    matched: !!nextPropsMatch
  };
};

interface IProps {
  [propName: string]: any;
}
interface IState {
  [propName: string]: any;
}

class CacheComponent extends Component<IProps & RouteComponentProps, IState> {
  public constructor(props: IProps & RouteComponentProps) {
    super(props);
    const key = props.cacheKey ? props.cacheKey : props.location.pathname;

    manager.register(key, this); //将实例存入缓存容器，删除指定缓存用

    // 根据match，返回{ cached: true, matched: true } 或 { matched: false }
    this.state = getDerivedStateFromProps(props, {
      cached: false,
      matched: false
    });
  }

  public static getDerivedStateFromProps = getDerivedStateFromProps;

  public shouldComponentUpdate(_nextProps: any, nextState: any) {
    return (
      this.state.matched ||
      nextState.matched ||
      this.state.cached !== nextState.cached
    );
  }

  public reset = () => {
    //清除该缓存页
    this.setState({
      cached: false
    });
  };

  public render() {
    const { matched, cached } = this.state;
    const { className, children } = this.props;
    const behavior = !matched ? { style: { display: 'none' } } : undefined;

    return cached ? (
      <div className={className ? className : undefined} {...behavior}>
        {run(children)}
      </div>
    ) : null;
  }
}

export default CacheComponent;
