import React, { Component } from 'react';
import './App.css';
import Card from './components/card';
// import Data from './components/data';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {
        tags: [
          
        ],
        methods: [{

          }]
      
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
        .then(JSONdata => {
          this.setState({methods: JSONdata.data})
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
              <button className="btn btn-danger btn-lg" onClick={this.generateFlashcard}>Generate</button>
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
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Type response here:  </label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
              <button className="btn btn-dark btn-sm" >Submit</button>
            </div>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;