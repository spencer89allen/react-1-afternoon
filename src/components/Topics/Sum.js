import React, { Component } from 'react';



class Sum extends Component {

    constructor() {
        super()

        this.state = {
            number1: 0,
            number2: 0,
            summation: null,
        }

        this.handleNumb1Input = this.handleNumb1Input.bind(this)
        this.handleNumb2Input = this.handleNumb2Input.bind(this)
        this.handleSum = this.handleSum.bind(this)
    }

    handleNumb1Input(e) {
        this.setState({
            number1: e,
        })
    }

    handleNumb2Input(e) {
        this.setState({
            number2: e,
        })
    }

    handleSum(number1, number2) {
        var sum = Number(number1) + Number(number2)

        this.setState({
            summation: sum,
        })
    }


    render() {
        return(
            <div className='puzzleBox sumPB'>
                
                <h4>Summation</h4>

                <input className='inputLine' onChange={ (e) => this.handleNumb1Input(e.target.value)}></input>

                <input className='inputLine' onChange={ (e) => this.handleNumb2Input(e.target.value)}></input>

                <button className='confirmationButton' onClick={ () => this.handleSum(this.state.number1, this.state.number2)}>Add</button>

                <span className="resultsBox">Sum: {JSON.stringify(this.state.summation)}</span>

            </div>
        )
    }
}

export default Sum;