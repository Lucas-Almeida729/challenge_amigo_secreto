# Sorteador de Amigo Secreto 🎅🎁

Este é um projeto criado com muito carinho para resolver um problema clássico de final de ano: a organização do **Amigo Secreto**! Chega de papéis amassados, sorteios repetidos e o risco de alguém tirar a si mesmo.

Esta aplicação web, construída com JavaScript puro, oferece uma solução simples, elegante e totalmente funcional para adicionar participantes, realizar o sorteio de forma justa e reiniciar o processo com um único clique. O foco foi criar uma experiência de usuário limpa e uma lógica de programação robusta e bem explicada.

---

## 🔗 Deploy do Projeto (Vercel)

Este projeto foi implantado e está disponível para uso no link abaixo. Experimente!

[**Clique aqui para ver o projeto no ar!**](https://challenge-amigo-secreto-delta-lemon.vercel.app/)

---

## ✨ Funcionalidades Principais

* **Adição de Participantes:** Adicione quantos amigos quiser à lista.
* **Validação Inteligente:** O sistema impede a adição de nomes em branco ou duplicados.
* **Remoção Individual:** Removeu alguém por engano? Basta clicar no "X" para retirá-lo da lista.
* **Sorteio Justo:** A lógica garante que ninguém tire a si mesmo, com um algoritmo de embaralhamento que tenta múltiplas vezes até encontrar uma combinação válida.
* **Feedback ao Usuário:** Alertas informam sobre a necessidade de ter pelo menos 3 participantes para o sorteio.
* **Reinício Fácil:** Sempre que remover ou adicionar algum nome após o sorteio, a aplicação é zerada, pronta para um novo grupo de amigos.
* **Design Responsivo:** O layout se adapta bem a diferentes tamanhos de tela.

---

## 📸 Demonstração em Ação

Nada melhor do que ver o projeto em ação! O GIF abaixo demonstra o fluxo completo de uso da aplicação.

<img src="/img/01.gif">


---

## 🚀 Como Utilizar a Aplicação

Utilizar o sorteador é extremamente simples e intuitivo. Siga os passos abaixo:

1.  **Adicione os Nomes**
    * No campo "Digite um nome", insira o nome de um participante.
    * Clique no botão **"Adicionar"** ou pressione a tecla **"Enter"**.
    * Repita o processo para todos os amigos que participarão. Os nomes aparecerão na lista de "Participantes".

2.  **Realize o Sorteio**
    * Após adicionar **pelo menos 3 amigos**, o botão **"Sortear amigo"** estará pronto para uso.
    * Clique nele e o resultado do sorteio aparecerá instantaneamente na seção "Resultado do Sorteio".

3.  **Comece um Novo Sorteio**
    * Para começar uma nova brincadeira, exclua os nomes e clique no botão **"Sortear amigo"**. A aplicação será reiniciada.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as tecnologias fundamentais da web, com foco em uma implementação limpa e sem a necessidade de frameworks.

* **HTML5:** Para a estrutura semântica da página.
* **CSS3:** Para a estilização, layout e design responsivo.
* **JavaScript (ES6+):** Para toda a lógica de programação, manipulação do DOM e interatividade.

---

## 💻 Como Rodar o Projeto Localmente

Se você quiser rodar este projeto na sua própria máquina, basta seguir os passos abaixo:

1.  **Clone o repositório:**

    ```bash
    git clone [https://github.com/Lucas-Almeida729/challenge_amigo_secreto.git]
    ```

2.  **Abra o arquivo `index.html`:**
    * Navegue até a pasta do projeto e abra o arquivo `index.html` no seu navegador de preferência. Não é necessário nenhum servidor local, pois o projeto é totalmente client-side.

---

*Este projeto foi desenvolvido como um exercício prático para fortalecer habilidades em lógica de programação e manipulação do DOM com JavaScript.*