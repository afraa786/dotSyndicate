# Admin System Setup Guide

## Overview

This admin system provides lightweight authentication and content editing capabilities for the Travel Syndicate website. It uses:
- **Simple hardcoded authentication** (Username: `afraa`, Password: `1234`)
- **Secure HTTP-only cookies** for session management
- **JSON file storage** for content persistence
- **Next.js API routes** for backend operations
- **Middleware** for route protection

---

## Project Structure

```
/app
  /admin
    /login
      page.tsx          # Login page
    page.tsx            # Admin dashboard
  /api
    /auth
      /login
        route.ts        # Login endpoint
      /logout
        route.ts        # Logout endpoint
    /content
      route.ts          # Content CRUD endpoint

/components
  /admin
    blog-post-editor.tsx      # Edit blog posts
    promo-banner-editor.tsx   # Edit promo banners
    destination-editor.tsx    # Edit destinations

/data
  content.json          # JSON file with all content

middleware.ts           # Route protection middleware
```

---

## Features

### 1. Authentication
- **Endpoint:** `POST /api/auth/login`
- **Credentials:** 
  - Username: `afraa`
  - Password: `1234`
- **Cookie:** Sets `admin_auth` cookie (httpOnly, 7-day expiration)
- **Protection:** Middleware redirects unauthenticated users to `/admin/login`

### 2. Admin Dashboard (`/admin`)
- View and edit all content
- Three tabs: Blog Posts, Promo Banners, Destinations
- Save all changes in one operation
- Logout button

### 3. Blog Post Editing
- Edit title, date, description, and image path
- Add/remove categories
- Add/delete entire posts

### 4. Promo Banner Editing
- Edit tag, title, subtitle, and image path
- Add/delete banners

### 5. Destination Editing
- Edit destination name and image path
- Add/delete destinations

### 6. Frontend Integration
- Components automatically fetch content from `/api/content`
- Changes reflect immediately after saving
- Supports graceful loading states

---

## API Endpoints

### POST `/api/auth/login`
**Request:**
```json
{
  "username": "afraa",
  "password": "1234"
}
```

**Response (Success):**
```json
{
  "success": true
}
```

**Response (Failure):**
```json
{
  "success": false,
  "error": "Invalid credentials"
}
```

### POST `/api/auth/logout`
Clears the `admin_auth` cookie and redirects to login.

### GET `/api/content`
Fetches all content (public endpoint - no auth required).

**Response:**
```json
{
  "blogPosts": [...],
  "promoBanners": [...],
  "destinations": [...]
}
```

### PUT `/api/content`
Updates content (requires authentication).

**Request:**
```json
{
  "blogPosts": [...],
  "promoBanners": [...],
  "destinations": [...]
}
```

**Response:**
```json
{
  "success": true,
  "data": { ...updated content... }
}
```

---

## Data Schema

### Blog Post
```json
{
  "categories": ["Market Insights"],
  "date": "Jan 25, 2025",
  "title": "Post Title",
  "description": "Post description",
  "image": "/images/blog/blog-1.jpg"
}
```

### Promo Banner
```json
{
  "tag": "HSBCCC",
  "title": "UP TO 12% Off",
  "subtitle": "on Hotels Booking in Zanzibar and Bali",
  "imagePath": "/images/promos/hsbc.jpg"
}
```

### Destination
```json
{
  "name": "Dubai",
  "imagePath": "/images/dubai.jpg"
}
```

---

## How It Works

### 1. Login Flow
1. User visits `/admin/login`
2. Enters credentials
3. Form submits to `POST /api/auth/login`
4. If valid, server sets `admin_auth` cookie
5. User redirected to `/admin`

### 2. Content Editing Flow
1. Admin dashboard loads content via `GET /api/content`
2. User edits content in the UI
3. User clicks "Save All Changes"
4. PUT request sent to `/api/content` with updated data
5. Server updates `data/content.json`
6. Frontend components refetch and display new content

### 3. Route Protection
- Middleware intercepts all `/admin/*` requests
- Checks for valid `admin_auth` cookie
- Allows `/admin/login` without auth
- Redirects other protected routes to login if no auth

---

## Frontend Component Integration

### BlogSection Component
```tsx
useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch("/api/content")
    const data = await response.json()
    setBlogPosts(data.blogPosts)
  }
  fetchPosts()
}, [])
```

### ExploreDestinations Component
```tsx
useEffect(() => {
  const fetchContent = async () => {
    const response = await fetch("/api/content")
    const data = await response.json()
    setDestinations(data.destinations)
    setPromos(data.promoBanners)
  }
  fetchContent()
}, [])
```

---

## Future Enhancements

### Database Migration
To migrate from JSON to a database:

1. **Create database schema** (PostgreSQL/Supabase example)
   ```sql
   CREATE TABLE blog_posts (
     id SERIAL PRIMARY KEY,
     title TEXT NOT NULL,
     description TEXT,
     image TEXT,
     date TEXT,
     categories TEXT[]
   );
   ```

2. **Update API routes** to query database instead of JSON files

3. **No frontend changes needed** - Components already fetch from API

### Additional Features
- [ ] Image upload functionality
- [ ] Draft/publish workflow
- [ ] Content versioning
- [ ] Multiple admin users with different roles
- [ ] Audit logs
- [ ] Rich text editor for descriptions

---

## Security Notes

⚠️ **Current Implementation (Development Only)**
- Hardcoded credentials are visible in source code
- No bcrypt or password hashing
- Simple cookie-based auth

**For Production:**
1. Use environment variables for credentials
2. Implement bcrypt for password hashing
3. Use JWT tokens with refresh tokens
4. Add rate limiting on login endpoint
5. Implement CORS properly
6. Use HTTPS only
7. Set secure cookie flags appropriately
8. Add role-based access control (RBAC)
9. Implement audit logging

---

## Testing

### Login Test
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"afraa","password":"1234"}'
```

### Fetch Content Test
```bash
curl http://localhost:3000/api/content
```

### Update Content Test
```bash
curl -X PUT http://localhost:3000/api/content \
  -H "Content-Type: application/json" \
  -d '{"blogPosts":[...],"promoBanners":[...],"destinations":[...]}'
```

---

## Troubleshooting

### Issue: "Cookie not being set"
- Check browser developer tools > Application > Cookies
- Ensure `admin_auth` cookie exists with value `"true"`
- Verify secure/httpOnly flags in development

### Issue: "Redirected to login on every page load"
- Middleware is correctly catching unauthenticated requests
- Verify cookie is being sent with requests
- Check browser console for cookie errors

### Issue: "Changes not appearing on frontend"
- Ensure `data/content.json` was updated (check file timestamps)
- Verify API PUT response shows `"success": true`
- Try refreshing the browser to refetch content
- Check browser network tab for API response

### Issue: "File not found in deployment"
- Ensure `data/` directory exists in deployed project
- Add `data/` to `.gitignore` if using file storage
- Consider using database for production deployments

---

## Deployment to Vercel

1. Connect your GitHub repository to Vercel
2. Vercel automatically detects Next.js
3. Ensure `data/` directory exists and is tracked
4. For file-based storage on Vercel:
   - Files persist only during the current deployment
   - Use database for persistent storage across deployments
5. No additional environment variables required for this simple setup

---

## Questions?

Refer to:
- API routes: `/app/api/`
- Components: `/components/admin/`
- Data: `/data/content.json`
- Middleware: `/middleware.ts`
