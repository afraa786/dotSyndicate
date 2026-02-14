# Travel Syndicate Admin System

A lightweight admin panel for managing blog posts, promo banners, and destinations on the Travel Syndicate website.

---

## 📚 Documentation

Choose your reading level:

| Guide | Purpose | Read Time |
|-------|---------|-----------|
| **[ADMIN_QUICK_START.md](./ADMIN_QUICK_START.md)** | Get started in 2 minutes | 5 min |
| **[ADMIN_SETUP.md](./ADMIN_SETUP.md)** | Comprehensive technical guide | 15 min |
| **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** | What was built and how | 10 min |
| **[VERIFICATION_CHECKLIST.md](./VERIFICATION_CHECKLIST.md)** | Test everything | 20 min |

---

## 🚀 Quick Start

### Access the Admin Panel
```
URL: http://localhost:3000/admin/login
Username: afraa
Password: 1234
```

### Edit Content
1. Login with credentials above
2. Choose what to edit: Blog Posts, Promo Banners, or Destinations
3. Make changes
4. Click "Save All Changes"
5. View the website - changes appear instantly!

---

## ✨ What's Included

### Admin Dashboard (`/admin`)
- Tabbed interface for managing content
- Real-time editing
- Save/discard changes
- Logout button

### Three Content Types

1. **Blog Posts** - Edit title, date, description, image, categories
2. **Promo Banners** - Edit tag, title, subtitle, image
3. **Destinations** - Edit name, image path

### Backend Infrastructure

- `GET /api/content` - Fetch all content
- `PUT /api/content` - Update content (protected)
- `POST /api/auth/login` - Login
- `POST /api/auth/logout` - Logout

### Storage

- JSON file-based storage (`/data/content.json`)
- No database required
- Easy to migrate to database later

---

## 🔐 Authentication

**Type:** Simple hardcoded authentication

**Credentials:**
- Username: `afraa`
- Password: `1234`

**How it works:**
1. User logs in via `/admin/login`
2. Server validates credentials
3. Server sets HTTP-only cookie
4. Middleware protects `/admin` routes
5. Cookie verified on every request

---

## 📁 Project Structure

```
app/
├── admin/
│   ├── login/page.tsx              # Login page
│   └── page.tsx                    # Dashboard
├── api/
│   ├── auth/
│   │   ├── login/route.ts          # Login endpoint
│   │   └── logout/route.ts         # Logout endpoint
│   └── content/route.ts            # Content CRUD

components/
├── admin/
│   ├── blog-post-editor.tsx
│   ├── promo-banner-editor.tsx
│   └── destination-editor.tsx
├── blog-section.tsx                # UPDATED: uses API
├── explore-destinations.tsx        # UPDATED: uses API
└── travel-simba-exclusives.tsx    # UPDATED: uses API

data/
└── content.json                    # Content storage

middleware.ts                       # Route protection
```

---

## ✅ Features

### Content Management
- ✅ Add/edit/delete blog posts
- ✅ Add/edit/delete promo banners
- ✅ Add/edit/delete destinations
- ✅ Real-time changes on frontend
- ✅ Save all changes at once

### Security
- ✅ Protected admin routes
- ✅ Session-based authentication
- ✅ HTTP-only cookies
- ✅ Automatic logout on expiration

### Developer Experience
- ✅ Minimal dependencies
- ✅ Works with Vercel
- ✅ No database required
- ✅ Easy to extend
- ✅ TypeScript support

### Frontend
- ✅ Hero section unchanged
- ✅ DiscoverStays unchanged
- ✅ Design styling identical
- ✅ Data fetched from API
- ✅ Graceful loading states

---

## 📊 Data Schema

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
  "subtitle": "on Hotels Booking",
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

## 🔄 How Changes Work

```
1. Admin edits content in dashboard
   ↓
2. Admin clicks "Save All Changes"
   ↓
3. PUT request sent to /api/content
   ↓
4. Server updates /data/content.json
   ↓
5. Frontend fetches GET /api/content
   ↓
6. Website displays updated content
```

