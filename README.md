# Sweet Print Studio — desktop app

## Quickest way (no install)
Double-click `index.html`. It opens in your browser and works offline.
Your sets are saved in that browser automatically.

## Install it as a real desktop app (Windows or Mac)
1. Install Node.js (LTS) from https://nodejs.org
2. Open a terminal in this folder and run:
       npm install
3. Try it:
       npm start
4. Build an installer:
       npm run build:win     (Windows .exe installer)
       npm run build:mac     (Mac .dmg — run this on a Mac)
   The installer appears in the `dist` folder.

## Backups
Sets are stored inside the app. Use "Save set file" on the dashboard to keep a
backup or move a set to another computer, and "Open saved set file…" to load it.

## Google Fonts
Pick a font from the font list in the text panel, or type any font name from
fonts.google.com into "Add a Google Font". Fonts download the first time you
use them, so you need to be online for that.
