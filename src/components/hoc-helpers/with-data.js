import React, {Component} from 'react';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
      error: false,
    };

    componentDidMount() {
      getData()
        .then((items) => {
          this.setState({
            data: items,
          });
        })
        .catch((err) => {
          this.setState({
            error: true,
          });
        });
    }

    render() {
      const { data } = this.state

      if (!data) {
        return <Loader />
      }

      if(this.state.error) {
        return <ErrorIndicator/>
      }

      return <View {...this.props} data={data} />
    }
  }
};

export {
  withData
};