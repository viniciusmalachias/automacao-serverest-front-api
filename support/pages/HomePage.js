class HomePage {
  // Elementos
  get headerUsuario() {
    return cy.get('[data-testid="logout"]')
  }

  get btnLogout() {
    return cy.get('[data-testid="logout"]')
  }

  get menuHome() {
    return cy.get('[data-testid="home"]')
  }

  get tituloPagina() {
    return cy.get('h1')
  }

  // Ações
  validarLoginSucesso() {
    cy.url().should('include', '/admin/home')
  }

  clicarLogout() {
    this.btnLogout.click()
  }

  validarTitulo(titulo) {
    this.tituloPagina.should('contain', titulo)
  }

  validarUsuarioLogado() {
    this.btnLogout.should('be.visible')
  }

  validarMenuInicial() {
    this.menuHome.should('be.visible')
    this.btnLogout.should('be.visible')
  }
}

export default new HomePage()

