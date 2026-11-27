import { Router } from 'express'

import { atualizarLivro, buscarPorId, cadastrarLivro, excluirLivro, listarLivros } from '../controllers/livroController.js'

export const livroRoutes = Router()

livroRoutes.post('/', cadastrarLivro)
livroRoutes.get('/', listarLivros)
livroRoutes.get('/:id', buscarPorId)
livroRoutes.delete('/:id', excluirLivro)
livroRoutes.put('/:id', atualizarLivro)