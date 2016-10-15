import React from 'react';
import { withRouter } from "react-router";

class GenerateSongSheet extends React.Component {
  componentDidMount() {
    console.log(this.props.location.query);
  }

  render() {
    return (
      <div>Hi</div>
    );
  }
}

export default withRouter(GenerateSongSheet);
