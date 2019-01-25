import React, { Component } from 'react';



class FilterString extends Component {

    constructor() {
        super()

        this.state = {
            unFilteredArray: ['Spencer','Anne','Winnie','James','Jessica','Mark','Maddy','Tyler'],
            userInput: '',
            filteredArray: [],
        }

        this.onChange = this.onChange.bind(this)

    }

    onChange(e) {
        this.setState({
            userInput: e
        })
    }

    filter(userInput) {
        // var filtered = []
        // for(var i = 0; i < this.state.unFilteredArray.length; i ++){
        //   filtered.push(this.state.unFilteredArray[i].includes(value))
        // }
        // this.setState({
        //     filteredArray: filtered
        // })
        

        var filterArr = this.state.unFilteredArray.filter((value, index, array) => {
           return value.toLowerCase().includes(userInput.toLowerCase())
        })
        console.log(filterArr)
        this.setState({
            filteredArray: filterArr
        })
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>

                <h4>Filter String</h4>

                <span className='puzzleText'>Unfiltered:{JSON.stringify(this.state.unFilteredArray)}</span>

                <input className="inputLine" onChange={ e => this.onChange(e.target.value)}></input>

                <button className='confirmationButton' onClick={ () =>this.filter(this.state.userInput)} >Filter</button>

                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }
}

export default FilterString;