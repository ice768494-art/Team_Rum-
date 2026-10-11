# TEAM RUM Official Website

A responsive static website for TEAM RUM.

## Included
- Black + gold responsive design
- TEAM RUM hero/logo section
- Official Telegram groups:
  - https://t.me/Team_Rum
  - https://t.me/Tamil_New_Animes
- Searchable/filterable member section
- Admin section
- Updates section
- Mobile navigation
- Telegram join buttons

## Add real members
Open `script.js` and edit the `members` array:

{
  name: "Your Name",
  username: "@username",
  role: "admin", // or "member"
  avatar: "images/photo.jpg",
  initial: "Y",
  bio: "Your role"
}

For a real automatic Telegram member list, a backend/bot is required. A static website cannot securely fetch all group members directly from Telegram.

## Run
Open `index.html` in a browser, or upload the three files to a static host such as GitHub Pages, Cloudflare Pages, Netlify or Vercel.
