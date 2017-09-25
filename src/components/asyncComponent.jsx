import React, { Component } from 'react';

export default function asyncComponent(importFunction) {
  return class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        LoadedComponent: null
      };
    }

    async componentDidMount() {
      const { default: LoadedComponent } = await importFunction();
      this.setState({ LoadedComponent });
    }

    render() {
      const { LoadedComponent } = this.state;
      const { loading } = this.props;
      return LoadedComponent && <LoadedComponent {...this.props} />;
    }
  };
}
