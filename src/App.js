import React, { Component } from 'react';
import './App.css';
import Card from './components/card';




class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        day: [],
        headliners: [], 
        isCard: false   
    }
  }
  
  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  generateFlashcard = (e) => {
    const randomIndex = this.getRandomIntInclusive(this.state.headliners.length - 1)
    const randomCard = this.state.headliners[randomIndex]
     this.setState({
      id: randomCard.id,
      artist: randomCard.artist,
      time: randomCard.time,
      opener: randomCard.opener,
      closer: randomCard.closer,
      day: randomCard.day,
      isCard: true,
    })
  }

  componentDidMount() {
    fetch('http://localhost:3005')
      .then(data => data.json())
        
        .then(res => {
          this.setState({
            day: res.data.day,
            headliners: res.data.headliners})
        })
  }

  render() {
    console.log(this.state.methods)
    return (
      <div className="App">
        <div className="row navbar justify-content-end pb-5">
          <ul className="nav">
          </ul>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-8 text-center">
            <h1 className="pb-2"> WoodStock Bangers</h1>
            <div className="flashcard">
              <p className="pb-2">An app to learn which bands headlined the original WoodStock Festival 1969.</p>
              <button className="btn btn-danger btn-lg" onClick={this.generateFlashcard}>Rock Me</button>
            </div>
            <div className="row justify-content-center">
              {this.state.isCard
                ? <Card
                artist = {this.state.artist}
                time = {this.state.time}
                opener = {this.state.opener}
                closer = {this.state.closer}
                day = {this.state.day}
                /> 
                : '' } 
            </div>
            
          </div>
        </div> 
      </div>
    );
  }
}

export default App;