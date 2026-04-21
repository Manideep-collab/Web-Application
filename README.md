# Employee Management System

A modern, full-stack employee management application built with React and FastAPI. This system provides comprehensive CRUD operations for employee records with an intuitive user interface and robust backend API.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Database Schema](#database-schema)
- [Project Architecture](#project-architecture)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### Employee Management
- **Create Employees**: Add new employee records with comprehensive details
- **View Employees**: Display all employees in an organized list
- **Update Employees**: Modify existing employee information
- **Delete Employees**: Remove employee records from the system

### Employee Information
- Personal details (name, email, phone number, date of birth)
- Address information (address, city, country)
- Employment data (gender, skills)
- Multi-country support with dynamic city selection

### User Interface
- **Authentication**: Login and forgot password pages
- **Dashboard**: Responsive dashboard layout with navigation
- **Interactive Components**: 
  - Menus and navigation
  - Tooltips for enhanced UX
  - Popup dialogs
  - Autocomplete fields
  - Tabbed interfaces
  - Image galleries
  - Sliders and carousels
  - Links management
  - CSS properties showcase
  - Iframes support

### Technical Features
- RESTful API architecture
- CORS-enabled for cross-origin requests
- Database-driven with SQLAlchemy ORM
- MySQL persistent storage
- React Context for state management
- Custom React hooks

---

## 🛠 Tech Stack

### Frontend
- **React** 19.2.5 - UI library
- **React Router DOM** 7.14.1 - Client-side routing
- **React Scripts** 5.0.1 - Build and development tools
- **CSS** - Styling with component-scoped stylesheets

### Backend
- **FastAPI** - Modern Python web framework
- **SQLAlchemy** - ORM for database operations
- **Pydantic** - Data validation and serialization
- **PyMySQL** - MySQL database driver

### Database
- **MySQL** - Relational database

### Testing
- **React Testing Library** - Component testing
- **Jest** - JavaScript testing framework

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **MySQL** (v5.7 or higher) - [Download](https://www.mysql.com/)
- **Git** - [Download](https://git-scm.com/)

---

## 📁 Project Structure

```
project/
├── backend/                          # FastAPI backend
│   ├── main.py                      # Application entry point
│   ├── database.py                  # Database configuration
│   ├── models/
│   │   └── employee.py              # SQLAlchemy Employee model
│   ├── routers/
│   │   └── employee_router.py       # Employee API routes
│   ├── schemas/
│   │   └── employee_schema.py       # Pydantic validation schemas
│   └── uploads/                     # File upload storage
│
├── frontend/                         # React frontend
│   ├── public/
│   │   ├── index.html               # HTML entry point
│   │   ├── manifest.json            # PWA manifest
│   │   └── robots.txt               # SEO robots file
│   ├── src/
│   │   ├── App.js                   # Main App component
│   │   ├── index.js                 # React entry point
│   │   ├── components/              # Reusable components
│   │   │   ├── Navbar.js
│   │   │   └── Sidebar.js
│   │   ├── context/
│   │   │   └── EmployeeContext.js   # State management
│   │   ├── hooks/
│   │   │   └── usePageTitle.js      # Custom hooks
│   │   ├── layout/
│   │   │   └── DashboardLayout.js   # Dashboard layout
│   │   ├── pages/                   # Page components
│   │   │   ├── Login.js
│   │   │   ├── Home.js
│   │   │   ├── Employees/
│   │   │   │   ├── AddEmployee.js
│   │   │   │   └── EmployeeList.js
│   │   │   └── [other pages]
│   │   └── services/                # API service layer
│   ├── package.json                 # Node dependencies
│   └── public/                      # Static assets
│
└── README.md                         # Project documentation
```

---

## 🚀 Installation

### Backend Setup

1. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

2. **Create a Python virtual environment**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment**
   - **Windows:**
     ```bash
     venv\Scripts\activate
     ```
   - **macOS/Linux:**
     ```bash
     source venv/bin/activate
     ```

4. **Install Python dependencies**
   ```bash
   pip install fastapi uvicorn sqlalchemy pymysql pydantic
   ```

### Frontend Setup

1. **Navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Install Node dependencies**
   ```bash
   npm install
   ```

---

## ⚙️ Configuration

### Database Configuration

1. **Create a MySQL database**
   ```sql
   CREATE DATABASE jala_app;
   ```

2. **Update database credentials** in `backend/database.py`
   ```python
   DATABASE_URL = "mysql+pymysql://username:password@localhost/jala_app"
   ```
   
   Replace:
   - `username` - Your MySQL username
   - `password` - Your MySQL password
   - `localhost` - Your MySQL host
   - `jala_app` - Your database name

3. **Create tables** (Run this after starting the backend)
   ```bash
   python -c "from models.employee import Base; from database import engine; Base.metadata.create_all(bind=engine)"
   ```

### Frontend Configuration

Update the API base URL in your frontend service files if your backend runs on a different port:
```javascript
const API_BASE_URL = "http://localhost:8000";
```

---

## 🏃 Running the Application

### Start the Backend

1. **Ensure your virtual environment is activated**

2. **Navigate to the backend directory**
   ```bash
   cd backend
   ```

3. **Run the FastAPI server**
   ```bash
   uvicorn main:app --reload --host 0.0.0.0 --port 8000
   ```

   The backend will be available at: `http://localhost:8000`

### Start the Frontend

1. **In a new terminal, navigate to the frontend directory**
   ```bash
   cd frontend
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

   The frontend will automatically open at: `http://localhost:3000`

### Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **API Documentation**: http://localhost:8000/docs (Swagger UI)
- **ReDoc Documentation**: http://localhost:8000/redoc

---

## 📡 API Endpoints

### Employee Endpoints

All endpoints are prefixed with `/employees`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| **POST** | `/employees/` | Create a new employee | EmployeeCreate |
| **GET** | `/employees/` | Retrieve all employees | - |
| **PUT** | `/employees/{id}` | Update an employee | EmployeeUpdate |
| **DELETE** | `/employees/{id}` | Delete an employee | - |
| **DELETE** | `/employees/{employee_id}` | Delete employee (alternative) | - |

### Health Check

| Method | Endpoint | Description |
|--------|----------|-------------|
| **GET** | `/` | API health check |

### Request/Response Examples

#### Create Employee (POST /employees/)
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "mobile": "+1-555-0123",
  "dob": "1990-05-15",
  "gender": "Male",
  "address": "123 Main Street",
  "country": "USA",
  "city": "New York",
  "skills": ["JavaScript", "React", "Python"]
}
```

#### Response (201 Created)
```json
{
  "message": "Employee created"
}
```

#### Get All Employees (GET /employees/)
```json
[
  {
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "mobile": "+1-555-0123",
    "dob": "1990-05-15",
    "gender": "Male",
    "address": "123 Main Street",
    "country": "USA",
    "city": "New York",
    "skills": "JavaScript,React,Python"
  }
]
```

---

## 🗄️ Database Schema

### Employees Table

```sql
CREATE TABLE employees (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  dob DATE NOT NULL,
  gender VARCHAR(10) NOT NULL,
  address TEXT NOT NULL,
  country VARCHAR(50) NOT NULL,
  city VARCHAR(50) NOT NULL,
  skills TEXT NOT NULL
);
```

### Column Descriptions

| Column | Type | Description |
|--------|------|-------------|
| id | INT | Primary key, auto-increment |
| first_name | VARCHAR(100) | Employee's first name |
| last_name | VARCHAR(100) | Employee's last name |
| email | VARCHAR(100) | Employee's email address |
| mobile | VARCHAR(20) | Employee's phone number |
| dob | DATE | Date of birth |
| gender | VARCHAR(10) | Gender (Male/Female/Other) |
| address | TEXT | Street address |
| country | VARCHAR(50) | Country of residence |
| city | VARCHAR(50) | City of residence |
| skills | TEXT | Comma-separated list of skills |

---

## 🏗️ Project Architecture

### Backend Architecture

```
FastAPI Application
    ↓
CORS Middleware (Allows React requests)
    ↓
Router (employee_router)
    ↓
Database Layer (SQLAlchemy ORM)
    ↓
MySQL Database
```

### Frontend Architecture

```
App (Router)
    ↓
    ├── Login Route
    ├── Dashboard Route
    │   ├── DashboardLayout
    │   │   ├── Navbar
    │   │   ├── Sidebar
    │   │   └── Outlet (Child Routes)
    │   └── Pages
    │       ├── Employees Pages
    │       └── Component Showcase Pages
    │
└── Context (State Management)
```

---

## 💻 Development Guide

### Available Scripts

#### Frontend
- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm build` - Builds the app for production
- `npm eject` - Ejects from Create React App (one-way operation)

#### Backend
- `uvicorn main:app --reload` - Starts development server with auto-reload
- `python -m pytest` - Run tests (if configured)

### Adding New Features

1. **Backend**: Add routes in `backend/routers/` and models in `backend/models/`
2. **Frontend**: Create new pages in `frontend/src/pages/` and components in `frontend/src/components/`
3. **Database**: Update schemas in `backend/schemas/` to match your data models

---

## 🧪 Testing

### Running Frontend Tests
```bash
cd frontend
npm test
```

### Backend Testing
To add backend tests, install pytest:
```bash
pip install pytest pytest-asyncio
```

---

## 🌍 Supported Countries and Cities

The application includes pre-configured support for the following countries and cities:

- **India**: Hyderabad, Delhi, Mumbai, Bangalore, Chennai, Kolkata
- **Sri Lanka**: Colombo, Kandy, Galle, Jaffna, Vavuniya
- **USA**: New York, Los Angeles, Chicago, Houston
- **UK**: London, Manchester, Liverpool
- **Australia**: Sydney, Melbourne, Perth

---

## 🔒 Security Considerations

- CORS is currently set to allow all origins (`*`) - **Restrict this in production**
- Database credentials should be stored in environment variables
- Implement proper authentication/authorization mechanisms
- Add input validation and sanitization
- Use HTTPS in production

---

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm build
```

This creates an optimized production build in the `frontend/build` directory.

### Backend Production Setup
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --workers 4
```

---

## 🐛 Troubleshooting

### Common Issues

**Issue**: Database connection refused
- **Solution**: Ensure MySQL is running and credentials in `database.py` are correct

**Issue**: CORS errors in console
- **Solution**: Verify backend is running and CORS middleware is enabled

**Issue**: npm start fails
- **Solution**: Delete `node_modules` and run `npm install` again

**Issue**: ModuleNotFoundError in Python
- **Solution**: Ensure virtual environment is activated and dependencies are installed

---

## 📞 Support

For issues and questions:
1. Check the troubleshooting section above
2. Review FastAPI documentation: https://fastapi.tiangolo.com/
3. Review React documentation: https://react.dev/

---

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please follow the existing code style and add tests for new features.

---

## 📝 Changelog

### Version 0.1.0 (Current)
- Initial release
- Employee CRUD operations
- Dashboard with multiple UI components
- Authentication pages
- Multi-country support

---

## ✋ Last Updated

Last updated: April 2026

---

**Developed with ❤️ using React and FastAPI**
