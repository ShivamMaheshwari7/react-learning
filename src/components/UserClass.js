import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    // API CALL
    const data = await fetch("https://api.github.com/users/shivammaheshwari7");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    //const { name, location } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <br></br>
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shivamannu7</h4>
      </div>
    );
  }
}

export default UserClass;
