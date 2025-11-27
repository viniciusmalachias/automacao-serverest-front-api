import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const apiUrl = Cypress.env('apiUrl')
let response
let novoUsuario

Given('que tenho os dados de um novo usuário', () => {
  const timestamp = Date.now()
  novoUsuario = {
    nome: `Usuario Teste ${timestamp}`,
    email: `teste${timestamp}@qa.com`,
    password: 'teste123',
    administrador: 'true'
  }
})

When('faço uma requisição GET para {string}', (endpoint) => {
  cy.request({
    method: 'GET',
    url: `${apiUrl}${endpoint}`,
    failOnStatusCode: false
  }).then((res) => {
    response = res
  })
})

When('faço uma requisição POST para {string}', (endpoint) => {
  cy.request({
    method: 'POST',
    url: `${apiUrl}${endpoint}`,
    body: novoUsuario,
    failOnStatusCode: false
  }).then((res) => {
    response = res
  })
})

Then('o status code deve ser {int}', (statusCode) => {
  expect(response.status).to.eq(statusCode)
})

Then('a resposta deve conter a lista de usuários', () => {
  expect(response.body).to.have.property('usuarios')
  expect(response.body.usuarios).to.be.an('array')
})

Then('a resposta deve conter a mensagem {string}', (mensagem) => {
  expect(response.body.message).to.eq(mensagem)
})

