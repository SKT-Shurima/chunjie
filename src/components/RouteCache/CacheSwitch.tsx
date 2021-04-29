import React, { Component, Fragment } from 'react';
import { withRouter, matchPath, RouteComponentProps } from 'react-router-dom';
import { COMPUTED_UNMATCH_KEY } from './CacheComponent';
import { isNull } from './utils/utils';

class CacheSwitch extends Component<RouteComponentProps> {
  public render() {
    const { children, location, match: contextMatch } = this.props;

    let _matchedAlready = false;
    return (
      <Fragment>
        {React.Children.map(children, element => {
          if (!React.isValidElement(element)) {
            return null;
          }

          const path = element.props.path || element.props.from;
          const match = _matchedAlready
            ? null
            : matchPath(
                location.pathname,
                { ...element.props, path },
                contextMatch
              );

          if (!_matchedAlready && !path) {
            // 404页面
            return React.cloneElement(element, {
              location,
              computedMatch: contextMatch
            });
          }

          const child = React.cloneElement(element, {
            location,
            computedMatch: match,
            ...(isNull(match)
              ? {
                  computedMatchForCacheRoute: {
                    [COMPUTED_UNMATCH_KEY]: true
                  }
                }
              : null)
          });
          if (!_matchedAlready) {
            _matchedAlready = !!match;
          }

          return child;
        })}
      </Fragment>
    );
  }
}

export default withRouter(CacheSwitch);
