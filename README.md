# کارت عروسی دیجیتال | Digital Wedding Card

یک وب‌سایت زیبا و مدرن برای مراسم عروسی با پشتیبانی کامل از زبان فارسی

A beautiful and modern wedding website with full Persian/Farsi language support.

## ✨ Features

- 🎨 Beautiful, modern design with elegant animations
- 🇮🇷 Full RTL (Right-to-Left) support for Farsi text
- 🎵 Background music player with controls
- 🗺️ Google Maps integration for venue location
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with React + Vite
- 🎭 Smooth animations with Framer Motion
- 💝 Romantic color scheme and effects

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy.

## 🎨 Customization Guide

### 1. Replace Placeholder Text

All placeholder content is marked with `PLACEHOLDER` comments in the code. Search for these comments and replace with your actual information:

#### **Hero Section** (`src/components/Hero.jsx`)
- Line ~79: Replace "عروس و داماد" with couple names
- Line ~93: Replace with actual wedding date in Persian
- Line ~95: Replace with ceremony time

#### **Details Section** (`src/components/Details.jsx`)
- Lines 28-55: Update ceremony details (date, time, type, guests message)
- Line ~92: Update ceremony description text
- Line ~134: Add contact phone number

#### **Location Section** (`src/components/Location.jsx`)
- Line ~14: Replace with actual venue address
- Lines 17-19: Add your Google Maps API key and coordinates
- Lines ~109-115: Update parking and accessibility information

#### **Footer** (`src/App.jsx`)
- Line ~74: Update the year

### 2. Add Background Music

1. Create a `public/music` directory:
```bash
mkdir -p public/music
```

2. Add your music file (MP3 format recommended):
   - Place your music file in `public/music/`
   - Name it `background-music.mp3` or update the path in `src/components/MusicPlayer.jsx`

3. The music player will:
   - Attempt to auto-play (browser policies may require user interaction)
   - Loop continuously
   - Show volume controls
   - Be minimizable

### 3. Setup Google Maps

1. Get a Google Maps API key:
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one
   - Enable "Maps Embed API"
   - Create credentials (API Key)
   - Copy your API key

2. Add your API key in `src/components/Location.jsx`:
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key
   - Update latitude and longitude with your venue coordinates

3. Get your venue coordinates:
   - Search your venue on [Google Maps](https://maps.google.com)
   - Right-click on the location
   - Click on the coordinates to copy them
   - Update `latitude` and `longitude` in Location.jsx

### 4. Customize Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  wedding: {
    gold: '#D4AF37',      // Customize these colors
    rose: '#E8C4C4',
    cream: '#FFF8F0',
    burgundy: '#800020',
  }
}
```

### 5. Add Wedding Photos (Optional)

To add a background image to the hero section:

1. Add your image to `public/images/`
2. Update Hero.jsx with a background image style

## 📁 Project Structure

```
digital-wedding-card/
├── public/
│   └── music/              # Music files go here
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Main hero section with couple names
│   │   ├── Details.jsx     # Ceremony details
│   │   ├── Location.jsx    # Venue address and map
│   │   └── MusicPlayer.jsx # Background music player
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **Vazir Font** - Persian/Farsi font

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Modern mobile browsers

## 🚀 Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to your gh-pages branch
```

### Any Static Hosting
Build the project and upload the `dist` folder to your hosting provider.

## 🔍 Tips for Best Results

1. **Music File Size**: Keep music files under 5MB for faster loading
2. **Image Optimization**: Compress images before adding them
3. **Mobile Testing**: Always test on mobile devices
4. **Browser Testing**: Test in different browsers
5. **API Key Security**: For production, restrict your Google Maps API key to your domain

## 📝 Common Issues

### Music not playing automatically
- Modern browsers block auto-play. Users need to click the play button first.
- This is a browser security feature and cannot be bypassed.

### Map not showing
- Make sure you've added your Google Maps API key
- Check that the API key has the correct permissions
- Verify the coordinates are correct

### Persian text showing incorrectly
- Make sure the HTML has `dir="rtl"` and `lang="fa"` attributes
- Verify the Vazir font is loading correctly

## 📄 License

Free to use for personal wedding websites.

## 💝 Support

If you encounter any issues or need help with customization, feel free to:
- Check the PLACEHOLDER comments in the code
- Review this README carefully
- Test the site after each change

---

**Made with ❤️ for your special day**

به امید روزهای خوش و پر از عشق 💕

