import React, { Component } from 'react';
import './App.css';
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
// import { robots } from "./robots";
import Scroll from "../components/Scroll"
import { setSearchField,requestRobots } from "../actions"

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots:state.requestRobots.robots,
    isPending:state.requestRobots.isPending,
    error:state.requestRobots.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return { 
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots:()=>dispatch(requestRobots())
  }
}

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     robots: [],
  //     searchfield:""
  //   }
  // }
  componentDidMount() {
    this.props.onRequestRobots()
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })

  }
  render() {
    const {searchField,onSearchChange,robots}=this.props;
    console.log(this.props)
    
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return (
      <div className="tc">
        <h1 className="f-headline-l">RoboFriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
