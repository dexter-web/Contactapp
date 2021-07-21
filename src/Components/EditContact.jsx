import { React, Component } from "react";
import { Button, Form } from "semantic-ui-react";

export default class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, FirstName, LastName, MobileNumber } = props.location.state.Item;

    this.state = {
      id,
      FirstName,
      LastName,
      MobileNumber,
    };
    console.log(this.state);
  }

  UpdateEventHandler = (e) => {
    e.preventDefault();
    if (
      this.state.FirstName === "" ||
      this.state.LastName === "" ||
      this.state.MobileNumber === ""
    ) {
      alert("All Fields are Mandatory !");
      return;
    }
    this.props.updateContactHandler(this.state);
    this.setState({ FirstName: "", LastName: "", MobileNumber: "" });

    // console.log(this.props);
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <Form onSubmit={this.UpdateEventHandler}>
          <Form.Field>
            <label>First Name</label>
            <input
              placeholder="First Name"
              value={this.state.FirstName}
              onChange={(eventFirst) =>
                this.setState({ FirstName: eventFirst.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              value={this.state.LastName}
              onChange={(eventlst) =>
                this.setState({ LastName: eventlst.target.value })
              }
            />
          </Form.Field>
          <Form.Field>
            <label>Mobile Number</label>
            <input
              placeholder="Mobile Number"
              value={this.state.MobileNumber}
              onChange={(evntmob) =>
                this.setState({ MobileNumber: evntmob.target.value })
              }
            />
          </Form.Field>
          <Button type="submit" className="blue">
            Update
          </Button>
        </Form>
      </>
    );
  }
}
