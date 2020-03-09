import React, {Component} from 'react';
import Loader from '../loader/loader';
import ErrorIndicator from '../error-indicator/error-indicator';

const withData = (View) => {
  return class extends Component {

    state = {
      data: null,
      loading: true,
      error: false,
    };

    componentDidUpdate(prevProps) {
      if (this.props.getData !== prevProps.getData) {
        this.updateState();
      }
    }

    componentDidMount() {
      this.updateState();
    }

    updateState() {
      this.setState({
        loading: true,
        error: false,
      });

      this.props.getData()
        .then((items) => {
          this.setState({
            data: items,
            loading: false,
            error: false,
          });
        })
        .catch((err) => {
          console.error(err);
          this.setState({
            loading: false,
            error: true,
          });
        });
    }

    render() {
      const { data, loading, error } = this.state

      if (loading) {
        return <Loader />
      }

      if (error) {
        return <ErrorIndicator />
      }


      return <View {...this.props} data={data} />
    }
  }
};

export default withData;