import React from "react";

class User extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="user">
        <img src={data.avatar_url} />
        <h1>{data.name}</h1>
        <p>{data.login}</p>
        <p>Total Repos: {data.public_repos}</p>
        <p>Total Followers: {data.followers}</p>
      </div>
    );
  }
}

export default User;
