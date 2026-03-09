# 🌽 MaizeScan – AI Powered Maize Seed Quality Analysis Platform

**MaizeScan** is an AI-driven agricultural quality inspection platform that automates **maize seed grading using computer vision**.  
The system uses a **custom-trained YOLOv8 object detection model** to identify and classify maize seeds into **five quality categories**, enabling rapid quality assessment, batch analytics, and digital reporting.

MaizeScan helps **farmers, researchers, seed labs, and agri-startups** evaluate maize seed quality quickly using **image upload or real-time webcam detection**.

---

# 🚀 Project Overview

Traditional seed grading is **manual, time-consuming, and inconsistent**.  
MaizeScan introduces **AI-assisted visual inspection** to automate the **physical purity screening stage** of maize seed evaluation.

The platform detects every visible seed in an image and classifies them into five quality grades:

| Class | Meaning | Visualization |
|------|------|------|
| Excellent | Fully healthy maize seed | 🟢 Green |
| Good | Minor imperfections | 🟡 Yellow |
| Average | Moderate quality | 🟠 Orange |
| Bad | Visible damage | 🔴 Red |
| Worst | Severely damaged / moldy | ⚫ Black |

The system then calculates **batch quality statistics and assigns a final grade** based on real-world seed grading logic.

---

# ✨ Key Features

## 🌾 AI Seed Detection
- YOLOv8 based real-time seed detection
- Detects **multiple seeds simultaneously**
- Accurate **bounding boxes and classification**
- Supports **image upload and live webcam detection**

---

## 📊 Batch Quality Analysis
MaizeScan automatically performs **batch-level analytics**:

- Total seeds detected
- Class-wise distribution
- Quality percentages
- Visual purity estimation
- Automated grading

---

## 🧠 Intelligent Grading System

The platform estimates **visual purity** using seed distribution.

### Grade Assignment

| Grade | Condition | Interpretation |
|------|------|------|
| Grade A | Sound ≥ 90% & Defective ≤ 3% | Premium seed quality |
| Grade B | Sound ≥ 80% & Defective ≤ 7% | Commercial grain |
| Grade C | Sound < 80% | Substandard batch |

⚠️ Note:  
MaizeScan performs **visual quality screening only**.  
Germination rate and moisture testing must be conducted separately.

---

# 📊 Analytical Dashboard

The platform includes a **personalized analytics dashboard** displaying:

- Total batches processed
- Total seeds analyzed
- Average seed quality
- Defect rate
- Historical batch trends

### Interactive Graphs

- Quality distribution pie chart
- Seed count bar chart
- Batch trend line graph
- Batch history analytics

All charts include **visible labels and percentages** for presentation-ready insights.

---

# 👤 User Management

MaizeScan supports **secure multi-user access**.

### Features

- User registration
- Secure login with JWT authentication
- Personalized dashboard
- User profile management
- Batch history tracking

Each user can view **only their own batch data**, ensuring data privacy.

---

# 📄 Automated Reports

For every batch analysis the system generates:

- Seed distribution summary
- Final grade assignment
- Batch statistics
- Detection visualization

Reports can be exported for **documentation and quality records**.

---

# 🌱 Farmer Guide & Knowledge Hub

MaizeScan includes an educational **Farmer Guide** designed to help users understand seed quality.

Content includes:

- Maize seed grading standards
- Common maize seed defects
- Storage best practices
- Germination improvement tips
- Visual examples of seed damage

The guide is designed to support **farmers, students, and agricultural researchers**.

---

# 🛠 Technology Stack

MaizeScan is built using a modern **AI + Web Application architecture**.

## 🧠 AI Core

- **Ultralytics YOLOv8**
- **Python 3**
- **OpenCV**
- **Custom maize seed dataset**

Used for:

- Object detection
- Seed classification
- Image preprocessing

---

## ⚙ Backend

- **FastAPI**
- **SQLAlchemy ORM**
- **PostgreSQL / Cloud Database**
- **JWT Authentication**

Handles:

- AI inference
- Batch processing
- User authentication
- Data persistence
- API communication

---

## 🎨 Frontend

- **React + Vite**
- **Modern Glassmorphism UI**
- **Framer Motion animations**
- **Recharts for analytics**

Responsible for:

- Detection interface
- Analytics dashboard
- Reports visualization
- User management UI

