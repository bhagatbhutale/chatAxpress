
# 🤖 AI Chatbot — Full Stack Gemini AI Application

A modern **Full Stack AI Chatbot Web Application** powered by the **Google Gemini API**.
Users can interact with an AI assistant through a clean and responsive chat interface with real-time AI-generated responses.

## 🚀 Features

* 🤖 AI-powered conversations using Google Gemini API
* 💬 Real-time chat experience
* 🔐 User authentication
* 👤 User-specific conversations
* 💾 Chat history persistence
* 📱 Responsive design for desktop and mobile
* ⚡ Fast and optimized API communication
* 🛡️ Environment-based API key management
* 🔄 Loading and error states
* 🗑️ Conversation management
* 🎨 Modern and responsive UI

## 🛠️ Tech Stack

### Frontend

* React.js
* JavaScript
* Tailwind CSS
* Axios / Fetch API
* React Router

### Backend

* Node.js
* Express.js
* REST API
* Google Gemini API

### Database

* MongoDB
* Mongoose

### Authentication & Security

* JWT Authentication
* HTTP-only Cookies
* Environment Variables
* Protected API Routes

### Deployment

* Vercel
* Render / Railway
* MongoDB Atlas

## 🏗️ Application Architecture

```text
User
 │
 ▼
React Frontend
 │
 │ HTTP Requests
 ▼
Node.js + Express Backend
 │
 ├── Authentication
 │
 ├── Chat API
 │
 ├── Conversation Management
 │
 ▼
Google Gemini API
 │
 ▼
AI Generated Response
 │
 ▼
Frontend
```

## 📂 Project Structure

```text
AI-Chatbot/
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .env.example
├── .gitignore
└── README.md
```

> Update the folder structure above according to your actual project structure.

## ⚙️ Environment Variables

## 💻 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Install backend dependencies

```bash
cd ../server
npm install
```

### 4. Configure environment variables

Create a `.env` file and add your:

* MongoDB connection string
* JWT secret
* Gemini API key

### 5. Start the backend

```bash
npm run dev
```

### 6. Start the frontend

```bash
cd ../client
npm run dev
```

The application will now be available locally.

## 🔑 Gemini API Integration

The application uses the **Google Gemini API** to generate AI responses.

The basic request flow is:

```text
User sends message
        ↓
Frontend
        ↓
Backend API
        ↓
Gemini API
        ↓
AI Response
        ↓
Backend
        ↓
Frontend
```

The Gemini API key is stored securely on the backend using environment variables.

## 🔒 Security

* API keys are stored in environment variables
* Sensitive credentials are excluded using `.gitignore`
* Protected routes require authentication
* User data is isolated between accounts
* Backend handles communication with the Gemini API

## 📸 Screenshots

Add screenshots of your application here:

```text
screenshots/
├── home.png
├── chat.png
├── login.png
└── dashboard.png
```

Example:

![Chat Interface](./screenshots/chat.png)

## 🌐 Live Demo

**Live Demo:** Add your deployed application URL here.

**GitHub Repository:** Add your GitHub repository URL here.

## 🔮 Future Improvements

* [ ] Streaming AI responses
* [ ] Markdown support for AI responses
* [ ] Code syntax highlighting
* [ ] Multiple AI models
* [ ] Voice input
* [ ] File upload and document analysis
* [ ] Image generation
* [ ] Conversation search
* [ ] Dark/Light theme
* [ ] AI conversation export
* [ ] Rate limiting and usage tracking

## 📚 What I Learned

While building this project, I gained practical experience with:

* Full Stack application architecture
* REST API development
* AI API integration
* Gemini API
* Authentication and authorization
* Database design
* Frontend-backend communication
* Environment variable management
* Error handling
* Production deployment

## 👨‍💻 Author

**Bhagat N. Bhutale**

Full Stack / MERN Developer

* GitHub: `https://github.com/bhagatbhutale`
* LinkedIn: `https://www.linkedin.com/in/bhagat-bhutale`
* Portfolio: `https://bhagatbhutale.vercel.app`

---

⭐ If you found this project useful, consider giving it a star!
