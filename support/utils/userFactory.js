const firstNames = [
  'Aurora',
  'Bruno',
  'Carolina',
  'Diego',
  'Elisa',
  'Felipe',
  'Gabriela',
  'Hugo',
  'Isadora',
  'Joana',
  'Lucas',
  'Marina',
  'Natália',
  'Otávio',
  'Paula',
  'Rafael',
  'Sofia',
  'Theo',
  'Vitor',
  'Yasmin'
]

const lastNames = [
  'Almeida',
  'Barbosa',
  'Cardoso',
  'Dias',
  'Esteves',
  'Ferraz',
  'Guimarães',
  'Hungria',
  'Iglesias',
  'Junqueira',
  'Lima',
  'Moreira',
  'Nogueira',
  'Oliveira',
  'Pereira',
  'Queiroz',
  'Ribeiro',
  'Silva',
  'Teixeira',
  'Vieira'
]

const randomItem = (list) => list[Math.floor(Math.random() * list.length)]

const gerarNomeCompleto = () => `${randomItem(firstNames)} ${randomItem(lastNames)}`

const gerarAliasEmail = () => {
  const base = `${randomItem(firstNames)}${randomItem(lastNames)}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  const timestamp = Date.now().toString(36)
  return `${base}${timestamp}`
}

export const gerarUsuarioBasico = () => ({
  nome: gerarNomeCompleto(),
  email: `${gerarAliasEmail()}@teste.com`,
  senha: 'teste123'
})

