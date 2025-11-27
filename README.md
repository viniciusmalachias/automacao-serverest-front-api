# ServeRest – Automação Cypress + Cucumber

Essa pasta traz minha suíte de testes end-to-end para o ServeRest (API + frontend). A ideia é permitir que qualquer pessoa clone o repositório, instale as dependências e rode tudo em poucos comandos — inclusive gerando o relatório bonito do Allure.

## 1. O que você precisa antes de rodar
- **Node.js 18+** (uso LTS)
- **npm** (vem junto com o Node)
- **Git**
- **Java 8+** (somente para abrir o relatório Allure)

## 2. Como baixar e instalar
```bash
git clone https://github.com/viniciusmalachias/automacao-serverest-front-api.git
cd cypress
npm install
```

## 3. Rodando os testes
| Comando | O que acontece |
| --- | --- |
| `npm run cy:open` | Abre a interface do Cypress para rodar manualmente |
| `npm run test:api` | Testes Gherkin da API ServeRest |
| `npm run test:cadastro` | Fluxo completo de cadastro pelo frontend |
| `npm run test:login` | Todos os cenários de login (válido, inválido, mensagens, navegação) |
| `npm run test:smoke` | Apenas o `visit` e validação básica do /login |
| `npm run test:ordered` | API → Cadastro → Login → Smoke (a ordem pedida no desafio) |
| `npm run test:ordered:report` | Mesma sequência, limpando resultados antigos e já gerando o relatório HTML |
| `npm run cy:run` | Executa todas as `.feature` conforme o padrão do Cypress |

`npm test` é exatamente o mesmo que `npm run test:ordered`.

## 4. Relatório Allure em HTML
1. `npm run test:ordered:report` – limpa resultados anteriores, roda tudo e cria a pasta `allure-report/`
2. `npm run allure:open` – abre o relatório em um servidor local  
   *ou* abra manualmente o arquivo `allure-report/index.html`
3. `npm run allure:serve` – opção rápida que gera e abre um servidor temporário

## 5. Estrutura em alto nível
```
cypress/
├── e2e/
│   ├── api/usuarios.(feature|steps.js)
│   └── frontend/
│       ├── cadastro.(feature|steps.js)
│       ├── login.(feature|steps.js)
│       └── smoke.(feature|steps.js)
├── support/
│   ├── e2e.js                  # configurações globais e hooks
│   ├── pages/                  # Page Objects (Login, Cadastro, Home)
│   └── utils/userFactory.js    # geração de massa dinâmica
├── cypress.config.js
└── package.json
```

## 6. Convenções rápidas
- Features escritas em português (Gherkin completo com Contexto, Cenário, Esquema, etc.)
- Steps com regex para dar autocomplete legal no VSCode
- Massa dinâmica para evitar e-mails duplicados (`userFactory`)
- Page Objects centralizam seletores e assertivas

## 7. Se algo der errado
- **IDE dizendo que o step não existe** → feche e abra o VSCode/Cursor; as configs estão em `.vscode/settings.json`
- **Relatório não abre** → confirme `java -version`
- **Algum endpoint oscilou** → o ServeRest é público, basta rodar o comando novamente

Ficou em dúvida ou quer adaptar algo? Só seguir essa base que está tudo modularizado. Bons testes! 🚀

🚀 🚀Fique a vontade de entrar em contato comigo pelo número: 11989669903 ou email: vinicius.malachiasti@gmail.com🚀 🚀