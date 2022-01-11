import React, { Component } from "react";

class Followers extends Component {
  render() {
    const { data } = this.props;
    // console.log(this.props.data);
    return (
      <div>
        <img src={data.avatar_url} />
        <p>{data.login}</p>
      </div>
    );
  }
}

export default Followers;
