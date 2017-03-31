import React from 'react';

import MainLayout from '../imports/ui/MainLayout.jsx';
import App from '../imports/ui/App.jsx';
import AddArticle from '../imports/ui/AddArticle.jsx';
import UpdateArticle from '../imports/ui/UpdateArticle.jsx';


FlowRouter.route('/', {
	name: 'home',
	action() {
		ReactLayout.render(MainLayout,{content: <App />});
	}
});

FlowRouter.route('/add', {
	name: 'AddArticle',
	action() {
		ReactLayout.render(MainLayout,{content: <AddArticle />});
	}
});

FlowRouter.route('/article/:_id', {
	name: 'UpdateArticles',
	action(params) {
		ReactLayout.render(MainLayout,{content: <UpdateArticle articleId={params._id} />});
	}
});