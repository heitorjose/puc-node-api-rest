const produtos = require('../data/produtos.json');
const Produto = require('../models/produto');
exports.post = (req, res, next) => {
   let id = req.body.id
   if (id==null || id==undefined || !produtos.includes(x=>x.id==id)) {
      res.status(500).send("Erro - id não pode ser nulo ou já existe"); 
   }
   // produtos.push(req.body)
    create()
    res.status(201).send();
 };

 async function create() {
   await Produto.create({
   marca: 'ford',
   valor: 10,
   descricao: 'Um mouse USB bonitão'
})}

async function findAll()  {
  return await Produto.findAll()
}
  
 exports.put = (req, res, next) => {
    let id = req.params.id;
    if (id==null || id==undefined) {
      res.status(500).send("Erro - id não pode ser nulo"); 
   }
   produtos.forEach( (item, index) => {
      if(item.id == id) {
     produtos[index].descricao = req.body.descricao
     produtos[index].marca = req.body.marca
     produtos[index].valor = req.body.valor
    }});
    res.status(200).json();
 };
  
 exports.delete = (req, res, next) => {
    let id = req.params.id;
    produtos.forEach( (item, index) => {
      if(item.id == id) {
       produtos.splice(index,1);
    }});
    res.status(200).send();
 };
  
 exports.get = (req, res, next) => {
    res.status(200).json(findAll());
 };
  
 exports.getById = (req, res, next) => {
    let id = req.params.id;
    res.status(200).json(produtos.filter(x=>x.id==id));
 };