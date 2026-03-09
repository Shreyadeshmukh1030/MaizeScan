# SeedInsight AI# 🌽 MaizeScan: AI Seed Quality Platform

MaizeScan is a premium, AI-driven platform for real-time seed grading and harvest analytics. Using Computer Vision (YOLOv8), it automates the identification of seed defects to ensure high agricultural standards.

---

## 🚀 Deployment Guide (Vercel)

This project is configured for a **Monorepo Deployment** on Vercel.

### **1. Connect to Vercel**
1. Push your code to your GitHub repository: `https://github.com/Shreyadeshmukh1030/MaizeScan`.
2. Go to [Vercel](https://vercel.com) and click **"Add New" -> "Project"**.
3. Import your **MaizeScan** repository.

### **2. Configure Environment Variables**
In the Vercel Project Settings, add the following variables:
*   `DATABASE_URL`: Your NeonDB / PostgreSQL connection string.
*   `SECRET_KEY`: A secure random string for JWT.
*   `ALGORITHM`: `HS256` (Default).
*   `VITE_API_URL`: Leave blank (it will use the relative proxy).

### **3. Build Settings**
*   **Root Directory**: Leave as `.` (Root).
*   **Vercel** will automatically detect the `vercel.json` and build both the **React Frontend** and **FastAPI Backend**.

---

> [!IMPORTANT]  
> **Technical Note: Vercel Python Limits**  
> Vercel Serverless Functions have a **50MB size limit** for Python deployments. AI libraries like `torch` and `ultralytics` often exceed this. If you encounter a "Function size too large" error, we recommend deploying the Backend to **Render** or **Railway** using a Dockerfile.

## Installation

### Backend
1. Navigate to `backend/`
2. Install dependencies: `pip install -r requirements.txt`
3. Run the server: `uvicorn main:app --reload`

### Frontend
1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`

## Custom Model
To use your custom trained maize seed model:
1. Copy your `.pt` file to the `backend/` folder.
2. Update `backend/detection.py` to point to your model file, or rename your file to `best.pt`.

## Features
- **Real-time Batch Inspection**: Start/Stop batches to accumulate statistics.
- **Automated Grading**: Logic-based grading (A, B, or C) based on percentage distribution.
- **Reporting**: Export batch history to CSV.
- **Analytics**: Beautifully visualized quality trends and grade distribution.
- **Visual Feedback**: Real-time bounding boxes and confidence scores on live video feed.
