var Batismo = require('../models/model')

module.exports.listar = () =>{
    return Batismo
            .find({},{_id:1,date:1,title:1,ref:1,href:0,mae:0,pai:0,year:0})
            .exec()
}

module.exports.consultar = id =>{
    return Batismo
            .find({_id: id})
            .exec()
}

module.exports.listaBatisados = () =>{
    return Batismo
            .aggregate([{$unwind: "$title"},
            {$group: {_id: "$title"}},{$sort: {title: 1}}])
            .exec()
}

module.exports.listaBatismosProgenitores = () =>{
    return Batismo
            .find({},{_id:1,pai:1,mae:1,year:0,title:0,ref:0,href:0})
            .exec()
}

module.exports.listaBatismosAno = (year) =>{
    return Batismo
            .find({ year: {$gt: year}})
            .exec()
}


module.exports.listaStats = t =>{
    return Batismo
            .find({},{uear:1,title:1})
            .exec()
}

