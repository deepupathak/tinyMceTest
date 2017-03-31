import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Articles } from '../api/tasks.js'

import ArticlesList from './ArticlesList'
 
// App component - represents the whole app
class App extends Component {
  render() {
    return (
      <div className="container">
        <button type="button" className="btn btn-default" onClick={()=>FlowRouter.go('AddArticle')}>Add article</button><br/><br/>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Article</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.articles ?
                this.props.articles.map((value)=>{
                  return(
                    <ArticlesList key={value._id} data={value} />
                  )
                })
              :
                <div>No Articles Found</div>
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    articles: Articles.find().fetch()
  };
},App);