# Use an official lightweight Python runtime
FROM python:3.10-slim

# Install system dependencies for OpenCV
RUN apt-get update && apt-get install -y \
    libgl1 \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY backend/requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend code and the trained model
COPY backend/ ./backend/

# Expose port for FastAPI
EXPOSE 8000

# Set production environment variables
ENV PORT=8000
ENV PYTHONUNBUFFERED=1

# Command to run the application using Uvicorn
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
