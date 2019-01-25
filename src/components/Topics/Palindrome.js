import React, { Component } from 'react';



class Palindrome extends Component {

    constructor() {
        super()

        this.state = {
            userInput: '',
            palindrome: '',
        }

        this.handleUserInput = this.handleUserInput.bind(this)

    }


    handleUserInput(e) {
        this.setState({
            userInput: e
        })
    }

    handlePalindrome(userInput) {
        let newStr = userInput.toLowerCase().split('').reverse().join('')
        if( newStr === userInput.toLowerCase() ) {
            this.setState({
                palindrome: true
            })
        }
        else {
            this.setState({
                palindrome: false
            })
        }
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>

                <h4>Palindrome</h4>

                <input className='inputLine' onChange={(e) => this.handleUserInput(e.target.value)}></input>

                <button className='confirmationButton' onClick={() => this.handlePalindrome(this.state.userInput)}>Confirm</button>

                <span className='resultsBox'>Results: {JSON.stringify(this.state.palindrome)}</span>

            </div>
        )
    }
}

export default Palindrome;