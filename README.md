# 🏫 School Maintenance Reporting and Management System

## 📘 Project Title & Short Description

**School Maintenance Reporting and Management System**

A web and mobile-based platform designed to streamline the process of reporting, tracking, and resolving maintenance issues within the school campus.  
Students can submit requests with details (**building, location, priority, photo**), while Maintenance Staff and Admins manage, update, and analyze issues through dashboards and reports.

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

2️⃣ Import into IntelliJ or Eclipse

Open IntelliJ IDEA or Eclipse.

Choose File → Open Project and select the cloned repository folder.

Wait for the IDE to import all dependencies (Maven or Gradle).

Configure the database connection in the file:
src/main/resources/application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/
spring.datasource.username=root
spring.datasource.password=root


Ensure MySQL is running locally on your system.

Save the configuration file.

3️⃣ Run the Spring Boot Application

Open the terminal inside your project directory.

Run the following command:

./mvnw spring-boot:run


Once the build is complete, open your browser and go to:
http://localhost:8080

4️⃣ Setup the ReactJS Web Application

Navigate to the web application folder:

cd webapp


Install dependencies:

npm install


Start the React development server:

npm start


The web app will run on:
http://localhost:3000

5️⃣ Setup the Android (Kotlin) Mobile Application

Open the android/ folder in Android Studio.

Connect your Firebase project for Authentication and Realtime Database.

Build and run the app on an emulator or physical device.

Ensure your Spring Boot backend is running before testing API requests.

6️⃣ Deployment Options
✅ Firebase Hosting

Log in to Firebase:

firebase login


Initialize hosting:

firebase init


Deploy your web application:

firebase deploy

✅ Heroku (Alternative)

Log in to Heroku:

heroku login


Push your project to Heroku:

git push heroku main

👥 Contributors
Name	Role
Christian Jayson Cantiller	Project Manager / Developer
Louie V. Bajamunde	Developer
Angeline B. Baco	Developer
Mac Howard Caranzo	Developer
📅 Project Information

Course: IT342 - Systems Integration and Architecture 1

Instructor: Mr. Frederick Revilleza

Date: October 2025
