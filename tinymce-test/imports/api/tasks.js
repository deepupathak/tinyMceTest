import { Mongo } from 'meteor/mongo';
 
export const Articles = new Mongo.Collection('articles');

if(Meteor.isServer){
	Meteor.methods({
		addArticle(data){
			// console.log(data)
			let id = Articles.insert(data)
			return id;
		},
		updateArticle(id, data){
			Articles.update({_id: id}, {$set:data})
		},
		deleteArticle(id){
			Articles.remove({_id: id})
		}
	})
}