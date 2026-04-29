<h1 align="center">Tasker - Lista de Tarefas</h1>

<p align="center">
  Aplicação fullstack moderna de gerenciamento de tarefas com autenticação JWT, controle de usuários e interface responsiva.<br />
  Desenvolvida com <strong>React + TypeScript</strong> no frontend e <strong>FastAPI (Python)</strong> no backend.
</p>

---

## 🖥️ Preview da Interface (V.01)

<p align="center">
  <img src="https://github.com/user-attachments/assets/37e6567c-1fda-4f17-8fd4-98d5209855a9" width="82%" />
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/9c550fff-0d5c-4438-a65a-1f38eac476e6" width="82%" />
</p>

---

## ⚙️ Tecnologias Utilizadas

### Frontend
- React.js
- TypeScript
- Shadcn
- Tailwind CSS
- React Router (TanStack Router)
- React Query (TanStack Query)
- Axios

### Backend
- FastAPI (Python)
- SQLModel / SQLAlchemy
- JWT Authentication
- Pydantic
- Uvicorn

### Banco de Dados
- PostgreSQL

---

## 🚀 Funcionalidades

- 🔐 Autenticação com JWT (Login e Registro)
- 👤 Sistema de usuários
- 📝 Criação, listagem e gerenciamento de tarefas
- ✅ Marcar tarefas como concluídas
- 🗑️ Exclusão de tarefas
- 📊 Controle de prioridade (low, medium, high)
- 🔒 Rotas protegidas por token
- ⚡ Interface moderna, responsiva e intuitiva

---

## 🔐 Autenticação

O sistema utiliza **JWT (JSON Web Token)**:

- Login retorna um token de acesso
- Token é armazenado no `localStorage`
- Requests autenticadas via header:

```http
Authorization: Bearer <token>
