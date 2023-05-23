/* eslint-disable no-unused-vars */
import { Component } from "react";
import Icon from "./Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

const itemArray = new Array(9).fill("empty");

export default class TTT extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: false,
      winMessage: "",
    };
  }

  render() {
    return (
      <>
        <p>{this.state.winMessage}</p>
      </>
    );
  }
}
