import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Tasks = require('./containers/TasksContainer').default
      const tasksReducer = require('./modules/tasks').default
      const activeTaskReducer = require('./modules/activeTask').default

      /*  Add the reducer to the store on key 'tasks'  */
      injectReducer(store, { key: 'tasks', reducer : tasksReducer })
      injectReducer(store, { key: 'activeTask', reducer: activeTaskReducer })

      /*  Return getComponent   */
      cb(null, Tasks)

    /* Webpack named bundle   */
    }, 'tasks')
  }
})
