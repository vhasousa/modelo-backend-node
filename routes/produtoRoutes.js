import { Router } from 'express'

import { atualizarProduto, buscarPorId, cadastrarProduto, excluirProduto, listarProdutos } from '../controllers/produtoController.js'

export const produtoRoutes = Router()

produtoRoutes.post('/', cadastrarProduto)
produtoRoutes.get('/', listarProdutos)
produtoRoutes.get('/:id', buscarPorId)
produtoRoutes.delete('/:id', excluirProduto)
produtoRoutes.put('/:id', atualizarProduto)