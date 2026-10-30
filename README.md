# Sushma & Sai Rahul Wedding Invitation Website

A responsive, elegant wedding invitation and celebration web application built with **React 19**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 How to Run Locally in VS Code

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (version 18, 20, or higher).
To check, run in your terminal:
```bash
node -v
npm -v
```

---

### Step 1: Open the Project in VS Code
1. Unzip the downloaded `sushma-sai-rahul-wedding.zip` file into a folder of your choice (e.g. `sushma-sai-rahul-wedding`).
2. Open **VS Code**.
3. Go to **File** > **Open Folder...** (or on Mac: `Cmd + O`), and select the unzipped project folder.
4. Open the integrated terminal in VS Code:
   - Shortcut: ``Ctrl + ` `` (Windows/Linux) or ``Cmd + ` `` (macOS)
   - Or from top menu: **Terminal** > **New Terminal**

---

### Step 2: Install Dependencies
In the VS Code terminal, run:
```bash
npm install
```
*(This installs React, Vite, Tailwind CSS, Lucide icons, etc.)*

---

### Step 3: Start the Local Development Server
Run:
```bash
npm run dev
```

You will see output similar to:
```
  VITE v8.x.x  ready in 300 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://...
```

Click the URL or open your browser and navigate to:
👉 **`http://localhost:3000`**

Any changes you make in VS Code will update in real time!

---

## 🛠 Project Structure & Where to Edit

| File Path | What to Edit |
| :--- | :--- |
| `src/data/weddingData.ts` | **Main details**: Bride & groom names, exact dates, Muhurtham time, parents' names, venue address, phone numbers, and ceremonial schedule. |
| `src/components/Hero.tsx` | Hero banner, Sanskrit invocations, countdown timer, and quick calendar links. |
| `src/components/CoupleSection.tsx` | Bride & groom introductions, quotes, and the "Our Story" milestone chapters. |
| `src/components/MuhurthamSection.tsx` | Details about the **12 Nov 2026, 9:27 PM** Muhurtham rituals (Jeelakarra-Bellam, Mangalasutra Dharana, Talambralu, Saptapadi). |
| `src/components/EventsTimeline.tsx` | Schedule and attire guidance for Haldi, Sangeet, Kalyanam, and Reception. |
| `src/components/VenueSection.tsx` | Venue address, Google Maps links, and transportation guidance. |
| `src/components/GallerySection.tsx` | Pre-wedding photo gallery and captions. |
| `src/components/WishesGuestbook.tsx` | Guest blessings wall and interactive wishes form. |
| `src/components/RSVPModal.tsx` | Guest attendance confirmation and dietary options. |
| `src/components/SaveTheDateCard.tsx` | Digital printable invitation card (Lagna Patrika). |
| `src/components/AudioPlayer.tsx` | Auspicious Shehnai / Bansuri wedding music player (synthesized Web Audio API). |
| `src/components/PetalShower.tsx` | Falling flower petals canvas animation and Pushpa Vrushti celebration. |
| `src/assets/images/` | High-resolution wedding photography assets. |

---

## 📦 Building for Production
When you are ready to build:
```bash
npm run build
```
This generates the optimized production bundle inside the `dist/` directory.

---

## 🌐 Deploying to the Web

You can deploy this project to any hosting service:
- **Vercel**: Import your repository or run `npx vercel`
- **GitHub Pages**: Run `npm run build` and publish the `dist/` folder
- **Netlify**: Drag and drop the `dist/` folder or link your GitHub repo
- **Cloud Run / Firebase Hosting**: Use standard Vite static hosting
