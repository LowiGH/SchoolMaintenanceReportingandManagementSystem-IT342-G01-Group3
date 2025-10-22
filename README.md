# 🏫 School Maintenance Reporting and Management System

## 📘 Project Title & Short Description

**School Maintenance Reporting and Management System**

  A web and mobile-based platform designed to streamline the process of reporting, tracking, and resolving maintenance issues within the school campus.  

Students can submit requests with details (**building, location, priority, photo**),  

while Maintenance Staff and Admins manage, update, and analyze issues through dashboards and reports.

---

## ⚙️ Tech Stack Used

- **Frontend (Web):** ReactJS  
- **Mobile App:** Android (Kotlin)  
- **Backend:** Spring Boot (Java)  
- **Database:** MySQL / Firebase Realtime Database  
- **Authentication:** Firebase Authentication (Google OAuth 2.0)  
- **Hosting/Deployment:** Firebase Hosting / Heroku / Custom Platform  

---

## 🧰 Setup & Run Instructions

### 1️⃣ Clone the Repository

1. Open your terminal or command prompt.  
2. Navigate to your desired directory.  
3. Clone the repository:

```bash
git clone https://github.com/<your-org>/<your-repo>.git

Open the cloned project in your IDE (IntelliJ IDEA, Eclipse, or VS Code).

2️ Import into IntelliJ or Eclipse

Open IntelliJ IDEA or Eclipse.

Choose File → Open Project and select the cloned repository folder.

Wait for the IDE to import all dependencies (Maven or Gradle).

Configure the database connection in the file:
src/main/resources/application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/
spring.datasource.username=root
spring.datasource.password=root
```
---


## Run the Spring Boot Application

Open the terminal inside your project directory.

Run the following command:

./mvnw spring-boot:run


Once the build is complete, open your browser and go to:
http://localhost:8080
---
## Setup the ReactJS Web Application
```bash
npm install
npm run dev
```

Start the React development server:
```bash
cd frontend
npm install
npm run dev
```

---
```bash
👥 Contributors
Name	Role
Christian Jayson Cantiller	Project Manager / Lead Developer
Louie V. Bajamunde	Developer
Angeline B. Baco	Developer
Mac Howard Caranzo	Developer
```


📅 Project Information

Course: IT342 - Systems Integration and Architecture 1

Instructor: Mr. Frederick Revilleza

Date: October 2025
