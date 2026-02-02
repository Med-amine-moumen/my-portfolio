# Portfolio Setup Guide

## Quick Start

Follow these steps to get your portfolio up and running:

### 1. Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Your portfolio will be available at `http://localhost:5173`

## Customization Checklist

### 🎯 Essential Changes

- [ ] Update your name in `src/components/Hero.jsx`
- [ ] Update your title/role in `src/components/Hero.jsx`
- [ ] Change social media links in `src/components/Hero.jsx`
- [ ] Update email address in `src/components/Contact.jsx`
- [ ] Add your photo/avatar in `src/components/About.jsx`
- [ ] Modify the about text in `src/components/About.jsx`
- [ ] Update your location in `src/components/Contact.jsx`
- [ ] Update your name in `src/components/Footer.jsx`
- [ ] Update meta tags in `index.html`

### 📁 Project Content

- [ ] Replace project data in `src/components/Projects.jsx`
- [ ] Add real project images (replace emoji placeholders)
- [ ] Update project descriptions
- [ ] Add live demo URLs
- [ ] Add GitHub repository links

### 🎨 Skills Section

- [ ] Update skills list in `src/components/Skills.jsx`
- [ ] Add/remove skills based on your expertise
- [ ] Change skill icons if desired

### 🎨 Styling (Optional)

- [ ] Change color scheme in `tailwind.config.js`
- [ ] Modify fonts in `tailwind.config.js`
- [ ] Adjust animations in `src/index.css`

## File Structure Guide

```
src/
├── components/
│   ├── Navbar.jsx       - Top navigation bar
│   ├── Hero.jsx         - Landing section with intro
│   ├── About.jsx        - About me section
│   ├── Projects.jsx     - Portfolio projects
│   ├── Skills.jsx       - Technical skills
│   ├── Contact.jsx      - Contact form
│   ├── Footer.jsx       - Footer with links
│   ├── ScrollToTop.jsx  - Scroll to top button
│   └── Loader.jsx       - Loading animation
├── App.jsx              - Main app component
├── main.jsx             - Entry point
└── index.css            - Global styles
```

## Common Tasks

### Change Primary Color

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
}
```

### Add a New Project

Edit `src/components/Projects.jsx` and add to the projects array:
```javascript
{
  title: "Project Name",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  liveUrl: "https://...",
  githubUrl: "https://...",
  image: "🎨" // or image URL
}
```

### Add a New Skill

Edit `src/components/Skills.jsx` and add to the skills array:
```javascript
{ name: "Skill Name", icon: "🚀" }
```

## Building for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

## Deployment Options

### Vercel (Easiest)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

## Troubleshooting

### Port Already in Use
If port 5173 is busy, Vite will automatically use the next available port.

### Dependencies Issues
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build Errors
Make sure all imports are correct and all required dependencies are installed.

## Need Help?

- Check the main README.md for detailed documentation
- Review the component files for inline comments
- Visit [Vite Documentation](https://vitejs.dev/)
- Visit [React Documentation](https://react.dev/)
- Visit [Tailwind CSS Documentation](https://tailwindcss.com/)

## Next Steps

1. Customize all personal information
2. Add your real projects
3. Add professional images
4. Test responsiveness on different devices
5. Deploy to your preferred platform
6. Share your portfolio link!

---

Good luck with your portfolio! 🚀
