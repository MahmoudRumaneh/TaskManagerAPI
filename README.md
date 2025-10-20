🧠 Task Manager API
===================

A clean and modular NestJS + PostgreSQL backend for managing users and their tasks. 
Includes JWT authentication, validation, and Swagger documentation.

------------------------------------------------------------

⚙️ Setup Instructions
---------------------

1. Clone the repository and navigate into it:
   git clone https://github.com/MahmoudRumaneh/TaskManagerAPI
   cd task-manager-api

2. Install all dependencies:
   npm install

3. Create a .env file in the root directory (you can copy from .env.example if provided):
   cp .env.example .env

4. Make sure PostgreSQL is installed and running, then create the database:
   createdb task_manager

5. Start the application in development mode:
   npm run start:dev

6. Once it starts, the API will be available at:
   http://localhost:3000

7. Access the automatically generated Swagger documentation at:
   http://localhost:3000/api/docs

------------------------------------------------------------

🧩 Tech Stack
-------------
- NestJS (TypeScript)
- PostgreSQL + TypeORM
- JWT Authentication
- Swagger (OpenAPI)
- dotenv for environment variables

------------------------------------------------------------

🤝 Author
---------
Mahmoud Rumaneh  
Email: mahmoudrmn@gmail.com
