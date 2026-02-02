# 🎨 Modern Portfolio Website

A beautiful, responsive portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, a modern design, and a dark theme.

## ✨ Features

- 🎯 Modern and clean design
- 📱 Fully responsive layout
- 🌙 Dark theme with gradient accents
- ✨ Smooth animations and transitions
- 🎨 Beautiful UI with Tailwind CSS
- ⚡ Fast performance with Vite
- 🔍 SEO friendly
- 📧 Contact form
- 🖼️ Project showcase
- 💼 Skills section

## 🛠️ Built With

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon toolkit

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/my-portfolio.git
```

2. Navigate to the project directory:
```bash
cd my-portfolio
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and visit `http://localhost:5173`

## 🚀 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📝 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name
   - Change your title/role
   - Add your social media links
   - Modify the description

2. **About Section** (`src/components/About.jsx`):
   - Update your bio
   - Replace the placeholder with your photo

3. **Projects Section** (`src/components/Projects.jsx`):
   - Add your own projects
   - Update project descriptions
   - Add live demo and GitHub links
   - Replace placeholder emojis with actual images

4. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills
   - Update skill icons

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update your email
   - Add your phone number
   - Update your location

6. **Footer** (`src/components/Footer.jsx`):
   - Update copyright information
   - Add your name
   - Update social media links

### Change Colors

Edit the `tailwind.config.js` file to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#6366f1',    // Change primary color
      secondary: '#8b5cf6',  // Change secondary color
    },
  },
}
```

## 📱 Sections

- **Navigation** - Fixed navbar with smooth scrolling
- **Hero** - Eye-catching introduction with social links
- **About** - Personal introduction and background
- **Projects** - Showcase of your work
- **Skills** - Technical skills and tools
- **Contact** - Contact form and information
- **Footer** - Social links and credits

## 🎨 Color Palette

- **Background**: `#0a0a0a` (Dark)
- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#8b5cf6` (Purple)
- **Text**: `#ffffff` (White)
- **Accent**: Gradient combinations

## 📄 Project Structure

```
my-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🌐 Deployment

You can deploy this portfolio to various platforms:

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run build
npm run deploy
```

## 📸 Screenshots

Add your screenshots here after deployment!

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourprofile](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

## ⭐ Show your support

Give a ⭐️ if you like this project!

## 🙏 Acknowledgments

- Design inspiration from various portfolio websites
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ and React
