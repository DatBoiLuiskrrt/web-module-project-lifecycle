import axios from "axios";
import React from "react";
import User from "./components/User";
import FollowerList from "./components/FollowerList";
class App extends React.Component {
  state = {
    user: [],
    userName: "",
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/datboiluiskrrt").then((resp) => {
      // console.log(resp.data);
      this.setState({
        ...this.state,
        user: resp.data,
      });
    });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      userName: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    const name = this.state.userName;
    axios.get(`https://api.github.com/users/${name}`).then((resp) => {
      this.setState({
        ...this.state,
        user: resp.data,
        userName: "",
      });
    });
  };

  render() {
    return (
      <div>
        <div>Github Card</div>
        <form>
          <input value={this.state.userName} onChange={this.handleChange} />
          <button onClick={this.handleSearch}>Fetch User</button>
        </form>
        <User data={this.state.user} />
        <FollowerList />
      </div>
    );
  }
}

export default App;
