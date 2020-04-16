import React from "react";
import SignupForm from "../components/SignUpForm";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMsg: true,
      showForm: false,
    };
  }

  componentDidMount() {
    this.hideMsg();
  }
  hideMsg() {
    setTimeout(
      function () {
        this.setState({ showMsg: false, showForm: true });
      }.bind(this),
      7000
    );
  }

  render() {
    const msgDisplay = this.state.showMsg;
    const formDisplay = this.state.showForm;

    return (
      <div>
        <div className={msgDisplay ? "show" : "hide"}>
          <h3>
            Anxiety disorders develop from a complex set of risk factors,
            including genetics, brain chemistry, personality, and life events.
          </h3>
        </div>
        <SignupForm className={formDisplay ? "show" : "hide"} />
      </div>
    );
  }
}

export default Signup;
