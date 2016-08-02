import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import SMSform from './containers/SMSform';
import About from './components/About';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={SMSform} />
		<Route path="/about" component={About} />
	</Route>
);
