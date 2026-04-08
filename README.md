# Deployment Guide

A step-by-step guide to deploying this application using **Supabase** (database), **Render** (backend), and **Vercel** (frontend).

---

## Prerequisites

- [Supabase](https://supabase.com) account
- [Render](https://render.com) account
- [Vercel](https://vercel.com) account
- Docker installed locally (for testing, optional)

---

## Step 1: Create Database on Supabase

1. Go to [https://supabase.com](https://supabase.com) and sign in.
2. Click **New Project** and fill in your project details.
3. Once the project is created, navigate to **Settings → Database**.
4. Note down the following credentials — you'll need them for the backend:

   | Variable | Where to find it |
   |---|---|
   | `SPRING_DATASOURCE_URL` | Settings → Database → Connection String (JDBC) |
   | `SPRING_DATASOURCE_USERNAME` | Settings → Database → Username |
   | `SPRING_DATASOURCE_PASSWORD` | Settings → Database → Password |

> **Tip:** The JDBC connection string format looks like:
> `jdbc:postgresql://db.<project-ref>.supabase.co:5432/postgres`

---

## Step 2: Deploy Backend on Render

1. Go to [https://render.com](https://render.com) and sign in.
2. Click **New → Web Service**.
3. Connect your GitHub repository.
4. Configure the service with the following settings:

   | Setting | Value |
   |---|---|
   | **Language** | `Docker` |
   | **Root Directory** | `backend` |

5. Under **Environment Variables**, add the following: