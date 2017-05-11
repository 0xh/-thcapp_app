import React from 'react';
import {Route, IndexRoute} from 'react-router';

import {default as AppContainer} from './modules/App';

import {HomeRoute} from './modules/Home/Routes/HomeRoute/HomeRoute';

import {QuizRoute} from './modules/Home/Routes/QuizRoute/QuizRoute';

import {NoAccessRoute} from './modules/NoAccess/Routes/NoAccessRoute/NoAccessRoute';
import {NotFoundRoute} from './modules/NotFound/Routes/NotFoundRoute/NotFoundRoute';

export const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeRoute}/>

    {/* Home */}
    <Route path="/home" component={HomeRoute}/>

    {/* Quiz */}
    <Route path="/quiz" component={QuizRoute}/>

    {/* No Access */}
    <Route path="/no-access" component={NoAccessRoute}/>

    {/* Not Found */}
    <Route path="*" component={NotFoundRoute}/>
  </Route>
);

export default routes;
