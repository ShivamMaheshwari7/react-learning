import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        {/*<User name="Shivam Maheshwari (function)" />*/}
        <UserClass
          name="Shivam Maheshwari (class)"
          location="Dehradun (class)"
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React Web Series</h2>
//       {/*<User name="Shivam Maheshwari (function)" />*/}
//       <UserClass name="Shivam Maheshwari (class)" location="Dehradun (class)" />
//     </div>
//   );
// };

export default About;