**Real-time:** Changes appear on the website after saving (no page refresh needed if browser is open).

---

## 🧪 Testing

### Test Login
1. Go to `http://localhost:3000/admin/login`
2. Enter `afraa` / `1234`
3. Should redirect to dashboard

### Test Editing
1. In dashboard, change a blog post title
2. Click "Save All Changes"
3. Visit homepage
4. Blog post title should be updated

### Test Route Protection
1. Open new incognito tab
2. Go to `http://localhost:3000/admin`
3. Should redirect to login page

---

## 🚀 Deployment

### To Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy as normal
4. Admin system works on live site

### Important for Vercel
- File changes persist during current deployment
- For long-term use, migrate to a database
- See `ADMIN_SETUP.md` for database migration guide

---

## 🔮 Future Enhancements

### Phase 2 - Database Migration
- Replace JSON storage with PostgreSQL/Supabase
- No frontend changes needed
- Zero downtime migration

### Phase 3 - Advanced Features
- Image upload functionality
- Multiple admin users
- Role-based permissions
- Draft/publish workflow
- Content versioning
- Audit logs

### Phase 4 - Automation
- Scheduled content updates
- Analytics integration
- SEO optimization tools
- A/B testing support

---

## ⚠️ Security Notes

### Current (Development)
✓ HTTP-only cookies  
✓ Route protection  
✓ Basic session management  

### NOT for Production
⚠️ Hardcoded credentials  
⚠️ No password hashing  
⚠️ Single user only  
⚠️ No rate limiting  

### For Production
1. Use environment variables for credentials
2. Add bcrypt password hashing
3. Implement JWT tokens
4. Add rate limiting
5. Use database instead of files
6. Add CSRF protection
7. Enable HTTPS only
8. Implement audit logging

See `ADMIN_SETUP.md` "Security Notes" section for details.

---

## 🐛 Troubleshooting

### Login Not Working
- Username is `afraa` (not "admin")
- Password is `1234` (four digits)
- Case sensitive!

### Changes Not Appearing
- Refresh the website page
- Check browser's Network tab for API errors
- Verify `/data/content.json` is writable

### Redirected to Login Unexpectedly
- Session may have expired (7 days)
- Login again
- This is normal behavior

### 404 on `/admin`
- Ensure `middleware.ts` exists
- Restart development server
- Check for typos in file names

---

## 📞 Support

### Quick Reference
- **Login URL:** `http://localhost:3000/admin/login`
- **Dashboard URL:** `http://localhost:3000/admin`
- **Data File:** `/data/content.json`
- **API:** `/api/content`, `/api/auth/*`

### Documentation
- **Getting Started:** `ADMIN_QUICK_START.md`
- **Technical Details:** `ADMIN_SETUP.md`
- **Implementation:** `IMPLEMENTATION_SUMMARY.md`
- **Testing:** `VERIFICATION_CHECKLIST.md`

### Code Files
- **Auth Routes:** `app/api/auth/`
- **Content API:** `app/api/content/route.ts`
- **Admin Pages:** `app/admin/`
- **Editors:** `components/admin/`

---

## 📋 Checklist Before Going Live

- [ ] Tested login functionality
- [ ] Tested content editing
- [ ] Tested route protection
- [ ] Verified Hero section unchanged
- [ ] Verified DiscoverStays unchanged
- [ ] Verified styling identical
- [ ] Tested on mobile
- [ ] Checked console for errors
- [ ] Verified API endpoints work
- [ ] Tested logout
- [ ] Read security notes
- [ ] Backup content.json
- [ ] Ready to deploy!

---

## 🎉 You're All Set!

The admin system is ready to use. Start by:

1. **Read** `ADMIN_QUICK_START.md` (5 minutes)
2. **Login** to `http://localhost:3000/admin/login`
3. **Edit** some content
4. **Save** and see changes on website
5. **Deploy** to Vercel when ready

---

## 📝 License

This admin system is part of the Travel Syndicate project.

---

## Questions?

See the documentation files listed at the top of this README.

**Happy managing! 🚀**
