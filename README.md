# VectorShift Frontend Technical Assessment

Built using React Flow and FastAPI as part of the VectorShift (YC S23) hiring process.

This project was completed as part of the VectorShift Frontend Technical Assessment.

It is a visual pipeline builder that allows users to create and connect different nodes (Input, Output, LLM, Text, Math, API, etc.) and submit the pipeline to a backend for validation.

---

## 🚀 Features

- Drag and drop pipeline nodes
- Dynamic node creation
- Custom Text Node with variable parsing (e.g. {{input}})
- Backend integration using FastAPI
- Pipeline validation (node count, edge count, DAG check)
- Clean and modular component structure

---

## 🛠 Tech Stack

### Frontend
- React
- React Flow
- Zustand (state management)

### Backend
- FastAPI
- Uvicorn
- Pydantic

---

## 📂 Project Structure
frontend_technical_assessment/
│
├── backend/
│ └── main.py
│
└── frontend/
└── src/
├── nodes/
├── store.js
├── submit.js
└── toolbar.js


---

## ▶️ How to Run the Project

### Backend

1. Navigate to backend folder:
 
2. Install dependencies:
   

4. python -m uvicorn main:app --reload

Backend runs on:
http://127.0.0.1:8000


---

### Frontend

1. Navigate to frontend folder:
   
2. Install dependencies:
   
3. Start the development server:
   
Frontend runs on:
http://localhost:3000


---

## 📌 Notes

- node_modules and build files are excluded from version control.
- CORS is enabled in the backend for local development.
- The backend validates pipeline structure and returns:
  - Number of nodes
  - Number of edges
  - Whether the pipeline is a valid DAG

---

## 👩‍💻 Author

Neetu Pandey


