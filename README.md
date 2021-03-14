# Trabalho-ENG-Software
Trabalho final da disciplina de Engenharia de Software 2020/2 - UFLA (Universidade Federal de Lavras)
 
## Membros
- Caio Gottmann Fernandes Morais
- Ivan Gazzinelli Marçal
- Miguel Rodrigues Guimarães de Oliveira
 
## Descrição
Blog tem como objetivo a divulgação de experiências e aprendizados das ferramentas ou processos que envolvem uma empresa júnior.
 
 
## TECNOLOGIAS UTILIZADAS
### Front-end:
- Vue.js - Versão 3.0
- HTML5
- JS
- CSS3
- SCSS
### Back-end:
- Node.js - Versão 12.20.1
- Express.js Versão 4.17.1
- Mongodb - Versão 4.2.8
 
##  Padrões de uso do Git
### Branches
 - **main** - Última release, sendo o projeto mais atualizado 
 - **Branch vinculada a issue** - A cada issue que está sendo desenvolvida será criada uma branch para uma melhor organização das funcionalidades, sendo o nome da branch sugestivo para aquela issue.
 
### Issues
Para cada funcionalidade do sistema será criado uma issue para a elaboração, contendo a descrição das funcionalidades e dos requisitos já demarcados no documento de requisitos caso possua.
 
### Hierarquia das pastas

```
│   README.md
│
├───Blogcomb
│   ├───Backend
│   │   │   .babelrc
│   │   │   .gitignore
│   │   │   package-lock.json
│   │   │   package.json
│   │   │
│   │   └───src
│   │       │   index.js
│   │       │
│   │       ├───app
│   │       │   ├───controllers
│   │       │   │       Email.js
│   │       │   │       index.js
│   │       │   │       Post.js
│   │       │   │
│   │       │   └───schemas
│   │       │           Email.js
│   │       │           Post.js
│   │       │           Tag.js
│   │       │           Usuario.js
│   │       │
│   │       └───database
│   │               index.js
│   │
│   └───frontend
│       │   .browserslistrc
│       │   .eslintrc.js
│       │   .gitignore
│       │   babel.config.js
│       │   package-lock.json
│       │   package.json
│       │   README.md
│       │
│       ├───public
│       │       favicon.ico
│       │       index.html
│       │
│       └───src
│           │   App.vue
│           │   main.js
│           │
│           ├───assets
│           │   │   aviso.svg
│           │   │   check.svg
│           │   │   close.svg
│           │   │   email.svg
│           │   │   ImagemPerfil.png
│           │   │   logo.png
│           │   │   membros.svg
│           │   │   post.svg
│           │   │
│           │   └───Lato
│           │           Lato-Black.ttf
│           │           Lato-BlackItalic.ttf
│           │           Lato-Bold.ttf
│           │           Lato-BoldItalic.ttf
│           │           Lato-Hairline.ttf
│           │           Lato-HairlineItalic.ttf
│           │           Lato-Heavy.ttf
│           │           Lato-HeavyItalic.ttf
│           │           Lato-Italic.ttf
│           │           Lato-Light.ttf
│           │           Lato-LightItalic.ttf
│           │           Lato-Medium.ttf
│           │           Lato-MediumItalic.ttf
│           │           Lato-Regular.ttf
│           │           Lato-Semibold.ttf
│           │           Lato-SemiboldItalic.ttf
│           │           Lato-Thin.ttf
│           │           Lato-ThinItalic.ttf
│           │           OFL.txt
│           │           README.txt
│           │
│           ├───components
│           │       button.vue
│           │       modalFeedback.vue
│           │       navbar.vue
│           │       navbarAdmin.vue
│           │       questao.vue
│           │       sidebar.vue
│           │
│           ├───router
│           │       index.js
│           │
│           ├───services
│           │   └───api
│           │           Api.js
│           │           criaPost.js
│           │           formEmail.js
│           │
│           ├───store
│           │       index.js
│           │
│           └───views
│               │   cadastrarEmail.vue
│               │   Home.vue
│               │
│               └───Dashboard
│                       criaPost.vue
│                       email.vue
│                       index.vue
│                       post.vue
│
├───Diagramas
│       Diagrama de classes.png
│       Diagrama_de_implementacao.png
│       Diagrama_de_sequencia-cadastro_email.svg
│       Diagrama_de_sequencia-criar_post.svg
│       Diagrama_de_sequencia-delete_email.svg
│       Diagrama_de_sequencia-delete_post.svg
│       Diagrama_de_sequencia-edit_post.svg
│       Diagrama_de_sequencia-get_email.svg
│       Diagrama_de_sequencia-get_post.svg
│
├───Padrões Adotados
│       Regras de Verificação e Analise de Requisitos.pdf
│
├───Requisitos
│       Diagrama de Casos de Uso.png
│       Documento de requisitos EngSoft.docx
│       Documento de Requisitos.pdf
│
└───Teste
    │   Regras de Teste.txt
    │
    └───Script-Selenium
            Eng-Software.side
            TESTE01CriarPostTest.java
            TESTE02EditarPostTest.java
            TESTE03DeletarPostTest.java
            TESTE04AdicionarEmailTest.java
            TESTE05EditarEmailTest.java
            TESTE06ExcluirEmailTest.java
```
