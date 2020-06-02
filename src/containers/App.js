import React,{Component} from 'react';
import CardList from '../components/CardList';
import {connect} from 'react-redux'
//import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'

import './App.css' ;
import ErrorBoundry from '../components/ErrorBoundry'
import{setSearchField,requestRobots} from '../actions'

import loading from '../images/loading.gif'

const mapStatetoProps =state=>{
	return{
		searchField:state.searchRobots.searchField,
		robots:state.requestRobots.robots,
		isPending:state.requestRobots.isPending,
		error:state.requestRobots.error
	}
}

const mapDispatchtoProps = (dispatch) =>{
	return {
		onSearchChange:(event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())

}

}


class App extends Component
{


componentDidMount(){
 
this.props.onRequestRobots();
}



render(){

const {searchField,onSearchChange,robots,isPending} =this.props;
const filterRobots = robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	})

return isPending?
	(<div className="tc"><img src={loading}alt='Loading..' width = "70px"/> </div>):
(
<div className="tc">
<h1 className="f1">Robo Showcase 2.0</h1>
<SearchBox SearchChange= {onSearchChange}/>
<Scroll>
<ErrorBoundry>
  <CardList robots = {filterRobots}/>
  </ErrorBoundry>
</Scroll>
</div>
	);
	




}
}

export default connect(mapStatetoProps,mapDispatchtoProps)(App);