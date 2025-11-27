import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../support/pages/LoginPage'

Given('que acesso a aplicação', () => {
  LoginPage.visitar()
})

Then('devo ver o formulário de login', () => {
  LoginPage.validarFormularioLogin()
})

