import React, { Component } from 'react';



class EvenAndOdd extends Component {

    constructor() {
        super()

        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }


    handleChange(e){
        console.log(e)

        this.setState({
            userInput: e
        })

    }

    onClick(e) {
        console.log(e)
        var arr = e.split(',')
        var even = []
        var odd = []

        for(let i = 0; i < arr.length; i ++){
            if(arr[i] % 2 === 0) {
                even.push(Number(arr[i]))
            }
            else{
                odd.push(Number(arr[i]))
            }
        }
    
        this.setState({
            evenArray: even,
            oddArray: odd,
            userInput: '',
        })
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>
                    Evens and Odds
                </h4>
                <input className = "inputLine" onChange = { (e) => this.handleChange(e.target.value)} value={this.state.userInput} />
                <button className = "confirmationButton" onClick={ () => this.onClick(this.state.userInput)}>Sort</button>
                <span className = "resultsBox">Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className = "resultsBox"> Odds:{ JSON.stringify(this.state.oddArray) }</span>
            </div>
        )
    }
}

export default EvenAndOdd;

