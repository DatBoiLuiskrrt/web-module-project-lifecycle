import axios from "axios";
import React, { Component } from "react";
import Followers from "./Follower";
class FollowerList extends Component {
  constructor(props) {
    super(props);
    this.state = { followers: [] };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/datboiluiskrrt/followers")
      .then((resp) => {
        // console.log(resp.data);
        this.setState({
          ...this.state,
          followers: resp.data,
        });
      });
  }

  render() {
    return (
      <div className="follower-container">
        {this.state.followers.map((user) => {
          return <Followers key={user.login} data={user} />;
        })}
      </div>
    );
  }
}

export default FollowerList;
