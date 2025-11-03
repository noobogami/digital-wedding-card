# راهنمای سفارشی‌سازی | Customization Quick Guide

## 🎯 Quick Checklist

Follow these steps to customize your wedding website:

### ✅ Step 1: Add Your Information

Search for `PLACEHOLDER` in all files and replace with your actual information:

1. **Hero.jsx** - Couple names, date, time
2. **Details.jsx** - Ceremony details, contact info
3. **Location.jsx** - Venue address, coordinates
4. **App.jsx** - Footer year

### ✅ Step 2: Add Background Music

```bash
# Add your music file to:
public/music/background-music.mp3
```

### ✅ Step 3: Setup Google Maps

1. Get API key from: https://console.cloud.google.com/
2. Update in `src/components/Location.jsx`:
   - Replace `YOUR_GOOGLE_MAPS_API_KEY`
   - Update `latitude` and `longitude`

### ✅ Step 4: Test Your Site

```bash
npm run dev
```

Visit: http://localhost:5173

### ✅ Step 5: Build and Deploy

```bash
npm run build
```

Upload the `dist` folder to your hosting provider.

---

## 📝 Detailed Replacement List

### src/components/Hero.jsx
```javascript
Line 79: "عروس و داماد" → Your couple names
Line 93: "روز جمعه" → Actual day
Line 95: "۱۵ آذر ۱۴۰۴" → Actual date
Line 97: "ساعت ۱۸:۰۰" → Actual time
```

### src/components/Details.jsx
```javascript
Lines 28-55: Update all ceremony details
Line 92: Update ceremony description
Line 134: Add your contact phone
```

### src/components/Location.jsx
```javascript
Line 14: venueAddress → Your venue address
Line 17: googleMapsApiKey → Your API key
Lines 18-19: latitude, longitude → Your coordinates
Lines 109-115: Parking and accessibility info
```

### src/App.jsx
```javascript
Line 74: "۱۴۰۴" → Current Persian year
```

---

## 🎨 Color Customization

Edit `tailwind.config.js`:

```javascript
colors: {
  wedding: {
    gold: '#D4AF37',
    rose: '#E8C4C4',
    cream: '#FFF8F0',
    burgundy: '#800020',
  }
}
```

---

## 📱 Testing Checklist

- [ ] All text is in Farsi and displays correctly
- [ ] Date and time are correct
- [ ] Venue address is correct
- [ ] Google Maps shows correct location
- [ ] Music plays (after user interaction)
- [ ] Music controls work
- [ ] Site is responsive on mobile
- [ ] All animations work smoothly
- [ ] Contact information is correct

---

## 🚀 Deployment

### Option 1: Vercel (Easiest)
1. Push to GitHub
2. Import to Vercel
3. Deploy!

### Option 2: Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify
3. Done!

### Option 3: Any Hosting
1. Run `npm run build`
2. Upload `dist` folder to your server
3. Configure domain

---

## 🆘 Need Help?

Common issues and solutions are in README.md

موفق باشید! 💕

