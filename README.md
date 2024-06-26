[![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/jonatasemidio/multilanguage-readme-pattern/blob/master/README.md)
[![pt-br](https://img.shields.io/badge/lang-pt--br-green.svg)](https://github.com/4dan1/cypress-automation-serverest/blob/main/README.pt-br.md)
[![Static Badge](https://img.shields.io/badge/DocumentationPtBr-green)](https://docs.google.com/document/d/1Ft_UKhrokauGOt_TXqT8xtt5NQXgYrQopkjrFm4rwE4/edit?usp=sharing)
[![Static Badge](https://img.shields.io/badge/DocumentationEN-red)](https://docs.google.com/document/d/17UI-bSykc_EDUbPMcCSsUH5SdL0l-VWZo0EE8JQOybg/edit?usp=sharing)

# cypress-automation-serverest
Hello everyone! I’m very excited to introduce our new automation project that is hosted on GitHub. This project is a test plan and an automation project for the ServeRest website used to train software testing techniques.

# **About the Project**
This project is an initiative to automate a specific website with the aim of training software testing techniques. The website in question is a complex platform with various functionalities, making it an excellent candidate for practicing testing techniques.

# **Test Plan**
The test plan is a crucial part of this project. It defines the strategy that will be followed during the testing phase and includes details about what will be tested, how it will be tested, who will perform the tests, and in what environment the tests will be conducted.


-**Test plan link:** https://docs.google.com/document/d/1Ft_UKhrokauGOt_TXqT8xtt5NQXgYrQopkjrFm4rwE4/edit?usp=sharing

# **Automation**
Automation is an essential part of this project. It allows us to perform tests more efficiently and effectively, saving time and resources. Automation also helps to avoid human errors that can occur during the testing process. That's why i doing this project using the **automation framework Cypress**(*In the Test plan file have a justify for the choose of this framewokrk*).

# **Training**
This project also serves as a training platform for those who are interested in learning and enhancing their software testing skills. It offers a unique opportunity for learners to familiarize themselves with various testing techniques and automation tools in a realistic environment.

We are looking forward to seeing how this project will evolve and how it will help the software testing community to grow and develop. Feel free to contribute and be a part of this exciting journey!



# **Here’s a general guide on how you can contribute:**


**Fork the Repository**: The first step is to create a copy of the project on your own GitHub account. This can be done by clicking the ‘Fork’ button on the project’s GitHub page.

**Clone the Repository:** Once you have forked the repository, you can clone it to your local machine using Git. This allows you to work on the project locally.

**Create a New Branch:** It’s a good practice to create a new branch for each new feature or bug fix you’re working on. This keeps your changes organized and separated from the main project.

**Make Your Changes:** Now you can start making changes to the project. This could involve adding new features, fixing bugs, improving documentation, etc.

**Commit Your Changes:** After you’ve made your changes, you need to commit them to your local repository. Make sure to write a clear and descriptive commit message.

**Push Your Changes:** Once you’ve committed your changes, you can push them to your forked repository on GitHub.

**Submit a Pull Request:** The final step is to submit a pull request (PR) to the original repository. This allows the project maintainers to review your changes. If they approve your changes, they will merge them into the main project.

💢Uso e exemplos:
forneça código de amostra ou cenários de uso para mostrar como o projeto funciona.
💢Detalhes de configuração:
se aplicável, inclua quaisquer definições de configuração ou variáveis ​​de ambiente.
💢Diretrizes de contribuição:
você pode incentivar a colaboração descrevendo como outras pessoas podem contribuir para o projeto.

# **Relevant links:**
**SERVEREST DOCUMENTATION**
https://github.com/ServeRest/ServeRest



# **Cypress**
Cypress is a next generation front end testing tool built for the modern web. For the dojo we going to do you need install first then we start ! 
Install Cypress for Mac, Linux, or Windows, then get started.



# **INSTALLATION**

**npm install cypress --save-dev**

or

**yarn add cypress --dev**

or

**pnpm add cypress --save-dev**

This will install Cypress locally as a dev dependency for your project.

**OBS:Make sure you have Node.js installed and that you have already run npm init or have a node_modules folder or package.json file in the root of your project to ensure cypress is installed in the correct directory**.



# **BEST PRACTICE**

The recommended approach is to install Cypress with npm because:
Cypress is versioned like any other dependency.
It simplifies running Cypress in Continuous Integration.



# **NOT USING NODE OR PACKAGE MANAGER** 



If you're not using Node or a package manager (npm, pnpm or Yarn) in your project or you want to try Cypress out quickly, you can always download Cypress directly from our link(https://download.cypress.io/desktop).

The direct download will always grab the latest available version. Your platform will be detected automatically.
Then you can manually unzip and double click. Cypress will run without needing to install any dependencies.



# **LINUX PREREQUISITES**



If you're using Linux, you'll want to have the required dependencies installed on your system.

**(Ubuntu/Debian)**

`apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb`

**(Arch)**

`pacman -S gtk2 gtk3 alsa-lib xorg-server-xvfb libxss nss libnotify`


**(CentOS)**

`yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib`



**(Amazon Linux 2023)**

`dnf install -y xorg-x11-server-Xvfb gtk3-devel nss alsa-lib`



# **OPENING CYPRESS**

`cypress open`
You can open Cypress from your project root one of the following ways:

**Using** `npx`

`npx cypress open`

**Using** `yarn`

`yarn run cypress open`

After a moment, the Cypress Launchpad will open.
