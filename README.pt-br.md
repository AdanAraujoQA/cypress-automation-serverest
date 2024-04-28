# **cypress-automation-serverest**

Introdução ao Projeto de Automação no GitHub Olá a todos! Estou muito animado para apresentar nosso novo projeto de automação que está hospedado no GitHub. Este projeto é um plano de teste e um projeto de automação para o site ServeRest usado para treinar técnicas de teste de software.

**Sobre o Projeto**
 Este projeto é uma iniciativa para automatizar um site específico com o objetivo de treinar técnicas de teste de software. O site em questão é uma plataforma complexa com várias funcionalidades, tornando-o um excelente candidato para a prática de técnicas de teste.

**Plano de Teste**
O plano de teste é uma parte crucial deste projeto. Ele define a estratégia que será seguida durante a fase de teste e inclui detalhes sobre o que será testado, como será testado, quem realizará os testes e em que ambiente os testes serão conduzidos.

-[**Link do plano de teste:**](https://docs.google.com/document/d/1Ft_UKhrokauGOt_TXqT8xtt5NQXgYrQopkjrFm4rwE4/edit?usp=sharing)

**Automação**
A automação é uma parte essencial deste projeto. Ela nos permite realizar testes de forma mais eficiente e eficaz, economizando tempo e recursos. A automação também ajuda a evitar erros humanos que podem ocorrer durante o processo de teste. É por isso que estou fazendo este projeto usando o framework de automação Cypress (No arquivo do Plano de Teste tem uma justificativa para a escolha deste framework).

**Treinamento**
Este projeto também serve como uma plataforma de treinamento para aqueles que estão interessados em aprender e aprimorar suas habilidades de teste de software. Ele oferece uma oportunidade única para os aprendizes se familiarizarem com várias técnicas de teste e ferramentas de automação em um ambiente realista.

Estamos ansiosos para ver como este projeto evoluirá e como ele ajudará a comunidade de teste de software a crescer e se desenvolver. Sinta-se à vontade para contribuir e fazer parte desta emocionante jornada!

**Aqui está um guia geral de como você pode contribuir:**

**Fork o Repositório:** O primeiro passo é criar uma cópia do projeto em sua própria conta do GitHub. Isso pode ser feito clicando no botão 'Fork' na página do projeto no GitHub.

**Clone o Repositório:** Uma vez que você tenha feito o fork do repositório, você pode cloná-lo para sua máquina local usando o Git. Isso permite que você trabalhe no projeto localmente.

**Crie uma Nova Branch:** É uma boa prática criar uma nova branch para cada nova funcionalidade ou correção de bug em que você está trabalhando. Isso mantém suas alterações organizadas e separadas do projeto principal.

**Faça Suas Alterações:** Agora você pode começar a fazer alterações no projeto. Isso pode envolver a adição de novas funcionalidades, correção de bugs, melhoria da documentação, etc.

**Commit Suas Alterações:** Depois de ter feito suas alterações, você precisa commitá-las para o seu repositório local. Certifique-se de escrever uma mensagem de commit clara e descritiva.

**Push Suas Alterações:** Uma vez que você tenha commitado suas alterações, você pode fazer o push delas para o seu repositório forked no GitHub.

**Submeta um Pull Request:** O passo final é submeter um pull request (PR) para o repositório original. Isso permite que os mantenedores do projeto revisem suas alterações. Se eles aprovarem suas alterações, eles as mesclarão no projeto principal.

💢Uso e exemplos: forneça código de amostra ou cenários de uso para mostrar como o projeto funciona. 💢Detalhes de configuração: se aplicável, inclua quaisquer definições de configuração ou variáveis ​​de ambiente. 💢Diretrizes de contribuição: você pode incentivar a colaboração descrevendo como outras pessoas podem contribuir para o projeto.

**Links relevantes:** https://github.com/ServeRest/ServeRest

**Cypress** 
Cypress é uma ferramenta de teste de front-end de próxima geração construída para a web moderna. Para o dojo que vamos fazer, você precisa instalar primeiro e depois começamos! Instale o Cypress para Mac, Linux ou Windows e depois comece.

**INSTALAÇÃO**

`npm install cypress --save-dev`

ou

`yarn add cypress --dev`

ou

`pnpm add cypress --save-dev`

Isso instalará o Cypress localmente como uma dependência de desenvolvimento para o seu projeto.

OBS: Certifique-se de que você tem o Node.js instalado e que já executou o npm init ou tem uma pasta node_modules ou um arquivo package.json na raiz do seu projeto para garantir que o cypress seja instalado no diretório correto.

**MELHOR PRÁTICA**

A abordagem recomendada é instalar o Cypress com npm porque: Cypress é versionado como qualquer outra dependência. Simplifica a execução do Cypress em Integração Contínua.

**NÃO USANDO NODE OU GERENCIADOR DE PACOTES**

Se você não está usando Node ou um gerenciador de pacotes (npm, pnpm ou Yarn) em seu projeto ou quer experimentar o Cypress rapidamente, você sempre pode baixar o Cypress diretamente do nosso link(https://download.cypress.io/desktop).

O download direto sempre pegará a versão mais recente disponível. Sua plataforma será detectada automaticamente. Então você pode descompactar manualmente e dar um duplo clique. O Cypress será executado sem a necessidade de instalar quaisquer dependências.

**PRÉ-REQUISITOS DO LINUX**
Se você está usando Linux, vai querer ter as dependências necessárias instaladas em seu sistema.

(Ubuntu/Debian)

`apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb`
(Arch)

`pacman -S gtk2 gtk3 alsa-lib xorg-server-xvfb libxss nss libnotify`
(CentOS)

`yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib`
(Amazon Linux 2023)

`dnf install -y xorg-x11-server-Xvfb gtk3-devel nss alsa-lib`

**ABRINDO CYPRESS**

cypress open Você pode abrir o Cypress a partir da raiz do seu projeto de uma das seguintes maneiras:

Usando `npx`

`npx cypress open`

Usando yarn

`yarn run cypress open`


Após um momento, o Cypress Launchpad será aberto.

