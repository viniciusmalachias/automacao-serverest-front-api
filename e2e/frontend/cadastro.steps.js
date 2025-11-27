import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CadastroPage from '../../support/pages/CadastroPage'
import { gerarUsuarioBasico } from '../../support/utils/userFactory'

Given('que estou na página de cadastro', () => {
  CadastroPage.visitar()
})

When('realizo um novo cadastro válido', () => {
  const usuario = gerarUsuarioBasico()
  CadastroPage.cadastrarUsuario(usuario.nome, usuario.email, usuario.senha)
})

Then('devo ver a mensagem de sucesso {string}', (mensagem) => {
  CadastroPage.validarMensagemSucesso(mensagem)
})

