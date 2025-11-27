import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../support/pages/LoginPage'
import HomePage from '../../support/pages/HomePage'
import { gerarUsuarioBasico } from '../../support/utils/userFactory'

const apiUrl = Cypress.env('apiUrl')
let usuarioAtivo

const criarUsuarioAtivo = () => {
  const usuario = gerarUsuarioBasico()

  return cy
    .request({
      method: 'POST',
      url: `${apiUrl}/usuarios`,
      body: {
        nome: usuario.nome,
        email: usuario.email,
        password: usuario.senha,
        administrador: 'true'
      },
      failOnStatusCode: false
    })
    .then((res) => {
      expect(res.status).to.eq(201)
      return usuario
    })
}

Given(/^que estou na página de login$/, () => {
  LoginPage.visitar()
})

Given(/^que possuo um usuário ativo$/, () => {
  return criarUsuarioAtivo().then((usuario) => {
    usuarioAtivo = usuario
  })
})

When(/^informo minhas credenciais válidas$/, () => {
  expect(usuarioAtivo, 'Usuário ativo deve estar disponível').to.exist
  LoginPage.fazerLogin(usuarioAtivo.email, usuarioAtivo.senha)
})

When(/^preencho o email "([^"]+)"$/, (email) => {
  LoginPage.preencherEmail(email)
})

When(/^preencho a senha "([^"]+)"$/, (senha) => {
  LoginPage.preencherSenha(senha)
})

When(/^clico no botão entrar$/, () => {
  LoginPage.clicarEntrar()
})

When(/^clico no link de cadastrar$/, () => {
  LoginPage.clicarCadastrar()
})

When(/^tento logar com email válido e senha "([^"]+)"$/, (senha) => {
  expect(usuarioAtivo, 'Usuário ativo deve estar disponível').to.exist
  LoginPage.fazerLogin(usuarioAtivo.email, senha)
})

When(/^tento logar com email "([^"]+)" e senha "([^"]+)"$/, (email, senha) => {
  LoginPage.fazerLogin(email, senha)
})

Then(/^devo ser redirecionado para a home$/, () => {
  HomePage.validarLoginSucesso()
})

Then(/^devo ver a mensagem de erro "([^"]+)"$/, (mensagem) => {
  LoginPage.validarMensagemErro(mensagem)
})

Then(/^devo permanecer na página de login$/, () => {
  LoginPage.validarUrlLogin()
})

Then(/^devo visualizar as opções disponíveis na home$/, () => {
  HomePage.validarMenuInicial()
})

Then(/^devo ser avisado sobre campos obrigatórios$/, () => {
  LoginPage.validarCamposObrigatorios()
})

Then(/^devo ser redirecionado para a página de cadastro$/, () => {
  cy.url().should('include', '/cadastrarusuarios')
})

