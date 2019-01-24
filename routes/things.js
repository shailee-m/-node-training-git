const things = require('../controller/things')
function thingsRoute(app){
    let router = app.Router();
    router.route('/')
    .get((req,res)=>{
        res.send(things.list())
    })
    .post((req,res)=>{
        console.log(req.body)
        if(!req.body) res.status(500).send('Required parameters')
        let {name,val} = req.body
        res.send(things.add(name,val))
    })
    .put((req,res)=>{
        console.log(req.body)
        if(!req.body) res.status(500).send('Required parameters')
        let {name,val} = req.body
        res.send(things.editValue(name,val))
    })
    .delete((req,res)=>{
        let name = !!req.body ? req.body.name : null
        res.send(things.deleteByName(name))
    })

    router.route('/:name')
    .get((req,res)=>{
        let name = req.params.name
        let result = things.listByName(name)
        res.status(!result ? 500 : 200).send(result ) 
      })

    return router
}

module.exports=thingsRoute