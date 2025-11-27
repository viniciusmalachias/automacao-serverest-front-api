# language: pt

Funcionalidade: API de Usuários
  Como um consumidor da API ServeRest
  Eu quero gerenciar usuários via API
  Para validar as operações CRUD

  Cenário: Listar todos os usuários
    Quando faço uma requisição GET para "/usuarios"
    Então o status code deve ser 200
    E a resposta deve conter a lista de usuários

  Cenário: Cadastrar um novo usuário
    Dado que tenho os dados de um novo usuário
    Quando faço uma requisição POST para "/usuarios"
    Então o status code deve ser 201
    E a resposta deve conter a mensagem "Cadastro realizado com sucesso"

  Cenário: Buscar usuário por ID inexistente
    Quando faço uma requisição GET para "/usuarios/abcdefghijklmnop"
    Então o status code deve ser 400
    E a resposta deve conter a mensagem "Usuário não encontrado"

