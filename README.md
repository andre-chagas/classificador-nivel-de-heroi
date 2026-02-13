# Classificador de Nível de Herói

Projeto prático que classifica o nível de um herói com base em sua experiência (XP), utilizando variáveis, operadores, laços de repetição e estruturas de decisão.

## Objetivo
- Criar uma variável para armazenar o nome e a quantidade de XP de um herói.
- Utilizar uma estrutura de decisão para determinar o nível conforme as faixas de XP.
- Exibir: `O Herói de nome {nome} está no nível de {nivel}`.

## Regras de Classificação
- XP ≤ 1000 → Ferro
- 1001 ≤ XP ≤ 2000 → Bronze
- 2001 ≤ XP ≤ 5000 → Prata
- 5001 ≤ XP ≤ 7000 → Ouro
- 7001 ≤ XP ≤ 8000 → Platina
- 8001 ≤ XP ≤ 9000 → Ascendente
- 9001 ≤ XP ≤ 10000 → Imortal
- XP ≥ 10001 → Radiante

Nota: a descrição original usa “menor do que 1.000” e “entre 1.001 e 2.000”. Para evitar lacunas (por exemplo, XP = 1000), adotamos faixas contínuas com limites inclusivos onde apropriado, classificando XP = 1000 como Ferro.

## Como Executar
1. Pré-requisito: Node.js instalado.
2. No terminal, dentro do diretório do projeto, execute:
   - Com argumentos:
     ```
     node index.js "NomeDoHeroi" 1500
     ```
   - Sem argumentos (modo demonstração com vários casos):
     ```
     node index.js
     ```

## Saída Esperada
Exemplo com argumentos:
```
O Herói de nome Alex está no nível de Bronze
```

Exemplo no modo demonstração (vários heróis e XP):
```
O Herói de nome Artemis está no nível de Ferro
O Herói de nome Baldur está no nível de Ferro
O Herói de nome Cassandra está no nível de Bronze
...
```

## Passo a Passo (Explicação)
1. Definição de variáveis
   - Recebemos o nome e a XP via argumentos de linha de comando.
   - Quando não há argumentos, usamos uma lista de casos para demonstrar.
2. Estrutura de decisão
   - Uma função compara a XP contra faixas ordenadas, retornando o nível correspondente.
3. Laço de repetição
   - No modo demonstração, percorremos uma lista de heróis com diferentes valores de XP usando um laço.
4. Operadores
   - São usados operadores relacionais (≤) para comparar a XP com os limites das faixas.
5. Exibição da mensagem
   - Montamos a string final no formato solicitado e exibimos no console.

