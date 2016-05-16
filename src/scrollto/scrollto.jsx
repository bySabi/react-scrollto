import React from 'react';
import animateScroll from './animatescroll';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

import { sharedState } from 'react-sharestate-hoc';

const { func, object, string } = React.PropTypes;

export const ScrollTo = sharedState(class ScrollTo extends React.Component {
  static propTypes = {
    dest: func,
    animate: object,
    activeClassName: string,
    className: string
  }

  handleClick = event => {
    event.preventDefault();

    const element = ReactDOM.findDOMNode(this.props._instance);
    animateScroll(element, this.props.animate);
  }

  render() {
    const { dest, className, activeClassName, _shared } = this.props;
    const _activeClassName = _shared && _shared.scrollIn ? activeClassName : '';
    const _className = classNames(className, _activeClassName);

    return (
      <div className={_className}>
        <a href={'#' + dest.name} onClick={this.handleClick}>
          {this.props.children}
        </a>
      </div>
    );
  }
}, 'dest');
