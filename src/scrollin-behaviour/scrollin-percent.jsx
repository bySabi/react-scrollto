import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { scrollInSpy } from '..';

// % is visible
function predicate() {
  const percent = this.props.percent;
  const { currentPosition } = this.props._scrolled;
  const waypointTop = this._waypointTop;
  const waypointHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
  const contextScrollTop = this._contextScrollTop;
  const contextHeight = this._contextHeight;
  const contextBottom = contextScrollTop + contextHeight;
  const visiblePercentagePoint = waypointTop + waypointHeight * (percent / 100);

  return currentPosition === 'inside' && contextBottom > waypointTop - visiblePercentagePoint;
}

export function scrollInPercent(Component) {
  return class _predicateCallback extends React.Component {
    static propTypes = {
      percent: PropTypes.number
    };

    static defaultProps = {
      percent: 100
    };

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
