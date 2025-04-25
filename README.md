# 🚗 MotorMatch – Capstone Project ⚡

## 🧠 Project Idea
MotorMatch is a Customer-to-Customer (C2C) vehicle-selling platform that connects buyers directly with sellers — completely eliminating third-party intermediaries or dealers. The goal is to build a secure, easy-to-use full-stack web app where individuals can list, browse, and buy vehicles while communicating directly with each other.

---

## 🔑 Key Features:
- **JWT-based user authentication**
- **Seller dashboard** to manage vehicle listings
- **Search and filtering** for buyers
- **Direct in-app messaging** between buyers and sellers
- **Wishlist, ratings, and reviews**
- No admin approval or dealer involvement — 100% peer-to-peer

---

## 🔧 Tech Stack

| **Tech**          | **Purpose**                     |
|--------------------|---------------------------------|
| React + Vite       | Frontend (Single Page App)     |
| Node.js + Express  | Backend API                    |
| MongoDB            | Database                       |
| JWT + Cookies      | Authentication                 |
| Axios              | API Requests                  |
| Render/Vercel      | Deployment                     |

---

## 📆 Week 1 Plan: Planning & Setup

| **Day** | **Task**                                                                 |
|---------|---------------------------------------------------------------------------|
| Day 1   | Finalized idea, name, and key features                                   |
| Day 2   | Researched OLX & Facebook Marketplace for UX/UI inspiration              |
| Day 3   | Initialized frontend (React + Vite)                                      |
| Day 4   | Initialized backend (Node.js + Express + MongoDB) and tested connection  |
| Day 5   | Built Login and Signup pages (frontend UI)                               |
| Day 6   | Reviewed and tested all progress done so far                             |
| Day 7   | Connected Login/Signup to backend API using Axios + cookies              |

---

## 📌 Status

### ✅ Week 1: Completed – Setup & Initial Development
- Initialized both frontend and backend
- Built Login and Signup pages
- Reviewed Week 1 progress
- Connected first GET API
- Completed route setup

### ⬜️ Week 2: Authentication Logic
- Implement JWT-based authentication
- Add protected routes for logged-in users
- Implement Forgot Password and Reset Password functionality

### ⬜️ Week 3: Listings
- Build Seller Dashboard for managing vehicle listings
- Add search and filtering functionality for buyers
- Display featured listings on the home page

### ⬜️ Week 4: Messaging
- Implement direct in-app messaging between buyers and sellers
- Add notifications for new messages

### ⬜️ Week 5: Deployment
- Deploy the application to Render/Vercel
- Test the deployed app for bugs and performance issues

---

## ✅ Proof of Work Tracking – GitHub Projects
We are tracking daily tasks and milestone progress using GitHub Projects (Table View). Each day is logged as a separate item in the project tracker, including:
- **Title**
- **Day**
- **Description**
- **Status**

At least 10 entries spanning 10+ days are created and updated daily. Concepts implemented are described clearly in each row. All project progress is transparently tracked here.

---

## 🚀 How to Run the Project

### Prerequisites:
- Node.js and npm installed
- MongoDB instance running locally or in the cloud
- `.env` file configured with the following:
  ```plaintext
  db_uri=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret