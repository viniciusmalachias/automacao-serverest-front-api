class CadastroPage {
  // Elementos
  get inputNome() {
    return cy.get('[data-testid="nome"]')
  }

  get inputEmail() {
    return cy.get('[data-testid="email"]')
  }

  get inputSenha() {
    return cy.get('[data-testid="password"]')
  }

  get checkboxAdmin() {
    return cy.get('[data-testid="checkbox"]')
  }

  get btnCadastrar() {
    return cy.get('[data-testid="cadastrar"]')
  }

  get alertMessage() {
    return cy.get('.alert')
  }

  // Ações
  visitar() {
    cy.visit('/cadastrarusuarios')
  }

  preencherNome(nome) {
    this.inputNome.clear().type(nome)
  }

  preencherEmail(email) {
    this.inputEmail.clear().type(email)
  }

  preencherSenha(senha) {
    this.inputSenha.clear().type(senha)
  }

  marcarAdmin() {
    this.checkboxAdmin.check()
  }

  clicarCadastrar() {
    this.btnCadastrar.click()
  }

  cadastrarUsuario(nome, email, senha, admin = false) {
    this.preencherNome(nome)
    this.preencherEmail(email)
    this.preencherSenha(senha)
    if (admin) {
      this.marcarAdmin()
    }
    this.clicarCadastrar()
  }

  validarMensagemErro(mensagem) {
    this.alertMessage.should('contain', mensagem)
  }

  validarMensagemSucesso(mensagem) {
    this.alertMessage.should('contain', mensagem)
  }
}

export default new CadastroPage()

