# SeedInsight AI - Smart Seed Quality Inspection

## Overview
SeedInsight AI is a professional seed quality inspection system that uses computer vision (YOLOv8) to classify maize seeds into 5 quality categories: Excellent, Good, Average, Bad, and Worst. It provides real-time detection, batch management, grading logic, and a full analytics dashboard.

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
