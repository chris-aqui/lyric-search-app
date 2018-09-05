import React, { Component } from 'react'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list : [
            {track: {Track_name: "abc"}},
            {track: {Track_name: "123"}}
        ],
        heading:"Top 10 Tracks"
    }
  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
            
        </Context.Provider>
    )
  }
}


export const Consumer = Context.Consumer;

// /Context.Provider
//  privder will wrap around every other component.
//  This allows you at access the state though other compoents as long as consumer is used. 
//  25;02 of part1