import React, { PropTypes } from 'react';
import { scrollInUpDown } from '..';

export function stickyFooter(Component) {
  return function(props) {
    return React.createElement(scrollInUpDown(class _stickyFooter extends React.Component {
      static propTypes = {
        _scrollIn: PropTypes.bool
      };

      render() {
        const _style = {}
        console.log(this.props._scrollIn)
    //    return <C { ...this.props } style={_style}/>;
        return <Component {...this.props} />;
      }
    }), { ...props, scrollDown: false });
  }
}
