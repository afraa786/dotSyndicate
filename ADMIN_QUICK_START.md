# 🚀 Admin System - Quick Start

## In 2 Minutes

### 1. Login
```
Go to: http://localhost:3000/admin/login
Username: afraa
Password: 1234
```

### 2. Edit Content
- Click on the tab you want to edit (Blog Posts, Promo Banners, or Destinations)
- Make changes
- Add or delete items as needed

### 3. Save
- Click "Save All Changes"
- See success message
- Check the website - changes appear instantly!

---

## What Can You Edit?

### 📝 Blog Posts
- Title
- Date
- Description
- Image path
- Categories (add/remove multiple)
- Add/delete entire posts

### 🎯 Promo Banners
- Tag
- Title
- Subtitle
- Image path
- Add/delete banners

### 🌍 Destinations
- Name
- Image path
- Add/delete destinations

---

## How It Works

```
YOU              ADMIN               SERVER              DATA FILE
 │                                     │                      │
 ├──→ /admin/login                     │                      │
 │    (enters afraa/1234)              │                      │
 │                  │                  │                      │
 │                  ├──→ POST /api/auth/login                 │
 │                  │    (validates credentials)              │
 │                  │←─── Sets admin_auth cookie              │
 │                  │                  │                      │
 │←─── Redirects to /admin             │                      │
 │                  │                  │                      │
 │                  ├──→ GET /api/content                      │
 │                  │←─── Loads content                        ├─ /data/content.json
 │                  │                  │                      │
 │    (edits content)                  │                      │
 │                  │                  │                      │
 │    (saves)       │                  │                      │
 │                  ├──→ PUT /api/content (with new data)      │
 │                  │    (validates auth cookie)              │
 │                  │←─── Saves to JSON                       ├ Updates file
 │                  │                  │                      │
 │    (views website)                  │                      │
 │    (fetches new content)            │                      │
 │                  ├──→ GET /api/content                      │
 │                  │←─── Returns updated data                ├ Reads file
 │                  │                  │                      │
 │    (sees changes!)                  │                      │
```

---

## The Files

Where things are stored:

```
/data/content.json          ← ALL YOUR CONTENT GOES HERE
  ├── blogPosts (6 posts)
  ├── promoBanners (3 banners)
  └── destinations (6 places)
```

---

## Common Tasks

### Add a Blog Post
1. Go to Blog Posts tab
2. Click "Add New Blog Post"
3. Fill in title, date, description
4. Add categories
5. Set image path
6. Click "Save All Changes"

### Change a Promo Banner
1. Go to Promo Banners tab
2. Edit the banner you want (change title, subtitle, etc)
3. Click "Save All Changes"

### Add a New Destination
1. Go to Destinations tab
2. Click "Add New Destination"
3. Enter name and image path
4. Click "Save All Changes"

### Delete Something
1. Find the item
2. Click the trash icon
3. Click "Save All Changes"

### Undo Changes
1. Made a mistake?
2. Click "Discard Changes" (before saving)
3. Everything reverts

### Logout
- Click "Logout" button
- You'll go back to login page

---

## Admin URLs

| Page | URL |
|------|-----|
| Login | `http://localhost:3000/admin/login` |
| Dashboard | `http://localhost:3000/admin` |

---

## Behind the Scenes

### Authentication
- Simple hardcoded user (afraa/1234)
- Cookie-based sessions
- 7-day expiration

### Storage
- JSON file storage (no database)
- Changes persist across restarts
- Can be migrated to database later

### Security
- HTTP-only cookies (can't be accessed by JavaScript)
- Protected routes (middleware checks auth)
- Simple but secure for a single admin user

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Login doesn't work | Check spelling: username is `afraa`, password is `1234` |
| Redirected to login after saving | This is normal - session might have expired, login again |
| Changes don't appear | Refresh the website page to see updates |
| Getting "Unauthorized" error | Make sure you're logged in (check /admin/login) |
| Dashboard shows "Loading..." | Wait a moment, server is fetching data |
| Can't edit something | Make sure auth cookie is still valid |

---

## What Changed on the Website?

### Frontend automatically updated to:
- Fetch blog posts from API instead of hardcoded array
- Fetch destinations from API instead of hardcoded array
- Fetch promo banners from API instead of hardcoded array

### Frontend NOT changed:
- Hero section (exactly the same)
- DiscoverStays component (exactly the same)
- All styling (exactly the same)
- Everything looks identical!

---

## API Endpoints (For Developers)

```bash
# Get all content (no login needed)
curl http://localhost:3000/api/content

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"afraa","password":"1234"}'

# Update content (requires auth cookie)
curl -X PUT http://localhost:3000/api/content \
  -H "Content-Type: application/json" \
  -d '{"blogPosts":[...],"promoBanners":[...],"destinations":[...]}'
```

---

## Content Format Examples

### Blog Post
```json
{
  "categories": ["Travel Tips"],
  "date": "Jan 25, 2025",
  "title": "Essential Packing Guide",
  "description": "Everything you need to know before traveling",
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

## Going Live on Vercel

1. Push your code to GitHub
2. Connect to Vercel
3. Deploy as normal
4. Admin system works on Vercel!

### Note on Vercel
- File changes persist during current deployment
- For production, consider using a database
- See `ADMIN_SETUP.md` for database migration guide

---

## Next Steps

### Short Term
- Use the admin system to manage content
- Update blog posts, banners, and destinations
- See changes instantly on the website

### Long Term
- Migrate from JSON to a database
- Add image upload functionality
- Add more admin users
- Add draft/publish workflow
- Add audit logs

---

## Quick Links

📖 **Full Setup Guide:** `ADMIN_SETUP.md`  
📋 **Implementation Details:** `IMPLEMENTATION_SUMMARY.md`  
✅ **Testing Checklist:** `VERIFICATION_CHECKLIST.md`  

---

## That's It!

You now have a working admin system. Go edit some content! 🎉

**Happy editing!**
