<div align="center">

# 🎓 CMS CBSE

### A Modern Full-Stack School Website for CBSE Institutions

*Share information, publish announcements and manage school content, all from one digital platform.*

<br />

[Features](#-features) •
[Tech Stack](#-tech-stack) •
[Getting Started](#-getting-started) •
[Database](#-database) •
[Contact](#-developed-by)

</div>

---

## 📖 Overview

**CMS CBSE** is a modern, dynamic and responsive website built for CBSE schools. It gives educational institutions a complete online presence and a centralized place to display school information, academic details, announcements, events and other institutional updates.

The entire application, frontend and backend, is built with **Next.js**, backed by **Microsoft SQL Server**.

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🏫 | **School Profile** | Institutional information and school details |
| 📚 | **Academics** | Academic and educational information |
| 📰 | **News & Announcements** | Publish and display latest updates |
| 🎉 | **Events & Activities** | Showcase school events and activities |
| 👨‍👩‍👧 | **Student & Parent Sections** | Dedicated information for students and parents |
| ⚙️ | **Content Management** | Dynamic content with admin management features *(where implemented)* |
| 🔌 | **Backend API** | Built-in API integration via Next.js Route Handlers |
| 🗄️ | **Database Connectivity** | Microsoft SQL Server integration |
| 📱 | **Fully Responsive** | Works on mobile, tablet and desktop |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js, React.js |
| **Backend** | Next.js API Routes / Route Handlers |
| **Language** | JavaScript / TypeScript |
| **Database** | Microsoft SQL Server |
| **Runtime** | Node.js |
| **Version Control** | Git & GitHub |

---

## 📂 Project Structure

```text
CMSCBSE/
├── public/            # Static files, images and assets
├── src/
│   ├── app/           # Next.js routes and API handlers
│   ├── components/    # Reusable UI components
│   ├── lib/           # Database and utility functions
│   └── ...
├── .env.local         # Environment variables (never commit)
├── next.config.js     # Next.js configuration
├── package.json       # Dependencies and scripts
└── README.md
```

> **Note:** The actual folder structure may vary depending on the project configuration.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Git](https://git-scm.com/)
- A running **Microsoft SQL Server** instance

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/SunRayz4/cmscbse.git
cd cmscbse
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env.local` file in the project root:

```env
DB_SERVER=your_server_name
DB_DATABASE=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password
DB_PORT=1433
```

> ⚠️ **Important:** Replace the example values with your actual credentials. **Never commit `.env.local` or database credentials to GitHub.**

**4. Run the development server**

```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create an optimized production build |
| `npm start` | Start the production server |

---

## 🗄️ Database

The application uses **Microsoft SQL Server** to store and manage:

- School details and institutional information
- Website content
- News and announcements
- Events and activities
- Administrative information

---

## 🏢 Developed By

<div align="center">

**Sunrayz Technology**

*Modern digital solutions and web development services.*

🌐 [sunrayztechnology.com](https://sunrayztechnology.com/)

</div>

---

## 📋 Project Information

| | |
|---|---|
| **Project Name** | CMS CBSE – School Website |
| **Type** | Full-Stack Web Application |
| **Industry** | Education |
| **Frontend / Backend** | Next.js |
| **Database** | Microsoft SQL Server |
| **Developer** | Sunrayz Technology |

---

## 📄 License & Copyright

This project is developed for school website management and institutional use.

© Sunrayz Technology. All Rights Reserved.

<div align="center">

Designed & developed with ❤️ by **Sunrayz Technology**

</div>