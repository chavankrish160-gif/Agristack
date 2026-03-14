# eMandi (Agristack)

A full-stack smart agriculture marketplace connecting farmers directly with buyers, retailers, and wholesalers.

## Project Structure

- `frontend` — React + Vite + Tailwind + Framer Motion dashboards
- `backend` — Node.js + Express + MongoDB REST APIs + Socket.io
- `ai-services` — FastAPI microservices for demand prediction, disease detection, and voice assistant
- `database` — notes/placeholders for seeds and migration scripts

## Prerequisites

Install these tools first:

- Node.js 18+
- Python 3.10+
- MongoDB (local or Atlas)

## 1) Run Backend API

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

Backend runs at `http://localhost:5000`.

Quick check:

```bash
curl http://localhost:5000/api/health
```

## 2) Run Frontend App

Open a **new terminal**:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`.

## 3) Run AI Services

Open a **third terminal**:

```bash
cd ai-services
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Start each service in separate terminals (or run with process manager):

```bash
uvicorn demand_prediction.main:app --reload --port 8001
uvicorn disease_detection.main:app --reload --port 8002
uvicorn voice_assistant.main:app --reload --port 8003
```

Health checks:

```bash
curl http://localhost:8001/health
curl http://localhost:8002/health
curl http://localhost:8003/health
```

## 4) Default API Overview

- Auth: `/api/auth/register`, `/api/auth/login`
- Crops: `/api/crops` (GET), `/api/crops` (POST farmer)
- Orders: `/api/orders`
- Delivery: `/api/delivery`
- Admin: `/api/admin/stats`, `/api/admin/users`

## Environment Variables

### `backend/.env`

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/emandi
JWT_SECRET=change_me
FRONTEND_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### `frontend/.env`

```env
VITE_API_URL=http://localhost:5000/api
VITE_SOCKET_URL=http://localhost:5000
```

## Notes

- If `npm install` fails in restricted environments (for example with `403` to npm registry), run the project on a machine/network with npm registry access.
- AI services currently provide starter/stub behavior suitable for extension in a final-year project.
