import React, { PropTypes } from 'react';
import { scrollInSpy } from '..';

// middle of waypointTop
function predicate() {
  const { currentPosition } = this.props._scrolled;
  const waypointTop = this._waypointTop;
  const contextScrollTop = this._contextScrollTop;
  const contextHeight = this._contextHeight;

  return currentPosition === 'inside' && waypointTop < contextScrollTop +
    contextHeight / 2;
 }

export function scrollInMiddle(Component) {
  return class _predicateCallback extends React.Component {
    render() {
      return React.createElement(
        scrollInSpy(class _scrollInPercent extends React.Component {
          static propTypes = {
            _scrollIn: PropTypes.bool
          };

          render() {
            console.log(this.props._scrollIn)
        //    return <C { ...this.props } style={_style}/>;
            return <Component {...this.props} />;
          }
        }), { ...this.props, predicateCallback: predicate });
    }
  }
}
