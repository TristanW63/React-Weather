import React, { useEffect, useState } from "react";
import "./Home.css";
import { Form } from "react-bootstrap";
import $ from 'jquery';

const Home = () => {
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        });
  
        await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setData(result)
          console.log(result);
        });
      }
      fetchData();
    }, [lat,long])

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
            <h1 className="today"> Todays Weather</h1>
            </div>
        </div>
    );
    }

export default Home;
