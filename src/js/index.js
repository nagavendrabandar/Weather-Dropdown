// Import React, ReactDOM, JS, CSS 
import '../css/styles.scss';
import Dropdown from './components/WeatherDropdown';
import React from 'react';
import ReactDOM from "react-dom"
import WeatherItem from './components/WeatherItem';

// Defining the weatherReport Object
const weatherReport = [
		{city: 'London', temperature: 15, type: 'cloudy'},
		{city: 'Connecticut', temperature: 25, type: 'sunny'},
		{city: 'New Jersey', temperature: 20, type: 'cloudy'},
		{city: 'Madrid', temperature: 15, type: 'cloudy'}
];

// Rendering the drpdown component to the DOM
ReactDOM.render(<div className="custom-dropdown-holder">
                  <h2>React Assignment - Weather Dropdown</h2>
                  <Dropdown placeholder="Choose City" itemComponent={WeatherItem} items={weatherReport}/></div>, 
			  	  document.getElementById('app'));