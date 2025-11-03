# Latest Updates - Card Switching Design

## ✨ Major Changes

### 🎴 Single Card Experience
- **Removed**: Footer, separate Details section, Location section
- **New**: Single card that switches between two states
- **Card dimensions**: Fixed size (`min-h-[600px]`), consistent across both states

### 🔄 Card Switching Animation
The card now transitions between two views with a sophisticated 3D slide animation:

#### Title Card (Main View)
- Couple names
- Wedding title
- Date and time (minimal, clean design)
- "مشاهده جزئیات" button
- Decorative hearts

#### Details Card (Shows on click)
- "جزئیات مراسم" header
- **Minimal information**:
  - 📅 Date & Time with icon
  - 📍 Location/Venue with icon
  - 💬 Simple welcome message
- "بازگشت" (Back) button

### 🎭 Animation Style
**Not a simple flip!** The animation features:
- Horizontal slide (left/right)
- 3D rotation effect (`rotateY`)
- Fade in/out
- Smooth easing
- Exit animations that mirror entry

### 📝 Minimal Design
Details card shows only essential information:
- Clean icon + text layout
- No large cards
- No unnecessary sections
- Simple, elegant presentation

## 🎯 User Experience

1. **Land on page** → See title card with animated hearts background
2. **Click "مشاهده جزئیات"** → Card smoothly transitions to details
3. **Click "بازگشت"** → Card transitions back to title
4. **Background stays fixed** → Hearts continue animating behind the card

## 📁 Changed Files

- ✅ `src/components/Hero.jsx` - Combined title and details into single component
- ✅ `src/App.jsx` - Removed unnecessary sections
- ❌ `Details.jsx` - No longer used
- ❌ `Location.jsx` - No longer used
- ✅ `MusicPlayer.jsx` - Still active

## 🎨 Design Features

### Title Card
- Large couple names
- Clean date display
- Centered layout
- Breathing room
- Decorative hearts

### Details Card  
- Compact information
- Icon-based design
- Soft background colors
- Quick to read
- Professional look

## 🔧 Customization Points

All placeholders marked with `PLACEHOLDER`:

### Title Card
- Line 139: Couple names
- Line 168-176: Date and time

### Details Card
- Line 248: Full date/time
- Line 262: Venue address
- Line 276: Welcome message

## 🚀 Test It Now

Visit: **http://localhost:5173**

1. See the card with animated hearts
2. Click "مشاهده جزئیات" to see the transition
3. Click "بازگشت" to go back
4. Enjoy the smooth animations!

---

**Clean. Minimal. Elegant. 💝**

