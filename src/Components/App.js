import React, { useState, useEffect } from "react";
import "./App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import Header from "./Header.jsx";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactDetails from "./ContactDetails";
import axios from "../api/apicontacts";
import EditContact from "./EditContact";

function App() {
  const Local_Storage_key = "Deepak";
  const [ContactArray, ContactArrayFunc] = useState([]);

  const ContactHandler = async (NewContactArray) => {
    const sendRequest = {
      id: uuid(),
      ...NewContactArray,
    };

    const RequestResponse = await axios.post("/contactarray", sendRequest);
    console.log(RequestResponse);
    ContactArrayFunc([...ContactArray, RequestResponse.data]);
  };

  const Removehandler = async (id) => {
    await axios.delete(`/contactarray/${id}`);
    const NewContactList = ContactArray.filter((x) => {
      return x.id !== id;
    });
    ContactArrayFunc(NewContactList);
  };

  const updateContactHandler = async (updated) => {
    console.log(updated);
    const updateddate = await axios.put(`/contactarray/${updated.id}`, updated);
    const { id } = updateddate.data;
    ContactArrayFunc(
      ContactArray.map((updated) => {
        return updated.id === id ? { ...updateddate.data } : updated;
      })
    );
  };

  const retreiveData = async () => {
    const returndata = await axios.get("/contactarray");
    return returndata.data;
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retreiveData();
      if (allContacts) ContactArrayFunc(allContacts);
    };
    getAllContacts();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <ContactList
                  ContactArray={ContactArray}
                  Removehandler={Removehandler}
                />
              )}
            ></Route>
            <Route
              path="/Add"
              exact
              render={(props) => (
                <AddContact {...props} ContactHandler={ContactHandler} />
              )}
            ></Route>
            <Route
              path="/Edit"
              exact
              render={(props) => (
                <EditContact
                  {...props}
                  updateContactHandler={updateContactHandler}
                />
              )}
            ></Route>
            <Route path="/contact/:id" component={ContactDetails}></Route>
            {/* <Route path="/contact/:edit" component={EditContact}></Route> */}
            {/* <AddContact ContactHandler={ContactHandler} />
        <ContactList ContactArray={ContactArray} Removehandler={Removehandler} /> */}
          </Switch>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
