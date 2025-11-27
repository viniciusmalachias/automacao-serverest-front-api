# language: pt

Funcionalidade: Cadastro de usuários
  Como um novo cliente do ServeRest
  Quero criar minha conta pelo frontend
  Para acessar o sistema com meu login

  Cenário: Cadastro de usuário comum com sucesso
    Dado que estou na página de cadastro
    Quando realizo um novo cadastro válido
    Então devo ver a mensagem de sucesso "Cadastro realizado com sucesso"

