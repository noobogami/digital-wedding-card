# 🎨 Customization Guide

This guide will help you customize your digital wedding card easily!

## ⚡ Quick Start - Config File (Easiest Way!)

**All main wedding details are in one file:** `src/config.js`

Just edit this file to customize:
- Couple names
- Event type and date
- Location and coordinates
- Custom message
- Colors

### Example `src/config.js`:

```javascript
export const weddingConfig = {
   // Couple Names
   couple: {
      bride: "عروس",
      groom: "دوماد",
   },

   // Event Details
   event: {
      type: "جشن عروسی", // Event type (e.g., "جشن عروسی", "جشن نامزدی")
      date: {
         dayName: "جمعه", // Day of week in Farsi
         persianDate: "۸ مرداد ۱۲۹۳", // Persian date
         time: "۰۳:۰۰", // Time in 24-hour format
      },
   },

   // Location Details
   location: {
      name: "تالار فلان",
      address: "فلان شهر، فلان جا",
      coordinates: {
         latitude: 42.7638266,
         longitude: 12.4701472,
      },
   },

   // Custom Message (on the back of card)
   message: {
      intro: "قرار است قصه دلهایمان از همین جا آغاز شود.",
      coupleNames: "عروس و دوماد", // Can be different from couple.bride/groom if needed
      body: "با عشق قدم در مسیر تازه‌ای گذاشته‌اند و چه زیبا و خاطره‌انگیز است اگر شما هم شریک این لبخند و شادی باشید و این شب را به‌یادماندنی و پرشورتر کنید.",
   },

   // Colors (Tailwind CSS classes)
   theme: {
      // You can customize gradient colors here
      // These are Tailwind CSS gradient classes
      titleGradient: "from-purple-600 via-pink-600 to-red-600",
      subtitleGradient: "from-pink-500 to-purple-600",
      buttonGradient: "from-purple-500 via-pink-500 to-red-500",
   },
};
```

## 🎵 Background Music

1. Place your music file in: `public/music/background-music.mp3`
2. The music will auto-play when the envelope opens
3. Users can control it with the floating music player

### Supported Formats:
- MP3 (recommended)
- OGG
- WAV

## 🗺️ Location & Map

The map and navigation are automatically generated from the coordinates in `config.js`!

### How to get coordinates:

1. Go to [Google Maps](https://www.google.com/maps)
2. Find your venue
3. Right-click on the location
4. Click on the coordinates to copy them
5. Update `config.js`:
   ```javascript
   coordinates: {
     latitude: 42.7638266,  // First number
     longitude: 12.4701472, // Second number
   }
   ```

## 🎨 Color Customization

You can customize the gradient colors in `config.js`:

```javascript
theme: {
  // Format: "from-COLOR-SHADE via-COLOR-SHADE to-COLOR-SHADE"
  titleGradient: "from-purple-600 via-pink-600 to-red-600",
  subtitleGradient: "from-pink-500 to-purple-600",
  buttonGradient: "from-purple-500 via-pink-500 to-red-500",
}
```

### Available Colors:
- `red`, `pink`, `purple`, `blue`, `green`, `yellow`, `orange`
- Shades: `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`

### Examples:
- `"from-blue-400 to-purple-600"` - Blue to purple
- `"from-pink-500 via-red-500 to-orange-500"` - Pink to red to orange
- `"from-green-400 to-blue-500"` - Green to blue

## 📱 Social Media Preview

When sharing on Telegram, WhatsApp, etc., a preview image will appear.

### To customize the preview:

1. Create an image (1200x630 pixels recommended)
2. Save it as: `public/preview.jpg`
3. Update `index.html` meta tags if needed

## 🚀 After Customization

### 1. Test Locally:
```bash
npm run dev
```
Open http://localhost:5173 in your browser

### 2. Build for Production:
```bash
npm run build
```

### 3. Deploy:
```bash
# Rebuild Docker container
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### 4. Clear CDN Cache (if using ArvanCloud):
- Go to ArvanCloud dashboard
- Select your domain
- Clear cache for the entire site

## 🎯 Advanced Customization

If you need more customization, you can edit these files:

- **`src/components/Hero.jsx`** - Main card component
- **`src/components/MusicPlayer.jsx`** - Music player
- **`src/index.css`** - Global styles
- **`tailwind.config.js`** - Tailwind CSS configuration

## 📝 Tips

1. **Test on mobile devices** - Most guests will view on mobile
2. **Keep message short** - Long text may not fit in the card
3. **Use high-quality music** - Better audio = better experience
4. **Test the coordinates** - Click the navigation button to verify location

## ❓ Need Help?

Check your browser's console (F12) for any errors. Common issues:

- **Music not playing**: Check file path and format
- **Map not showing**: Verify coordinates are correct
- **Styles not working**: Make sure Tailwind classes are valid

---

Happy customizing! 💝✨
