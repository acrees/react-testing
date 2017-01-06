import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: () => dispatch({ type: 'on-click' })
  };
}

class Component extends React.Component {
  render() {
    return (
        <div>
          <h1>Test</h1>
          <button onClick={this.props.onClick}>Click me!</button>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
