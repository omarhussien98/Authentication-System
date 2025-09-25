<img width="844" height="575" alt="Login" src="https://github.com/user-attachments/assets/9b303d0a-02ee-433e-adc3-b949741c95ee" />



<img width="844" height="575" alt="Register" src="https://github.com/user-attachments/assets/fe7c6362-18a0-4e1f-90bf-d0cd3af44a9a" />

# 🔐 Authentication System

A modern frontend authentication system with responsive design.

## ✨ Features
- User Login & Registration
- Responsive Design
- Real-time Validation
- Clean UI/UX

## 🛠 Prerequisites

Before running the project, make sure you have the following installed on your machine:

- **Modern Browser** such as Google Chrome, Firefox, or Microsoft Edge.  
- **Code Editor** (optional for editing the code) like VS Code.  
- **Simple Local Server** to preview the project (optional):  
  - You can use the **Live Server** extension in VS Code.  
  - Or install `http-server` via npm:  
    ```bash
    npm install -g http-server
    ```

> 💡 If you want to run the back-end part of the project, you will also need:  
- [Node.js](https://nodejs.org/) installed (v14 or higher).  
- npm (comes with Node.js).  
- A `.env` file configured if required by the back-end project.

## 🛠 Tech Stack
- HTML5, CSS3, JavaScript
- React.js
- Context API

##  Live Demo
[View Project Here](https://omarhussien98.github.io/Authentication-System/)

# Back-End Repository
- GitHub Repo: [Authentication-System-Back-End](https://github.com/omarhussien98/Authentication-System-back-end/)
-------------------------------------------
## 🚀 Getting Started (Front-End + Back-End)

Follow these steps to run both parts locally.

1. **Clone both repositories**
   ```bash
   git clone [Front-End Repo](https://github.com/omarhussien98/Authentication-System/)
   git clone [Back-End Repo](https://github.com/omarhussien98/Authentication-System-back-end)

   ```

2. **Configure & run the Back-End**
   ```bash
   cd Authentication-System-back-end
   npm install
   # if there's an example env file:
   # cp .env.example .env
   # Edit .env and add required variables (e.g., DATABASE_URL, JWT_SECRET)
   npm start
   ```
   - Make sure the server is running (e.g., `http://localhost:5000`).

3. **Run the Front-End**
   ```bash
   cd ../Authentication-System
   # Option A: open index.html directly in your browser
   # Option B (recommended): use a local server (Live Server in VS Code or http-server)
   http-server . -p 8080
   # then open: http://localhost:8080
   ```

4. **Quick notes**
   - Ensure the front-end points to the correct back-end base URL (update `config.js`, `api.js`, or the relevant variable in the front-end code if needed).  
   - If the back-end runs on a different port/domain, ensure CORS is enabled on the server.  
   - For production or CI, include any build steps here (if applicable).
