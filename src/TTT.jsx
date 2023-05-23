/* eslint-disable react/no-direct-mutation-state */
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

  reloadGame() {
    this.setState({
      isCross: false,
      winMessage: "",
    });

    itemArray.fill("empty", 0, 9);
  }

  checkWinner() {
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[1] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[0]} won`,
      });
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[3]} won`,
      });
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[6]} won`,
      });
      // setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[0]} won`,
      });
      // setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[1]} won`,
      });
      // setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[2]} won`,
      });
      // setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[0]} won`,
      });
      // setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      this.setState({
        winMessage: `${itemArray[2]} won`,
      });
      // setWinMessage(`${itemArray[2]} won`);
    } else if (itemArray.every((item) => item !== "empty")) {
      this.setState({
        winMessage: "Draw",
      });
      // setWinMessage("Draw");
    }
  }

  changeItem(itemNumber) {
    if (this.state.winMessage) {
      return toast(this.state.winMessage, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = this.state.isCross ? "cross" : "circle";
      this.setState((state) => ({
        isCross: !state.isCross,
      }));
    } else {
      return toast("This square is already filled!", { type: "error" });
    }

    this.checkWinner();
  }

  render() {
    return (
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {this.state.winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-success text-uppercase text-center">
                  {this.state.winMessage}
                </h1>
                <Button color="success" block onClick={() => this.reloadGame()}>
                  Reload the Game
                </Button>
              </div>
            ) : (
              <h1 className="text-center texet-warning">
                {this.state.isCross ? "Crosses" : "Circles"}&apos;s Turn
              </h1>
            )}
            <div className="grid">
              {itemArray.map((item, index) => (
                <Card
                  key={index}
                  color="warning"
                  onClick={() => this.changeItem(index)}
                >
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
