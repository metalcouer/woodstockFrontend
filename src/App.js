import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
// import Data from './components/data';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        day: [],
        headliners: []    
    }
  }
  
  getRandomIntInclusive = (max) => {
    const min = 0
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  generateFlashcard = (e) => {
    console.log('generateFlashcard')
    const randomIndex = this.getRandomIntInclusive(this.state.methods.length - 1)
    const randomCard = this.state.methods[randomIndex]
    console.log(randomCard)
    this.setState({
      name: randomCard.name,
      description: randomCard.description,
      tags: randomCard.tags,
      link: randomCard.link,
      example: randomCard.example
    })
  }

  componentDidMount() {
    fetch('http://localhost:3005')
      .then(data => data.json())
        // .then(response => console.log(response.data.day))
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
                  <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Enter Friday, Saturday, Sunday or Monday for info: </label>
                  <textarea className="form-control col-sm-3 justify-content-center" id="exampleFormControlTextarea1" rows="2"></textarea>
                  <button className="btn btn-dark btn-sm" >Submit</button>
                    </div>
              <button className="btn btn-danger btn-lg" onClick={this.generateFlashcard}>Rock Me</button>
            </div>
            <div className="row justify-content-center">
              {this.state.name
                ? <Card
                description={this.state.description}
                tags={this.state.tags}
                example={this.state.example}
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