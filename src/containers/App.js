import React,{Component} from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css' 
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component
{

constructor(){
	super()
	this.state ={
		robots: [],
		searchfield: ''
	}
}



componentDidMount(){

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=> response.json())
	.then(users=>{this.setState({robots:users})}); 
	//.then(users=>{}); 
}


onSearchChange=(event)=>{
	this.setState({searchfield: event.target.value});
}

render(){
	const {robots,searchfield} =this.state;
const filterRobots = robots.filter(robot=>{
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	})

return !robots.length?
	(<div className="tc"><img src="loading.gif" alt='robots' width = "70px"/> </div>):
(
<div className="tc">
<h1 className="f1">Robo Showcase</h1>
<SearchBox SearchChange= {this.onSearchChange}/>
<Scroll>
<ErrorBoundry>
  <CardList robots = {filterRobots}/>
  </ErrorBoundry>
</Scroll>
</div>
	);
	




}
}

export default App;