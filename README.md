# 📡 web-scrapper
**Technical Test for Stack Builders**  
Fullstack project that scrapes Hacker News using Puppeteer and displays results in a React frontend with filters and search capabilities.

---

## ✨ Features
- Scrapes Hacker News entries (title, points, comments) with Puppeteer.  
- Backend in **Node.js + Express**, serving a clean JSON API.  
- Frontend in **React + Vite + TailwindCSS**, with:
  - 📌 Filter by title length (All / >5 words / <5 words).  
  - 🔍 Search bar for quick filtering.  
  - ⏳ Loading spinner with Lucide icons.  
- Clean, modular, reusable components.  

---

## 🛠 Tech Stack
**Backend**  
- Node.js  
- Express.js  
- Puppeteer  

**Frontend**  
- React (Vite)  
- TailwindCSS  
- Lucide Icons 

---

## 📂 Project Structure
```
backend/   → Node.js + Puppeteer backend
frontend/  → React + Vite frontend
```
<details>
  <summary>Full tree</summary>

```bash
├── backend/
│   ├── src/
│   │   ├── utils/scraper.js (Scrapping Function usin Puppeteer)
│   │   └── app.js (Main Express Backend File)
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/ (UI components)
│   │   ├── services/ (API calls)
│   │   ├── utils/ (helpers)
│   │   └── App.jsx
│   ├── package.json
│   └── .env.example
```
</details>

---

## ⚙️ Installation
Clone the repo and install dependencies in both backend and frontend:  
it
```bash
git clone https://github.com/DevWilfredo/web-scrapper.git
cd web-scrapper

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

Copy `.env.example` into `.env` in both backend and frontend and configure accordingly.

```bash
# Backend enviroment variables
FRONTEND_URL=http://localhost:5173
PORT=3000

# Frontend enviroment variables
VITE_BACKEND_URL = http://localhost:3000/api/v1
```


## 🚀 Running Locally
### Backend
```bash
cd backend
npm run start
```

### Frontend
```bash
cd frontend
npm run dev
```

The app will be available at:  
👉 Frontend: `http://localhost:5173`  
👉 Backend API: `http://localhost:3000/api/v1/entries`  

---

## 📜 License
This project is licensed under the MIT License.  
See [LICENSE](./LICENSE) for more details.
