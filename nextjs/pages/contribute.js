import React, { Component } from 'react';
import axios from 'axios';
import Contribute from '../components/Contribute';

export default class extends Component {
  // Resolve promise and set initial props.
  static async getInitialProps() {
    // Make request for posts.
    const contribute = await axios.get(
      `http://${process.env.HOST}/wp-json/wp/v2/contribute`
    );

    // Return response to posts object in props.
    return {
      contribute: contribute.data
    };
  }

  render() {
    return (
      <>
        <Contribute {...this.props} />
      </>
    );
  }
}
