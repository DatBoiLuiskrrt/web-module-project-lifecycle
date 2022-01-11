import axios from "axios";
import React from "react";
import User from "./components/User";
class App extends React.Component {
  state = {
    user: [],
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/datboiluiskrrt").then((resp) => {
      console.log(resp.data);
      this.setState({
        ...this.state,
        user: resp.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div>Github Card</div>
        <form>
          <input />
          <button>Fetch User</button>
        </form>
        <User data={this.state.user} />
      </div>
    );
  }
}

export default App;
