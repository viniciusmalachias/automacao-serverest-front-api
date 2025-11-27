class LoginPage {
  // Elementos
  get inputEmail() {
    return cy.get('[data-testid="email"]')
  }

  get inputSenha() {
    return cy.get('[data-testid="senha"]')
  }

  get btnEntrar() {
    return cy.get('[data-testid="entrar"]')
  }

  get linkCadastrar() {
    return cy.get('[data-testid="cadastrar"]')
  }

  get alertError() {
    return cy.get('.alert')
  }

  // Ações
  visitar() {
    cy.visit('/login')
  }

  preencherEmail(email) {
    this.inputEmail.clear().type(email)
  }

  preencherSenha(senha) {
    this.inputSenha.clear().type(senha)
  }

  clicarEntrar() {
    this.btnEntrar.click()
  }

  fazerLogin(email, senha) {
    this.preencherEmail(email)
    this.preencherSenha(senha)
    this.clicarEntrar()
  }

  clicarCadastrar() {
    this.linkCadastrar.click()
  }

  validarMensagemErro(mensagem) {
    this.alertError.should('contain', mensagem)
  }

  validarUrlLogin() {
    cy.url().should('include', '/login')
  }

  validarFormularioLogin() {
    this.inputEmail.should('be.visible')
    this.inputSenha.should('be.visible')
    this.btnEntrar.should('be.visible')
  }

  validarCamposObrigatorios() {
    this.alertError.should('contain', 'Email é obrigatório')
    this.alertError.should('contain', 'Password é obrigatório')
  }
}

export default new LoginPage()

