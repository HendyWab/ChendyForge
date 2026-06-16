# ChendyForge Architecture

## Overview

ChendyForge is an AI-powered collaborative project management platform inspired by GitHub Projects, Jira, Linear, and Notion.

The platform combines:

- Issue Management
- Sprint Planning
- Realtime Collaboration
- AI Assisted Workflows
- Analytics

---

## High Level Architecture

Frontend
↓
REST API
↓
Database

Realtime Layer
↓
WebSockets

AI Layer
↓
LLM Services

---

## Frontend

Technology Stack:

- React
- TypeScript
- Vite
- TailwindCSS
- Zustand
- React Router
- DnD Kit

Responsibilities:

- Boards
- Issues
- Discussions
- Analytics
- Settings

---

## Backend

Technology Stack:

- FastAPI
- PostgreSQL
- Redis
- WebSockets

Responsibilities:

- Authentication
- Issue Management
- Notifications
- Realtime Events
- AI Services

---

## AI Layer

Planned Features:

- Issue Summaries
- Sprint Planning Assistant
- Duplicate Detection
- Priority Recommendation

---

## Deployment

Frontend:
- Vercel

Backend:
- Docker

Database:
- PostgreSQL

Realtime:
- Redis Pub/Sub