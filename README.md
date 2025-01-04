# FOREVER: ECOMMERCE STORE

### Overview of WebSite:

![image](https://github.com/user-attachments/assets/9d5b6f4f-2ab0-4811-8002-9f725f79d688)
<h1 align="center">User Panel</h1>

![image](https://github.com/user-attachments/assets/a522154d-758d-4282-a2b9-468de5043323)
<h1 align="center">Admin Panel</h1>


### Some Features:

- 🌟 Tech stack: MERN
- 🎃 Authentication && Authorization with JWT
- 🐞 Error handling both on the server and on the client
- 🔗 Admin Panel For Product delivery updating only for Admin
- Two types of payment integration Cash on delivery and stripe

### Technology stack

- bcrypt
- cors
- dotenv
- jsonwebtoken
- multer
- validator
- axios
- react-toastify
- cloudinary
- stripe


`=> You can Generate JWT_SECRET by using this command : "openssl rand -base64 32", run this command on gitbash terminal`
## 🤸 Quick Start

Follow these steps to set up the project locally on your machine.

**Cloning the Repository**

```bash
git clone https://github.com/jaychavada01/Forever-Ecommerce-Store
cd Forever-Ecommerce-Store
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

### Setup .env file

```env
* Frontend && Admin :
VITE_BACKEND_URL = ...

* Backend :
PORT=...
MONGODB_URL=...
CLOUDINARY_API_KEY=...
CLOUDINARY_SECRET_KEY=...
CLOUDINARY_NAME=...
JWT_SECRET=...
ADMIN_EMAIL=...
ADMIN_PASSWORD=...
STRIPE_SECRET_KEY = ...
```

`Backend is Running on Port: 4000 & Frontend is Running on Port: 3000 & Admin Panel is running on Port: 3001`

```bash
--- Backend: npm run server
--- Frontend and Admin panel: npm run dev
```
