import React from 'react';

// Generic 4-state component
// firstClassName
// className
// firstActiveClassName
// activeClassName
export const scrollInSpyClassName = C =>
  class _scrollInSpyClassName extends React.Component {
    _className = () => {
      this._className = () => this.props._scrollIn ? this._activeClassName()
       : this.props.className;

      if (this.props._scrollIn) {
        return this._activeClassName();
      }

      return this.props.firstClassName ? this.props.firstClassName
       : this.props.className;
    }

    _activeClassName = () => {
      this._activeClassName = () => this.props.activeClassName;

      return this.props.firstActiveClassName ? this.props.firstActiveClassName
       : this.props.activeClassName;
    }

    render() {
      return <C { ...this.props } className={this._className()} />;
    }
  }
