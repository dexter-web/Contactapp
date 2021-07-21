import React from "react";
import { Table, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

const CardContact = (props) => {
  const { id, FirstName, LastName, MobileNumber } = props.Independent;
  return (
    <>
      <Table.Row>
        <Table.Cell>
          <Icon name="user" />
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { Item: props.Independent },
            }}
          >
            {FirstName}
          </Link>
        </Table.Cell>
        <Table.Cell>{LastName}</Table.Cell>
        <Table.Cell> {MobileNumber}</Table.Cell>
        <Table.Cell>
          <Link
            to={{
              pathname: `/Edit`,
              state: { Item: props.Independent },
            }}
          >
            <i>
              <Icon.Group size="small">
                <Icon color="blue" name="edit" size="large" />
              </Icon.Group>
            </i>
          </Link>
        </Table.Cell>
        <Table.Cell>
          <i
            onClick={() => {
              props.ClickHandler(id);
            }}
          >
            <Icon.Group size="small">
              <Icon color="red" name="trash" size="large" />
            </Icon.Group>
          </i>
        </Table.Cell>
      </Table.Row>
    </>
  );
};
export default CardContact;
