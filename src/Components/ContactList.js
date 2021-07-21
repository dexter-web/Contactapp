import React from "react";
import { Table,Button } from "semantic-ui-react";
import ContactCard from "./ContactCard";
import { uuid } from "uuidv4";
import {Link} from "react-router-dom";

const ContactList = (props) => 
{
  console.log(props);
  const RenderContactList = props.ContactArray.map((Independent) => 
  {
    const Deletehandler = (id) => 
    {
      props.Removehandler(id);
    };
    return (
      <ContactCard
        Independent={Independent}
        key={uuid()}
        ClickHandler={Deletehandler}
      />
    );
  });
  return (
    <React.Fragment>
    <Link to='/add'>
    <Button content='Create Contact' positive className='right' />
    </Link>
        
      <Table celled striped  >
 
        <Table.Header className="red">
          <Table.Row>
            <Table.HeaderCell colSpan="6">Phone Book</Table.HeaderCell>
        
          </Table.Row>
        </Table.Header>
        <Table.Body>{RenderContactList}</Table.Body>
      </Table>
    </React.Fragment>
  ); 
};

export default ContactList;
