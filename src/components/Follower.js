import React, { Component } from "react";

class Followers extends Component {
  render() {
    const { data } = this.props;
    // console.log(this.props.data);
    return (
      <div className="follower-container">
        <div className="follower">
          <img src={data.avatar_url} />
          <p>{data.login}</p>
        </div>
      </div>
    );
  }
}

export default Followers;
