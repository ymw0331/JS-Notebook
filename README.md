# JS-Notebook

An interactive JavaScript and TypeScript notebook for writing and executing code directly in your browser. Similar to Jupyter Notebook but specifically designed for JavaScript/TypeScript development.

## Features

- **Live Code Execution**: Write and execute JavaScript/TypeScript code in real-time
- **Monaco Editor**: Full-featured code editor with IntelliSense, syntax highlighting, and auto-completion (same editor as VS Code)
- **Multiple Cell Types**: Support for both code cells and markdown documentation cells
- **NPM Package Support**: Import and use any NPM package directly in the browser via unpkg.com
- **ESBuild Integration**: Fast in-browser bundling and transpilation with WebAssembly
- **Interactive Output**: See console output and returned values immediately
- **Cell Management**: Add, delete, move, and reorder cells easily
- **Auto-formatting**: Built-in Prettier support for consistent code formatting
- **Cumulative Code Execution**: Later cells can reference variables and functions from earlier cells
- **JSX Support**: Write and render React components directly
- **Security**: Safe execution of user code in isolated iframes

## Quick Start

### Option 1: Use the Published CLI (When Available)

```bash
# Install globally
npm install -g js-notebook-cli

# Create and edit a notebook
js-notebook serve mynotebook.js

# Open on a specific port
js-notebook serve mynotebook.js --port 3000
```

### Option 2: Clone and Run Locally

```bash
# Clone the repository
git clone https://github.com/ymw0331/JS-Notebook.git
cd JS-Notebook

# Install dependencies
npm install

# Start development servers
npm start

# The app will open at http://localhost:4005
```

## Usage Examples

### Code Cells
Write JavaScript or TypeScript code and press **Cmd/Ctrl + Enter** to execute:

```javascript
// Import any NPM package
import axios from 'axios';

// Make API calls
const response = await axios.get('https://api.github.com/users/ymw0331');
console.log(response.data);
```

### React Components
Create and render React components:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Markdown Cells
Document your code with rich markdown formatting. Click to edit, click outside to preview.

## Project Structure

```
JS-Notebook/
├── packages/
│   ├── local-client/      # React frontend application
│   │   ├── src/
│   │   │   ├── components/ # UI components
│   │   │   ├── state/      # Redux store and reducers
│   │   │   ├── bundler/    # ESBuild integration
│   │   │   └── hooks/      # Custom React hooks
│   │   └── public/
│   ├── local-api/          # Express backend API
│   │   └── src/
│   │       ├── routes/     # API endpoints
│   │       └── index.ts    # Server configuration
│   └── cli/                # Command-line interface
│       └── src/
│           └── commands/   # CLI commands
├── lerna.json              # Monorepo configuration
└── package.json            # Root package configuration
```

## Tech Stack

- **Frontend**: React 18, TypeScript 5, Redux Toolkit
- **Editor**: Monaco Editor (VS Code's editor)
- **Bundler**: ESBuild WebAssembly
- **Styling**: Bulmaswatch (Bulma CSS themes)
- **Build Tool**: Create React App with CRACO
- **Backend**: Express 5, http-proxy-middleware
- **Monorepo**: Lerna workspace management
- **Testing**: Jest, React Testing Library

## Development

```bash
# Run all packages in development mode
npm start

# Build all packages
lerna run build

# Run tests
npm test

# Build for production
npm run build
```

## Deployment

See [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push to GitHub
2. Import repository on [Vercel](https://vercel.com/new)
3. Set root directory to `packages/local-client`
4. Deploy!

## Features Roadmap

- [ ] Cloud storage integration (AWS S3, Google Drive)
- [ ] Collaborative editing with WebRTC
- [ ] Export to various formats (HTML, PDF, Markdown, .ipynb)
- [ ] Custom themes and color schemes
- [ ] Plugin system for extensions
- [ ] Git integration for version control
- [ ] Unit testing support within cells
- [ ] Data visualization libraries integration
- [ ] Terminal/console cell type
- [ ] AI code completion

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT

## Author

Wayne Yong - [GitHub](https://github.com/ymw0331)

## Acknowledgments

- Inspired by Jupyter Notebook
- Built with Monaco Editor from Microsoft
- Uses ESBuild for ultra-fast bundling
- Based on concepts from Stephen Grider's [React and TypeScript course](https://www.udemy.com/course/react-and-typescript-build-a-portfolio-project/)