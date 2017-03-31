import React, { Component } from 'react';
 
// App component - represents the whole app
export default class MainLayout extends Component {
	render(){
		return(
			<div>
				<h1>Tinymce Test</h1>
				{this.props.content}
			</div>
		)
	}
}