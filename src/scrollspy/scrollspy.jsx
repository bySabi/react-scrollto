import React from 'react';
import classNames from 'classnames';
//import './style.css';

export const scrollSpy = C => class _scrollSpy extends React.Component {

    _setState = state => {
      this.setState(state);
      this.props._setShareState(state);
    }

    componentWillMount() {
      this._setState({ scrollIn: false });
    }

    // 3 state function redifinition
    _className = () => {
      this._className = () => {
        this._className = () => this.props.className;
        return this.state.scrollIn
          ? classNames(this.props.className, this.props.activeClassName)
          : this.props.className;
      }
      return classNames(this.props.className, 'visibility-hidden');
    }

    onEnter = () => this._setState({ scrollIn: true });
    onLeave = () => this._setState({ scrollIn: false });

    render() {
      const { _shareStore, props } = this.props;
      const id = _shareStore.name;

      return <C
        {...props}
        id = {id}
        className={this._className()}
        onEnter={this.onEnter} onLeave={this.onLeave}
      />;
    }
  }
