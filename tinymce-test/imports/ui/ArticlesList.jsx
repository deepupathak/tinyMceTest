import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM, { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

export default class ArticlesList extends Component {
	delete(e){
		e.preventDefault();
		Meteor.call('deleteArticle',this.props.data._id, (err)=>{
			if(err){
				alert(err.reason)
			}else{
				alert("Article deleted")
			}
		})
	}
	render(){
		// console.log("======", this.props)
		return(
			<tr key={this.props.data._id}>
				<td>{this.props.data.title}</td>
				<td>{this.props.data.article}</td>
				<td><a href={FlowRouter.path('UpdateArticles',{_id:this.props.data._id})}>Update</a>&nbsp;&nbsp;<a href="javascript:void(0)" onClick={this.delete.bind(this)}>delete</a></td>
			</tr>
		);
	}
}