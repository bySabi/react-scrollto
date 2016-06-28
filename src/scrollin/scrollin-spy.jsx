import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { waypoint, getWindow } from 'react-waypoint';

export function scrollInSpy(Component) {
  return waypoint(class _scrollInSpy extends React.Component {
    static propTypes = {
      _scrolled: PropTypes.object,
      predicateCallback: PropTypes.func
    };

    static defaultProps = {
      predicateCallback() {
        return false;
      }
    };

    state = { scrollIn: false };

    _shouldUpdate = true;

    componentWillReceiveProps(nextProps) {
      this._handleScrolled(nextProps);
    }

    shouldComponentUpdate() {
      if (!this._shouldUpdate) {
        this._shouldUpdate = true;
        return false;
      }
      return true;
    }

    _handleScrolled = () => {
      if (!getWindow()) {
        return;
      }

      this._handleScrolled = this.__handleScrolled;

      this._shouldUpdate = false;
    }

    __handleScrolled = (nextProps) => {
      let contextHeight;
      let contextScrollTop;
      if (this.props._scrollableAncestor === window) {
        contextHeight = window.innerHeight;
        contextScrollTop = 0;
      } else {
        contextHeight = this.props._scrollableAncestor.offsetHeight;
        contextScrollTop = ReactDOM
          .findDOMNode(this.props._scrollableAncestor)
          .getBoundingClientRect().top;
      }
      this._contextHeight = contextHeight;
      this._contextScrollTop = contextScrollTop;
      this._waypointTop = ReactDOM.findDOMNode(this).getBoundingClientRect().top;

      if (this.props.predicateCallback.call(this, nextProps)) {
        if (!this.state.scrollIn) {
          this.setState({ scrollIn: true });
        } else {
          this._shouldUpdate = false;
        }
      } else if (this.state.scrollIn) {
        this.setState({ scrollIn: false });
      } else {
        this._shouldUpdate = false;
      }
    }

    render() {
      return <Component {...this.props} _scrollIn={this.state.scrollIn} />;
    }
  });
}
