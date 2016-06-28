import React, { PropTypes } from 'react';
import { waypoint, getWindow } from 'react-waypoint';

export function scrollInUpDown(Component) {
  return waypoint(class _sticky extends React.Component {
    static propTypes = {
      scrollDown: PropTypes.bool,
      _scrollableAncestor: PropTypes.object
    };

    static defaultProps = {
      scrollDown: true
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

    _handleScrolled = (props) => {
      if (!getWindow()) {
        return;
      }

      this._scrollableAncestor = props._scrollableAncestor;
      this._previousPageYOffset = this._scrollableAncestor.pageYOffset;
      this._compare = this.props.scrollDown ? (x, y) => x < y : (x, y) => x > y;

      this._handleScrolled = this.__handleScrolled;

      this._shouldUpdate = false;
    }

    __handleScrolled = () => {
      const currentPageYOffset = this._scrollableAncestor.pageYOffset;
      if (this._compare(currentPageYOffset, this._previousPageYOffset)) {
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
      this._previousPageYOffset = currentPageYOffset;
    }

    render() {
      return <Component {...this.props} _scrollIn={this.state.scrollIn} />;
    }
  });
}
