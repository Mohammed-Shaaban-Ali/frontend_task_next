# 🚀 Frontend Task – Next.js Authentication Flow

Live Demo: [https://frontend-task-next.vercel.app/](https://frontend-task-next.vercel.app/)

---

## 📌 Overview

This project implements the required **Authentication Flow** and **UI design** using **Next.js**.  
It includes Register, Login, Email Verification, and Dashboard pages, fully integrated with the provided API.

🔒 **Note on Security:**  
Instead of storing the token in `localStorage`, I used **cookies**.  
This makes authentication more secure and allows handling the token inside **Next.js Middleware**.

---

## ✨ Features

- **Register Page** → Full Name, Email, Password, Phone Number, Country Code.
- **Login Page** → Email & Password.
- **Verify Account Page** → Input for code (**123456** for testing).
- **Dashboard Page** → Displays: `Welcome, [User Name]`.
- **Pixel-perfect UI** → Based on the provided Figma design.
- **Responsive Design** → Works on both desktop and mobile.
- **Secure Auth Flow** → Token saved in cookies.
- **State Management** → Using **Redux Toolkit Query (RTK Query)**.
- **UI Components** → Using [shadcn/ui](https://ui.shadcn.com/).
- **SEO Optimization** → Implemented metadata (title, description, keywords, Open Graph, Twitter cards) for better search engine visibility and social sharing.

---

## 📁 Project Structure

```
FRONTEND_TASK_NEXT/
├── 📁 app/                          # Next.js App Router
│   ├──📁 auth                       # Auth Route
│   │    ├── 📁 (register)/           # Route group for registration flow
│   │    │       ├── 📁 register/     # Register page
│   │    │       └──📁 verify-email/  # Email verification page
│   │    └── 📁 login/                # Login page
│   ├── 📁 dashboard/                # Protected dashboard page
│   ├── 📄 error.tsx                 # Global error boundary
│   ├── 📄 favicon.ico               # App favicon
│   ├── 📄 globals.css               # Global styles
│   ├── 📄 layout.tsx                # Root layout component
│   ├── 📄 loading.tsx               # Global loading component
│   ├── 📄 not-found.tsx             # 404 page
│   └── 📄 page.tsx                  # Home page
│
├── 📁 components/                   # Reusable UI components
│   ├── 📁 auth/                     # Authentication-specific components
│   ├── 📁 home/                     # Home page components
│   ├── 📁 shared/                   # Shared utility components
│   └── 📁 ui/                       # shadcn/ui components
│
├── 📁 constants/                    # App constants and configurations
├── 📁 lib/                          # Utility libraries
├── 📁 node_modules/                 # Dependencies
├── 📁 providers/                    # Context providers (Redux, Theme, etc.)
├── 📁 public/                       # Static assets
├── 📁 redux/                        # Redux store and slices
│   ├── 📁 app/                      # Store configuration
│   └── 📁 features/                 # Feature-based slices
│
├── 📁 types/                        # TypeScript type definitions
├── 📄 .gitignore                    # Git ignore rules
├── 📄 components.json               # shadcn/ui configuration
├── 📄 middleware.ts                 # Next.js middleware for auth
├── 📄 next-env.d.ts                 # Next.js TypeScript declarations
├── 📄 next.config.ts                # Next.js configuration
└── 📄 package-lock.json             # Dependency lock file
```
