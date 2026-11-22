# Trabalho de Geografia 117 — Grupo 6 - Data Centers e Meio Ambiente

Portal desenvolvido como parte do Projeto Final Integrador das disciplinas de **Prática de Laboratório 1 (PL1)** e **Geografia**, no Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP), Câmpus Cubatão.

O projeto reúne pesquisas produzidas pelos estudantes da turma 117 sobre a expansão dos data centers e seus possíveis impactos ambientais, com atenção especial ao empreendimento anunciado na região de Barão Geraldo, em Campinas (SP).

## Acesso ao portal

**Site publicado:**  
https://lorenzolimamdo-creator.github.io/Geografia-PL1/

O portal foi desenvolvido para reunir e apresentar os trabalhos da turma em um ambiente digital organizado, responsivo e de fácil navegação.

## Objetivos do projeto

- Investigar a expansão da infraestrutura de data centers e sua relação com o meio ambiente.
- Analisar possíveis impactos ambientais associados ao consumo de energia e água, à ocupação do solo e à biodiversidade.
- Reunir e organizar as pesquisas dos grupos da turma em uma plataforma única.
- Aplicar os conhecimentos de programação trabalhados em PL1 na construção de um site funcional.
- Desenvolver uma identidade visual consistente e uma experiência de navegação adaptável a diferentes dispositivos.

## Organização do portal

O site é composto por cinco páginas principais:

| Página | Descrição |
|---|---|
| `index.html` | Página inicial, com apresentação do projeto, contextualização do tema, orientação dos professores e acesso às pesquisas. |
| `geografia.html` | Reúne os trabalhos de Geografia, permitindo pesquisar e filtrar os conteúdos. |
| `trabalho.html` | Apresenta individualmente cada pesquisa, utilizando um identificador para carregar o conteúdo correspondente. |
| `equipe.html` | Apresenta os integrantes responsáveis pelo desenvolvimento do portal e suas respectivas funções. |
| `estilo.html` | Documenta a identidade visual, a paleta de cores, a tipografia e as escolhas de organização da interface. |

## Funcionalidades

- Menu de navegação compartilhado entre as páginas, com identificação da página atual.
- Menu adaptável a diferentes tamanhos de tela.
- Alternância entre os temas claro e escuro.
- Pesquisa textual e filtros para localizar trabalhos por tema e autoria.
- Exibição dinâmica dos trabalhos a partir de estruturas de dados em JavaScript.
- Paginação dos resultados.
- Páginas individuais de pesquisa carregadas de acordo com o identificador presente no endereço.
- Atividade interativa relacionada ao conteúdo de Geografia.
- QR Code na página inicial para facilitar o acesso ao portal por dispositivos móveis.
- Layout responsivo, com utilização de recursos do Bootstrap e CSS próprio.

## Tecnologias utilizadas

**HTML5** — estruturação semântica e organização do conteúdo das páginas.

**CSS3** — identidade visual, paleta de cores, tipografia, componentes, estados de interação e adaptação do layout.

**JavaScript** — organização dos dados, geração dinâmica de conteúdo, filtros, pesquisa, paginação, navegação e demais funcionalidades interativas.

**Bootstrap 5.3.8** — biblioteca utilizada para auxiliar na construção do layout responsivo e na organização dos elementos por meio de seu sistema de grid e classes utilitárias.

**Git e GitHub** — armazenamento do código-fonte, colaboração e controle de versões.

**GitHub Pages** — hospedagem e publicação do portal.

## Estrutura dos arquivos

```text
Geografia-PL1/
│
├── index.html
├── geografia.html
├── trabalho.html
├── equipe.html
├── estilo.html
│
├── css/
│   └── estilo.css
│
├── js/
│   ├── atividade.js
│   ├── config.js
│   ├── dados.js
│   ├── menu.js
│   ├── qrcode.js
│   ├── tema.js
│   ├── trabalho.js
│   └── trabalho2.js
│
├── img/
│   └── imagens utilizadas no portal
│
├── README.md
└── LICENSE
```

### Organização do JavaScript

Os arquivos JavaScript foram separados de acordo com suas responsabilidades:

- **`config.js`** — reúne informações gerais do portal e os dados utilizados na configuração do menu.
- **`dados.js`** — armazena os trabalhos em estruturas de dados, incluindo títulos, autores, resumos, textos, imagens e referências.
- **`menu.js`** — constrói os links de navegação, identifica a página atual e controla a abertura e o fechamento do menu.
- **`tema.js`** — implementa a alternância entre os temas claro e escuro.
- **`atividade.js`** — controla a atividade interativa presente na área de Geografia.
- **`trabalho.js`** — gerencia a apresentação, a pesquisa, os filtros e a paginação dos trabalhos.
- **`trabalho2.js`** — controla a apresentação individual de cada pesquisa.
- **`qrcode.js`** — gera o QR Code de acesso ao portal na página inicial.

