const { default: mongoose } = require('mongoose')
const model = require('../modelos/usuario')

const parserId = (id) => {
    return mongoose.Types.ObjectId(id)
}

exports.getdata = (req,res) =>{
    model.find({},(err,docs)=>{
        res.send({
            docs: docs
        })
    })
}

exports.getSingleData = (req,res) =>{
    const { id } = req.params
    model.find({_id: parserId(req.params.id)},(err,doc)=>{
        res.send({
            docs:doc
        })
    })
}

exports.getdataSearch = (req,res) =>{
    model.find({Nombre: {$regex:req.params.Nombre}},(err,docs)=>{
        res.send({
            docs: docs
        })
    })
}

exports.insertData = (req,res) => {
    const data = req.body
    model.create(data,(err,docs)=>{
        if(err){
            res.send({error:'Error'},707)
        }else{
            res.send({data:docs})
        }
    })
}

exports.updateSingle = (req,res) =>{
    const { id } = req.params
    const body = req.body
    model.updateOne({_id: parserId(req.params.id)},
    body,
    (err, docs) =>{
        res.send({
            items: docs
        })
    })
}

exports.deleteSingle = (req,res) =>{
    const { id } = req.params
    model.deleteOne({_id: parserId(req.params.id)},
    (err, docs) =>{
        res.send({
            items: docs
        })
    })
}