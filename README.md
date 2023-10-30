
# AdestraCao - ERP de Agendamentos para Adestrador

AdestraCao é um projeto de sistema de agendamento desenvolvido em React para um adestrador de cães autonomo (com um unico cadastro, pressetado, por este motivo não houve necessidade da criação de uma tela para cadastro de adestradores). Este aplicativo permite que o adestrador gerencie seus agendamentos de forma eficaz, aproveitando a potência do React, Veet, Styled-Components e outras tecnologias para a otimização e organização de seu tempo.
 * importante salientar que a página landing page foi construida para que todas as pessoas possam ter acesso, logo os clientes do adestrador tem uma prévia dos seus serviços e caso se interessem podem entrar em contato tanto por e-mail quanto por whatsapp.

LandingPage AdestraCão
![LandingPage AdestraCao Preview](/public/landingPage.png)

Agenda ERP AdestraCão
![ERP AdestraCao Preview](/public/imageERP.png)

## Recursos Principais

- **Agendamento de Sessões:** O adestrador pode agendar sessões de treinamento com os clientes.
- **Gerenciamento de Clientes:** Mantém um registro de todos os clientes e suas informações.
- **Estilização Moderna:** Utiliza Styled-Components para criar uma interface atraente.
- **Navegação Suave:** Implementado com React Router Dom para uma experiência de usuário perfeita.

## Pré-requisitos

Certifique-se de ter instalado o seguinte software:

- [Node.js](https://nodejs.org/) - Ambiente de tempo de execução JavaScript.
- [npm](https://www.npmjs.com/) - Gerenciador de pacotes para instalar as dependências do projeto.

## Deployment 

Link do deploy: https://adestra-cao.vercel.app/
Atenção: para que o deploy funcione corretamente, é necessário que a API da aplicação esteja rodando em sua máquina.

## Repositório backend

Para que a aplicação funcione você precisará clonar o repositório do backend utilizando este link
  
   ```bash
   https://github.com/IgorSPinto/Agendamento_API_MD5.git
   ```
instale as dependencias:

   ```bash
   npm install
   ```

Será necessário criar um arquivo .env seguindo o exemplo já existente, com os seguintes dados para ter acesso ao banco de dados da aplicação:

   ```bash
   USER_DB=igorpinto103
   PASSWORD=1234
   DATABASE=lazkspx 
   CLUSTER=cluster0
   PORT=3000
   ```

Após isso utilize o comando a seguir para rodar a aplicação:

   ```bash
   npm run dev
   ```

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/thayse342/AdestraCao.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
    cd AdestraCao
   ```
3. Instale as dependências:

   ```bash
    npm install
   ```

## Uso

Após a instalação, você pode iniciar o aplicativo de desenvolvimento usando o seguinte comando:

```bash
npm run dev 
```

Isso iniciará o aplicativo em um servidor de desenvolvimento local. Acesse http://localhost:5173 no seu navegador para usá-lo.

IMPORTANTE: ao acessar a pagina de login será necessário utilizar os dados ficticios predefinidos pelos desenvolvedores para conseguir acesso a área restrita (email: "leonardo@gmail.com", senha: "senha123")

Login AdestraCão
![Login AdestraCao Preview](/public/login.png)

## Bibliotecas e ferramentas utilizadas

* [React](https://legacy.reactjs.org/docs/getting-started.html) 

* [React Router Dom](https://reactrouter.com/en/main/start/tutorial)

* [React Dom](https://legacy.reactjs.org/docs/react-dom.html)
 
* [ViteJs](https://vitejs.dev/guide/)

* [Axios](https://axios-http.com/docs/intro)


## Funcionalidades

- Adicionar novos clientes/agendamentos às suas listas respectivas.
- Edita clientes/agendamentos/ adicionados.
- Remover clientes/agendamentos das respectivas listas.
- Filtrar clientes/agendamentos de acordo com a busca.
- Marcar agendamentos como concluídos.
- Editar as informações de conta (nome, e-mail e senha).

##  Exemplos de uso

* Para adicionar um novo cliente/agendamento à sua lista você deve clicar no botão com icone de + na barra superior da tela e inserir os dados, feito isso é só clicar em salvar e está pronto; caso decida que não quer mais adicionar clique em cancelar.

* Para editar um cliente/agendamento é só clicar no icone de caneta e reescrever os dados que deseja e clicar em salvar; caso decida que não quer mais editar clique em cancelar.

* Para remover um cliente/agendamento basta clicar no icone de lixo.

* Para filtrar clientes/agendamentos basta clicar no input localizado na barra superior e escrever o que dewseja pesquisar, sua busca sera renderizada na tela de acordo com a busca. 

* Para marcar os agendamentos como concluído clique no chackbox do agendamento que desejar.

* Para editar as infomações da conta como nome, e-mail ou senha é só clicar na opção 'Editar Conta' no canto inferior esquerdo e reescrever os dados que deseja e clicar em salvar; caso decida que não quer mais editar clique em cancelar.

### Slides do projeto
Você pode encontrar o material utilizado na apresentação desse projeto por meio desse [link](https://www.canva.com/design/DAFyFxOT7Xk/iJ4C_qura54z2dwkEMqMog/edit?utm_content=DAFyFxOT7Xk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
## LinkedIn Autores

- [@Dayane Bueno](https://www.linkedin.com/in/dayane-stefane/)
- [@Denise Costa](https://www.linkedin.com/in/-denisecosta-/)
- [@Igor Souza](https://www.linkedin.com/in/igor-de-souza-pinto-8407a0207/)
- [@Thaise Araújo](https://www.linkedin.com/in/thaise-araujo-8152751bb/)


## Perfil do GitHub 

| [<img src="https://avatars.githubusercontent.com/u/132092648?v=4" width="100" height="100" style="border-radius:50%;">](https://github.com/Dayane99) | [<img src="https://avatars.githubusercontent.com/u/106042686?v=4" width="100" height="100" style="border-radius:50%;">](https://github.com/DeniCosta) |
|:---:|:---:|
| **@Dayane99** | **@DeniCosta** |
| [<img src="https://avatars.githubusercontent.com/u/98854015?v=4" width="100" height="100" style="border-radius:50%;">](hhttps://github.com/IgorSPinto) | [<img src="https://avatars.githubusercontent.com/u/110508195?v=4" width="100" height="100" style="border-radius:50%;">](https://github.com/thayse342) |
| **@IgorSPinto** | **@thayse342** |
