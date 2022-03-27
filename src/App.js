import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
export class App extends Component {
  state = {
    person: {
      fullName: "Elon Musk",
      bio: "Elon Reeve Musk FRS (born June 28, 1971) is an entrepreneur and business magnate. He is the founder, CEO, and Chief Engineer at SpaceX; early-stage investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI.",
      imgSrc: "/elon.png",
      profession: "Ingénieur, Entrepreneur, chef d'entreprise",
    },
    show: false,
    timer :1,
    timerID:null
  };
  render() {
    return (
      <div className="App">
        <div className="timer">The component was mounted {this.state.timer} seconds ago </div>
        <Button variant="primary" className="bttn" onClick={() => this.showProfile()}>
          Show Profile
        </Button>

        {this.state.show && (
          <Card>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text style={{fontWeight:'bold'}}>{this.state.person.profession}</Card.Text>
              <Card.Text>{this.state.person.bio}</Card.Text>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
  ti(){
    this.setState({
      timer:this.state.timer+1
    })
  }
  componentDidMount(){
    this.setState({
      timerID:setInterval(() => this.ti(),1000)
    }) 
  }
  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }
  showProfile() {
    this.setState({
      show: !this.state.show,
    });
  }
}

export default App;