## Equipe de desenvolvimento

**Turma:** 117  
**Grupo produtor:** 6  
**Instituição:** IFSP — Câmpus Cubatão  
**Ano:** 2026

### Integrantes e contribuições

**Lorenzo — Programação principal**

Responsável pela estruturação inicial do código e pela organização da implementação do portal. Conduziu a construção da estrutura das páginas e a implementação dos componentes e funcionalidades, incorporando progressivamente as exigências do projeto repassadas pelos demais integrantes.

**Téo — Programação auxiliar**

Atuou diretamente ao lado do programador principal durante o desenvolvimento, colaborando na construção e na implementação dos códigos HTML, CSS e, especialmente, JavaScript. Participou de forma próxima das decisões e da resolução de questões técnicas.

**Gabriel — Design**

Responsável pelo planejamento visual do portal, pela disposição dos conteúdos, pela organização do layout e pela definição e implementação das cores. Acompanhou de perto a etapa de CSS, colaborando com a aplicação das decisões de design na interface.

**Noah — Pesquisa e colaboração técnica**

Participou da seleção de artigos e materiais de referência, da pesquisa e da elaboração dos textos. Também colaborou com a programação, especialmente na transmissão dos conhecimentos de Bootstrap trabalhados em aula e no acompanhamento da implementação dos componentes.

**Wilmar — Pesquisa e colaboração técnica**

Participou da elaboração dos textos, da seleção de imagens e da pesquisa de conteúdo. Também contribuiu com a programação e com a aplicação dos conhecimentos de Bootstrap, acompanhando e auxiliando a implementação dos recursos da biblioteca.

### Colaboração da equipe

O desenvolvimento ocorreu de maneira colaborativa. As exigências do projeto foram discutidas e repassadas entre os integrantes, que contribuíram com sugestões de componentes, organização de conteúdo e decisões de implementação.

Além da participação direta dos responsáveis pela programação, os integrantes envolvidos principalmente com pesquisa e design acompanharam as etapas de desenvolvimento, estudaram os recursos utilizados e compartilharam os conhecimentos adquiridos nas aulas, especialmente em relação ao Bootstrap.

A pesquisa e a elaboração dos textos também foram atividades fundamentais para a construção do portal, garantindo que o conteúdo apresentado acompanhasse a estrutura e os recursos desenvolvidos.

## Fontes de pesquisa

As pesquisas de Geografia utilizam referências institucionais, técnicas e jornalísticas para contextualizar o empreendimento e discutir seus possíveis impactos ambientais.

Entre as fontes consultadas estão:

- [Prefeitura Municipal de Campinas](https://www.campinas.sp.gov.br/)
- [Câmara Municipal de Campinas](https://www.campinas.sp.leg.br/)
- [Agência Internacional de Energia (IEA)](https://www.iea.org/)
- [Empresa de Pesquisa Energética (EPE)](https://www.epe.gov.br/)
- [Sanasa](https://www.sanasa.com.br/)
- [Comitês PCJ](https://www.comitespcj.org.br/)
- [Ministério Público de Contas do Estado de São Paulo](https://mpc.sp.gov.br/)
- [TV Câmara Campinas](https://www.tvcamaracampinas.com.br/)
- [Correio da Manhã](https://www.correiodamanha.com.br/)

As referências específicas de cada investigação também estão disponibilizadas nas respectivas páginas de pesquisa.

## Recursos visuais

As imagens utilizadas para contextualizar os temas abordados estão organizadas na pasta `img/`. Os arquivos de imagens externas tiveram seus nomes originais preservados, facilitando a identificação de suas fontes.

As imagens ilustrativas não devem ser interpretadas necessariamente como fotografias dos locais ou empreendimentos discutidos nos textos.

## Como executar localmente

1. Faça o download ou clone o repositório.
2. Mantenha a estrutura de pastas e arquivos.
3. Abra o arquivo `index.html` em um navegador.
4. Navegue pelas páginas utilizando o menu principal.

Para que todos os recursos externos funcionem corretamente, é necessário acesso à internet, especialmente para o carregamento do Bootstrap e a geração do QR Code.

## Publicação

O portal está hospedado pelo **GitHub Pages**, a partir do repositório público do projeto.

**Repositório:**  
https://github.com/lorenzolimamdo-creator/Geografia-PL1

**Portal:**  
https://lorenzolimamdo-creator.github.io/Geografia-PL1/

---

**IFSP — Instituto Federal de Educação, Ciência e Tecnologia de São Paulo**  
Câmpus Cubatão · Turma 117 · 2026

Projeto Final Integrador — Prática de Laboratório 1 e Geografia.