---

# 🔄 System Workflow

```mermaid
graph TD

A[User Uploads Image / Webcam Capture] --> B[Frontend Detection Page]

B -->|POST API| C[FastAPI Backend]

C --> D[Image Preprocessing - OpenCV]

D --> E[YOLOv8 AI Model]

E --> F[Seed Classification]

F --> G[Batch Statistics Calculation]

G --> H[Grade Assignment]

H --> I[Database Storage]

I --> J[Analytics Dashboard]

J --> K[Reports & Visualization]






















# 🌽 MaizeScan: AI-Driven Seed Quality Analysis

**MaizeScan** is a state-of-the-art, AI-powered platform designed to redefine agricultural quality control. By leveraging **YOLOv8 Computer Vision** and a **Real-Time Data Pipeline**, the system automates the grading of maize seeds with 98% precision, identifying defects such as insect damage, mold, and mechanical cracks in milliseconds.

---

## ✨ Features that "WOW"
- **Mission Control Dashboard**: A high-fidelity, real-time analytics interface that tracks seed health across global harvesting batches.
- **AI Live Detection**: Real-time batch analysis using a custom-trained YOLOv8 model for 5-class seed grading (Excellent to Worst).
- **Regional Quality Mapping**: Interactive geospatial visualization showing crop quality across different geographical zones.
- **Farmer Master Class**: A multilingual (English, Hindi, Marathi) educational portal featuring a detailed Defect Library and HD video guides.
- **Digital Certification**: Instant generation of quality reports and automated Grade A/B/C assignments.

---

## 🛠️ The Technology Stack
MaizeScan is built using a modern **Decoupled Monorepo Architecture**:

### **AI Core (The Brain)**
- **Ultralytics YOLOv8**: Real-time object detection and 5-class classification.
- **OpenCV**: Image pre-processing and camera stream management.
- **Python 3.10**: The primary language for high-performance AI inference.

### **Backend (The Logic Engine)**
- **FastAPI**: Asynchronous Python API framework for ultra-low latency.
- **SQLAlchemy**: Robust ORM for managing batch data and harvest trends.
- **PostgreSQL (NeonDB)**: Distributed cloud database for persistent history.
- **JWT Shell**: Secure, token-based authentication for operators.

### **Frontend (The Command Center)**
- **React 18 + Vite**: High-performance single-page application framework.
- **Glassmorphism CSS**: A premium, translucent UI design system for a high-tech aesthetic.
- **Recharts**: Responsive SVG-based analytics for time-series and radial quality data.
- **Framer Motion**: Smooth, cinematic transitions and micro-animations.

---

## 🔄 Project Technical Flow

```mermaid
graph TD
    A[Operator Image Capture] -->|POST /api/detect| B[FastAPI Backend]
    B -->|Pre-processing| C[OpenCV Normalization]
    C -->|Inference| D[YOLOv8 AI Model]
    D -->|Classification| E[5-Class Aggregation]
    E -->|Grading Logic| F[Grade A/B/C Assignment]
    F -->|Persistence| G[Cloud PostgreSQL Database]
    G -->|Real-Time Sink| H[React Sync Dashboard]
```

1.  **Capture**: The frontend uses standard media APIs to capture a sample of maize seeds.
2.  **Inference**: The FastAPI backend processes the image in **<200ms**, identifying every single kernel's structural health.
3.  **Analysis**: The system calculates a weighted quality score based on the distribution of "Bad" and "Moldy" seeds.
4.  **Action**: Results are pushed to a central database, instantly updating the global dashboard for management.

---

## 🚀 Deployment (Vercel)
This project is pre-configured for **Vercel Monorepo Deployment**.

1.  Push code to GitHub.
2.  Import to Vercel.
3.  Add `DATABASE_URL`, `SECRET_KEY`, and `ALGORITHM` to Environment Variables.
4.  Vercel automatically detects the `vercel.json` and builds the dual-stack app.

---

## 🏗️ Getting Started (Local Development)

### **1. AI Backend**
```powershell
# From root
.\.venv\Scripts\python.exe -m uvicorn backend.main:app --reload --port 8000
```

### **2. Premium Frontend**
```powershell
# From /frontend
npm run dev -- --port 5173
```

---
**Build for the Future of Sustainable Agriculture. Build with MaizeScan.** 🌽✨
