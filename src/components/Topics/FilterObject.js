import React, { Component } from 'react';



class FilterObject extends Component {

    constructor() {
        super()

        this.state = {
            unFilteredArray: [
                    {
                        name: 'Lucky Charms',
                        sugary: true,
                        calories: 420,
                        marshmellows: true
                    },
                    {
                        name: 'Reeses Puffs',
                        sugary: true,
                        calories: 360,
                        shape: 'round'
                    },
                    {
                        name: 'Captain Crunch',
                        sugary: true,
                        calories: 320,
                        color: 'yellow'
                    }
                ],
            userInput: '',
            filteredArray: [],
        }

        this.handleChange = this.handleChange.bind(this)
        this.filterCereal = this.filterCereal.bind(this)
    }

    handleChange(e) {
        this.setState({
            userInput: e
        })
    }

    filterCereal(prop) {
        var cereal = this.state.unFilteredArray;
        var filteredArray = [];
        
        for ( var i = 0; i < cereal.length; i++ ) {
          if ( cereal[i].hasOwnProperty(prop) ) {
            filteredArray.push(cereal[i]);
          }
        }
    
        this.setState({
            filteredArray: filteredArray,
        })
    }


    render() {
        return(
            <div className='puzzleBox filterObjectPB'>

                <h4>Filter Object</h4>

                <span className='puzzleText'> Unfiltered:{JSON.stringify(this.state.unFilteredArray)} </span>

                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} />

                <button className='confirmationButton' onClick={ (e) => this.filterCereal(this.state.userInput)}> Filter </button>

                <span className='resultsBox filterObjectRB'> Filtered:{JSON.stringify(this.state.filteredArray)} </span>

            </div>
        )
    }
}

export default FilterObject;