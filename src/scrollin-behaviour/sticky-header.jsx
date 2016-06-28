import React, { PropTypes } from 'react';
import { scrollInUpDown } from '..';

export function stickyHeader(Component) {
  return scrollInUpDown(class _stickyHeader extends React.Component {
    static propTypes = {
      _scrollIn: PropTypes.bool
    };

    render() {
      const _style = {}
      console.log(this.props._scrollIn)
  //    return <C { ...this.props } style={_style}/>;
      return <Component {...this.props} />;
    }
  });
}
