const things = require('../controller/things')
function thingsRoute(app){
    let router = app.Router();
    router.route('/')
  
    return router
}

module.exports=thingsRoute