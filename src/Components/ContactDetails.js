import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import UserImg from "../Images/user.png";
import { Link } from "react-router-dom";

const ContactDetails = (props) => {
  const { id, FirstName, LastName, MobileNumber } = props.location.state.Item;
  return (
    <>
      <div>
        <Card centered>
          <Image src={UserImg} wrapped ui={false} />
          <Card.Content>
            <Card.Header>
              {FirstName}   {LastName}
            </Card.Header>
            <Card.Meta>
              <span className="date">{id}</span>
            </Card.Meta>
            <Card.Description>{MobileNumber}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="javascript.void(0)">
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
        <div className='center-div'>
        <Link to="/">
          <Button content="Back to Main" positive className="right" centered />
        </Link>
        </div>
      </div>
    </>
  );
};
export default ContactDetails;
