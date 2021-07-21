import { React, Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class AddContact extends Component {
  state = { FirstName: "", LastName: "", MobileNumber: "" };

  AddEventHandler = (e) => {
    e.preventDefault();
    if (
      this.state.FirstName === "" ||
      this.state.LastName === "" ||
      this.state.MobileNumber === ""
    ) {
      alert("All Fields are Mandatory !");
      return;
    }
    this.props.ContactHandler(this.state);
    this.setState({ FirstName: "", LastName: "", MobileNumber: "" });

    // console.log(this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <Form onSubmit={this.AddEventHandler}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              onChange={(eventFirst) =>
                this.setState({ FirstName: eventFirst.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              onChange={(eventlst) =>
                this.setState({ LastName: eventlst.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Mobile Number</label>
            <input
              placeholder="Mobile Number"
              onChange={(evntmob) =>
                this.setState({ MobileNumber: evntmob.target.value })
              }
            />
          </Form.Field>
          <Button type="submit" className="blue">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
