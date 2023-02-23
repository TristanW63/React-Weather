import React from "react";
import "./Home.css";
import { Form } from "react-bootstrap";

const Home = () => {
    return (
        <div className="Home">
                    <Form className="SearchBarPosition" >
          <Form.Control
          className="Search"
            type="text"
            name="UserSearch"
            placeholder="Search for a city"
          />
      </Form>
        <div className="main-weather">
            <h1> Todays Weather</h1>
            </div>
        </div>
    );
    }

export default Home;
