const produtos = require('../data/produtos.json');
const Produto = require('../models/model-produto')
exports.post =  async (req, res, next) => {
   let produto = await Produto.create(req.body)
   res.status(201).json(produto)
 }
exports.put = async (req, res, next) => {
   let id = req.params.id;
   let produto = await Produto.findByPk(id)
   produto.marca = req.body['marca']
   produto.valor = req.body['valor']
   produto.descricao = req.body['descricao']
   let produtoUpedated = await produto.save()
    res.status(200).json(produtoUpedated);
 };
  
 exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let produto = await Produto.findByPk(id);
    await produto.destroy();
    res.status(200).send();
 };
  
 exports.get = async (req, res, next) => {
    const produtos  = await Produto.findAll()
    res.status(200).json(produtos);
 };
  
 exports.getById = async (req, res, next) => {
    let id = req.params.id;
    let produto = await Produto.findByPk(id)
    res.status(200).json(produto);
 };