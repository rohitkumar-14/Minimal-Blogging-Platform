# Minimal Blogging Platform


https://github.com/user-attachments/assets/deafb37f-bf57-424d-85d2-eeaacdaaef67


A simple yet fully functional blogging platform that allows users to create, view, update, and delete blog posts. The platform is built with a Node.js/ExpressJS backend, a MongoDB database for storing data, and a ReactJS frontend with TailwindCSS for styling. 

This platform is designed with a focus on simplicity, scalability, and ease of use. It follows best practices in both frontend and backend development while providing a clean user experience that mirrors modern SaaS-style blog websites.

---

## 🚀 Features

- **Create, Read, Update, Delete (CRUD) operations** for blog posts.
- **User-friendly UI** that displays blog posts in a clean, intuitive manner.
- A **Hero Section** at the top of the homepage.
- **Blog listing** page to view all published posts.
- Each blog post displays **title**, **content**, **author**, and **timestamp**.
- **Responsive design** to work well on both desktop and mobile devices.
- Built with modern JavaScript technologies: **Node.js**, **ExpressJS**, **MongoDB**, **ReactJS**, and **TailwindCSS**.

---

## 🧰 Tech Stack

- **Backend:**  
  - Node.js
  - ExpressJS
  - MongoDB (Mongoose for database modeling)
  
- **Frontend:**  
  - ReactJS
  - TailwindCSS (for styling)

- **Database:**  
  - MongoDB

---

## 🌱 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/minimal-blogging-platform.git
cd minimal-blogging-platform
```

### 2. Install the dependencies:

    ```bash
    cd minimal-blogging-platform
    npm install or npm i
    ```

### 3. Set up the Backend

1. Go to the backend directory:

    ```bash
    cd minimal-blogging-platform
    ```

2. Set up the environment variables in a `.env` file:

    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    PORT=your port
    ```
3. Start the server:

    ```bash
    cd server
    npm run server
    ```

The backend will be running on `http://localhost:5000`.

### 4. Set up the Frontend

1. Go to the frontend directory:

    ```bash
    cd ../frontend
    ```


2. Start the frontend:

    ```bash
    npm run dev
    ```

The frontend will be running on `http://localhost:5173`.

---

## ⚙️ Backend Structure

The backend follows a clean folder structure for scalability:

```
backend/
├── controllers/      # Contains controller functions for handling routes
├── models/           # Mongoose models (BlogPost model, etc.)
├── routes/           # API routes
├── config/           # Configuration files (db connection, etc.)
├── index.js         # Entry point of the server
└── .env              # Environment variables
```

## 🎨 Frontend Structure

The frontend follows a standard ReactJS folder structure:

```
frontend/
├── components/       # Reusable UI components (BlogPostCard, Header, Footer, etc.)
├── context/          # React Context for global state management
├── App.jsx            # Main React component
└── main.jsx          # Entry point for React app
```

## 📱 UI Design

The frontend features a simple, modern SaaS blog website layout with the following sections:

- **Hero Section:** A large banner at the top of the homepage with a brief introduction to the blog.
- **Blog Listing:** Displays a list of blog posts with titles, authors, and timestamps.
- **Blog Details Page:** Allows users to view individual blog posts with their full content.
- **Footer:** Contains links to social media and copyright information.

**TailwindCSS** is used to create a responsive, minimal design. Here's a basic idea of the layout:


## 📝 Usage

- **Create a new post:** Navigate to the "Create Post" page and submit a new post with a title, content, and author.
- **View all posts:** The homepage displays a list of all blog posts.
- **View a single post:** Click on a post from the list to view the full post.
- **Update a post:** Edit an existing post from the post detail page.
- **Delete a post:** Delete a post from the post detail page.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 💬 Contributing

Contributions are welcome! Feel free to fork the repository, create a pull request, and share any improvements or fixes.

---

Enjoy using the platform! Happy blogging! 📝📚
