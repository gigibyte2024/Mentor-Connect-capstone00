🧠 Mentor Connect — Capstone Project

A mentorship platform connecting students with mentors, offering learning resources, quizzes, messaging, and profile management.

🚀 Live Links

🔹 Frontend (Vercel): https://mentor-connect-capstone00.vercel.app

🔹 Backend (Render): https://mentor-connect-capstone00.onrender.com

📌 Project Overview

Mentor Connect is a full-stack web application that allows students to discover mentors, access study resources, take quizzes, and communicate through chat. Mentors can manage their profiles and upload resources.

This system includes complete CRUD operations, authentication, protected routes, Prisma ORM, and PostgreSQL.

🛠️ Tech Stack
Frontend

React.js

React Router

Axios

CSS (Custom UI)

Backend

Node.js

Express.js

Prisma ORM

JWT Authentication

PostgreSQL (NeonDB)

Render (Hosting)

🔐 Authentication & Authorization

JWT-based auth

Login / Signup for Users

Role-based access: student or mentor

Protected routes using middleware

🧩 Features
👤 1. User Module (Full CRUD)

Create (Signup)

Read profile /me

Update profile

Delete account

🧑‍🏫 2. Mentor Module (Full CRUD)

Get mentor list

Get mentor by ID

Update mentor profile

Delete mentor

📚 3. Resource Module (Full CRUD)

Add resource

Get all mentor resources

Update resource

Delete resource

📝 4. Quiz Module

Take timed quizzes

Submit quiz scores

Leaderboard integration ready

💬 5. Chat System

User-to-mentor messaging

Real-time UI

Stored chat history

🗄️ Database Schema (Prisma)
model User {
  id         Int       @id @default(autoincrement())
  name       String
  email      String    @unique
  password   String
  role       String

  mentor           Mentor?
  quizzes          QuizScore[]
  sentMessages     Chat[] @relation("SentMessages")
  receivedMessages Chat[] @relation("ReceivedMessages")
}

model Mentor {
  id          Int        @id @default(autoincrement())
  userId      Int        @unique
  user        User       @relation(fields: [userId], references: [id])
  skills      String
  experience  String
  rating      Float      @default(0)
  resources   Resource[]
}

model Resource {
  id        Int       @id @default(autoincrement())
  title     String
  desc      String
  fileUrl   String
  category  String
  mentorId  Int
  mentor    Mentor    @relation(fields: [mentorId], references: [id])
}

model QuizScore {
  id       Int      @id @default(autoincrement())
  userId   Int
  score    Int
  topic    String
  user     User     @relation(fields: [userId], references: [id])
}

model Chat {
  id         Int      @id @default(autoincrement())
  senderId   Int
  receiverId Int
  message    String
  timestamp  DateTime @default(now())

  sender     User     @relation("SentMessages", fields: [senderId], references: [id])
  receiver   User     @relation("ReceivedMessages", fields: [receiverId], references: [id])
}

▶️ Running the project locally
Backend
cd backend
npm install
npx prisma generate
npm start

Frontend
cd frontend
npm install
npm run dev

📦 Folder Structure
MENTOR-CONNECT
 ├── backend
 │   ├── src
 │   │   ├── controllers
 │   │   ├── middleware
 │   │   ├── routes
 │   │   └── server.js
 │   ├── prisma
 │   └── package.json
 ├── frontend
 │   ├── src
 │   ├── public
 │   └── package.json
 └── README.md

🧪 CRUD Endpoints Summary
Users
POST /api/auth/signup
POST /api/auth/login
GET /api/users/me
PUT /api/users/update
DELETE /api/users/delete

Mentors
GET /api/mentors
GET /api/mentors/:id
PUT /api/mentors/me
DELETE /api/mentors/me

Resources
POST /api/resources
GET /api/resources
PUT /api/resources/:id
DELETE /api/resources/:id

Quizzes
GET /api/quiz
GET /api/quiz/:id
POST /api/quiz/submit
