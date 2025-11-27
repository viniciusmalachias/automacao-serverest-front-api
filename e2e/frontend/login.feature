# language: pt

Funcionalidade: Login no sistema
  Como um usuário do ServeRest
  Eu quero realizar login no sistema
  Para acessar as funcionalidades da plataforma

  Contexto:
    Dado que estou na página de login

  Cenário: Login com credenciais válidas
    E que possuo um usuário ativo
    Quando informo minhas credenciais válidas
    Então devo ser redirecionado para a home
    E devo visualizar as opções disponíveis na home

  Cenário: Bloquear acesso com senha inválida
    E que possuo um usuário ativo
    Quando tento logar com email válido e senha "senhaerrada"
    Então devo ver a mensagem de erro "Email e/ou senha inválidos"
    E devo permanecer na página de login

  Esquema do Cenário: Mensagem de erro para combinações inválidas
    Quando tento logar com email "<email>" e senha "<senha>"
    Então devo ver a mensagem de erro "Email e/ou senha inválidos"
    E devo permanecer na página de login

    Exemplos:
      | email                    | senha       |
      | email_invalido@teste.com | teste123    |
      | fulano@qa.com            | senhaerrada |

  Cenário: Campos vazios exibem feedback imediato
    Quando clico no botão entrar
    Então devo ser avisado sobre campos obrigatórios
    E devo permanecer na página de login

  Cenário: Navegar para página de cadastro
    Quando clico no link de cadastrar
    Então devo ser redirecionado para a página de cadastro