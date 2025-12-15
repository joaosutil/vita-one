# 🌐 VITA.ONE - 3D Life Dashboard

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

> Um painel de controle interativo e imersivo para visualização e gerenciamento de áreas vitais, construído com tecnologias web modernas e renderização 3D em tempo real.

---

## 📖 Sobre o Projeto

O **VITA.ONE** é uma aplicação web experimental que transforma dados abstratos de "equilíbrio de vida" em uma experiência visual 3D. O objetivo é permitir que o usuário visualize o estado de quatro pilares fundamentais (Saúde, Trabalho, Finanças e Pessoal) através de esferas reativas que mudam de cor, tamanho e comportamento baseadas em métricas de **Tempo**, **Energia** e **Satisfação**.

A aplicação conta com persistência de dados local, garantindo que o progresso do usuário seja salvo automaticamente.

## ✨ Funcionalidades Principais

* **Visualização 3D Reativa**: 4 Esferas independentes renderizadas com *React Three Fiber*.
    * **Tamanho**: Reage ao tempo investido.
    * **Rotação**: Acelera conforme o gasto de energia.
    * **Cor**: Indica o nível de satisfação (Vermelho/Amarelo/Verde).
* **Ambiente Imersivo**: Cenário espacial com estrelas, iluminação dinâmica e efeitos de pós-processamento.
* **Gerenciamento de Estado Global**: Controle centralizado via *Zustand*, com separação lógica por áreas.
* **Persistência de Dados**: Sistema de salvamento automático no *LocalStorage* do navegador.
* **Diagnóstico Inteligente**: Algoritmo que analisa os inputs e fornece feedback textual sobre o estado atual (ex: Risco de Burnout, Estado de Fluxo).
* **Interface Futurista**: UI flutuante (Overlay) estilizada com *Tailwind CSS* e efeitos de vidro (glassmorphism).

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as melhores práticas do ecossistema React moderno:

* **[Next.js 15](https://nextjs.org/)**: Framework React para produção.
* **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)**: Renderizador Three.js para React.
* **[Drei](https://github.com/pmndrs/drei)**: Coleção de auxiliares e abstrações para R3F (Texto 3D, Estrelas, Grid).
* **[Tailwind CSS v4](https://tailwindcss.com/)**: Estilização utilitária e responsiva.
* **[Zustand](https://github.com/pmndrs/zustand)**: Gerenciamento de estado leve e escalável.
* **TypeScript**: Tipagem estática para maior segurança e manutenibilidade do código.

## 🚀 Como Executar o Projeto

Pré-requisitos: Node.js instalado.

1.  **Clone o repositório**
    ```bash
    git clone [https://github.com/joaosutil/vita-one.git](https://github.com/joaosutil/vita-one.git)
    cd vita-one
    ```

2.  **Instale as dependências**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Inicie o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```

4.  **Acesse no navegador**
    Abra [http://localhost:3000](http://localhost:3000) para ver o projeto rodando.

## 📂 Estrutura do Projeto

 ```vita-one/ ├── app/ │ ├── components/ │ │ └── Overlay.tsx # Interface de UI (Sliders e Abas) │ ├── store/ │ │ └── useStore.ts # Gerenciamento de Estado (Zustand) │ ├── globals.css # Estilos globais e Tailwind │ ├── layout.tsx # Layout raiz │ └── page.tsx # Cena 3D Principal (Canvas) ├── public/ # Assets estáticos └── ...arquivos de config ```

## 🔮 Futuras Melhorias

* [ ] Adicionar efeitos de *Bloom* (brilho neon) nas esferas.
* [ ] Implementar sistema de gamificação (XP e Níveis).
* [ ] Criar conta de usuário para salvamento na nuvem.
* [ ] Modo VR (Realidade Virtual).

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📝 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com 💜 por [Master]