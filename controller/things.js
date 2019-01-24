let things = [
    {
        name:"A",
        val:2
    },
    {
        name:"B",
        val:22
    },{
        name:"c",
        val:12
    },{
        name:"D",
        val:8
    },{
        name:"E",
        val:"hello"
    },{
        name:"F",
        val:"world"
    }
]

let list=()=>{
    return things
}

let listByName = (name) =>{
    if(!(!!things && things.length>0)) return null
    return things.find((item)=>item.name===name)
}

let add=(name,val)=>{
    if(!name && !listByName(name)) return false
    things.push({
        name,
        val
    })

    return things
}

let deleteByName = name =>{
    if(!name && !listByName(name)) return false
    things = things.filter(item=>item.name!==name)  
    return things;  
}

let editValue = (name,val) => {
    if(!name && !listByName(name)) return false
    things = things.map(item=>{
        if(item.name!==name) return item
        return {name,val}
    })  
    return things;
}

module.exports={
    list,
    listByName,
    editValue,
    add,
    deleteByName
}