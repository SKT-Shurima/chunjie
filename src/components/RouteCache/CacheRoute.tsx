import React, { Component, Fragment } from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import { run } from './utils/utils';

import CacheComponent, { isMatch } from './CacheComponent';
import Updatable from './Updatable';

// const isEmptyChildren = (children: any) => React.Children.count(children) === 0;

interface ICacheItem {
  [propName: string]: any;
}

interface IProps {
  exact?: boolean;
  path?: string;
  computedMatchForCacheRoute?: object;
  render?: (props: any) => any;
  component?: any;
  className?: string;
  cacheKey?: string;
}

class CacheRoute extends Component<IProps> {
  private cache: ICacheItem = Object.create(null);

  public render() {
    const {
      children,
      render,
      component,
      className,
      cacheKey,
      computedMatchForCacheRoute,
      ...restProps
    } = this.props;

    // if (React.isValidElement(children) || !isEmptyChildren(children)) {
    //   render = () => children;
    // }

    if (computedMatchForCacheRoute) {
      (restProps as any).computedMatch = computedMatchForCacheRoute;
    }

    return (
      <Route {...restProps}>
        {(props: RouteComponentProps) => {
          const { match, location } = props;
          const isMatchCurrentRoute = isMatch(props.match);
          const { pathname: currentPathname } = location;
          const configProps = { className, cacheKey };

          const renderSingle = (props: any) => (
            <CacheComponent {...props}>
              {() => (
                <Updatable when={isMatch(props.match)}>
                  {() => {
                    if (component) {
                      return React.createElement(component, props);
                    }

                    return run(render || children, undefined, props);
                  }}
                </Updatable>
              )}
            </CacheComponent>
          );

          if (isMatchCurrentRoute) {
            this.cache[props.match.url] = {
              render: renderSingle
            };
          }

          return (
            <Fragment>
              {Object.entries(this.cache).map(([pathname, { render }]) => {
                let recomputedMatch = null;
                if (match && match.isExact && pathname !== currentPathname) {
                  recomputedMatch = { match: null };
                }

                return (
                  <Fragment key={pathname}>
                    {render({
                      ...props,
                      ...configProps,
                      ...recomputedMatch
                    })}
                  </Fragment>
                );
              })}
            </Fragment>
          );
        }}
      </Route>
    );
  }
}

export default CacheRoute;
