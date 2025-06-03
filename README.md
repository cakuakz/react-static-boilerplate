# React + TypeScript + Vite Boilerplate

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. This boilerplate is designed for static page projects — ideal for applications that do not require a backend service. It focuses on fast UI development and rapid prototyping. Built with React and a pre-configured set of tools, it provides a solid foundation for creating clean, maintainable, and responsive user interfaces with minimal setup. Here are some of the useful traits that this boilerplate provides

## 🚀 Getting Started
```bash
# Clone the repository
git clone https://github.com/cakuakz/react-static-boilerplate.git

# Navigate into the project
cd your-repo-name

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🛠 Tech Stack
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Shadcn UI](https://ui.shadcn.com/docs)
- [clsx](https://github.com/lukeed/clsx)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## ✨ Features

### Light UI Components
This boilerplate uses [Shadcn UI](https://ui.shadcn.com/docs) as the core UI library. On top of that, I’ve enhanced several components with subtle microinteractions to bring a more delightful and responsive user experience.

### Fast App Building
This boilerplate is powered by [Vite](https://vitejs.dev/), ensuring lightning-fast builds and an ultra-smooth development experience with features like Hot Module Replacement (HMR). Beyond the speed, Vite also offers powerful production optimizations out of the box—such as code splitting, source maps, and more—all of which are pre-configured to help your static site perform at its best.

### SEO Friendly
This boilerplate comes pre-configured with SEO-friendly metadata settings. All you need to do is customize the values—no extra setup required. It’s ready to help your static site rank better and get discovered more easily on search engines.

```html
<head>
    <meta charset="UTF-8" />
    <!-- Primary Meta Tags -->
    <title>React Static Boilerplate</title>
    <meta name="title" content="Your own title here!" />
    <meta name="description" content="Your own app's description here!" />

    <!-- Keywords -->
    <meta
      name="keywords"
      content="Use the content of this app as your keywords"
    />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourownurl.com" />
    <meta property="og:title" content="Your own title here!" />
    <meta
      property="og:description"
      content="Your own app's description here!"
    />
    <meta property="og:image" content="Your thumbnail image URL here!" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://yourownurl.com" />
    <meta property="twitter:title" content="Your own title here!" />
    <meta
      property="twitter:description"
      content="Your own app's description here!"
    />
    <meta property="twitter:image" content="Your thumbnail image URL here!" />

    <!-- Favicon -->
    <link
      rel="icon"
      type="image/svg+xml"
      href="Your thumbnail image URL here!"
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Additional Meta Tags -->
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Your application's title/name" />
    <meta name="geo.region" content="ID" />
    <link rel="canonical" href="https://yourownurl.com" />
  </head>
```

### Domain Drive Design
The codebase follows a domain-driven structure, making it intuitive to scale and maintain. Logic and components are grouped by feature, not by type—encouraging clean separation of concerns and easier collaboration between developers.

```css
src/
├── components/
├── features/
│   └── CustomDomain/
│       ├── components/
│       ├── hooks/
│       ├── types.ts
|       ├── routes.ts
|       ├── page.tsx
|       ├── index.tsx
├── lib/
├── routes/
└── utils/
```

### Seamless Light & Dark Mode
A fully functional light/dark theme toggle is built-in and integrated using Tailwind's dark mode class strategy. The theme state persists across sessions and automatically adapts to system preferences—so your users enjoy the best experience day or night.
