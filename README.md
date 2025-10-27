# 🚀 SaaS Landing Page with Email Verification

A full-stack SaaS-style landing page that captures user leads, verifies emails through Nodemailer, and stores data securely in MongoDB.

---

## 🧩 Project Overview

This project demonstrates a complete workflow for building a SaaS product landing page with a lead capture system.  
Users can sign up with their name and email, receive a verification link, and get redirected to a thank-you page after verification.

---

## ✨ Features

- 🎨 **Responsive Landing Page** built with Tailwind CSS  
- 🧾 **Signup Form** with validation  
- 📧 **Email Verification** using Nodemailer  
- 🗄️ **MongoDB Integration** for lead storage  
- 🔐 **Environment Variables** using dotenv  
- ✅ **Thank You Dashboard** after successful signup  

---

## 🛠️ Tools & Technologies

| Component | Technology Used |
|------------|-----------------|
| **Frontend** | HTML5, Tailwind CSS, JavaScript |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Email Service** | Nodemailer |
| **Environment Config** | dotenv |
| **IDE** | Visual Studio Code |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/saas-landing-page.git
cd saas-landing-page
```

### 2. Navigate to Backend Folder
```bash
cd Backend
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Create a `.env` File
Create a file named `.env` inside the **Backend** folder and add the following content:
```bash
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/saasLeads
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:5500/frontend
```

> ⚠️ Note: Replace `your_email@gmail.com` and `your_email_app_password` with your actual credentials or app password.

### 5. Run the Server
```bash
node server.js
```

### 6. Open the Frontend
Open the `frontend/index.html` file in your browser or run with a local server (e.g., Live Server extension in VS Code).

---

## 📧 Email Verification Flow

1. User enters name and email on the landing page.  
2. The system stores the data in MongoDB.  
3. Nodemailer sends a verification link to the user's email.  
4. User clicks the verification link.  
5. The backend verifies the user and redirects them to the thank-you page.  

---

## 🧠 Project Structure

```
SAAS-Landing-Page/
│
├── Backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── thankyou.html
│   └── style.css
│
└── README.md
```

---

## 🚀 Future Enhancements

- Add JWT-based authentication  
- Add user dashboard with analytics  
- Deploy on Render + MongoDB Atlas  
- Integrate payment gateway (Stripe or Razorpay)

---

## 🧾 License

This project is open-source and available under the **MIT License**.

---

## 👨‍💻 Author

**Harshal Jadhav**  
💼 Computer Science Engineer  
📧 harshjadhav9623@gmail.com


---
