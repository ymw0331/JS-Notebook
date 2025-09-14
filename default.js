[
  {
    "content": "# React TypeScript Code Editor\n\nWelcome to your interactive coding environment!\n\n## Features\n- ✨ Write and execute JavaScript/TypeScript code\n- 🎨 Create React components with live preview\n- 📝 Document your code with Markdown\n- 📦 Import npm packages directly\n- 🚀 No setup required\n\n## Quick Start\nClick on any code cell below to start editing, or add new cells using the buttons between cells.",
    "type": "text",
    "id": "welcome"
  },
  {
    "content": "// Example: Basic JavaScript\nconst message = 'Hello, World!';\nconsole.log(message);\n\n// Try editing this code!\nconst numbers = [1, 2, 3, 4, 5];\nconst doubled = numbers.map(n => n * 2);\nconsole.log('Doubled:', doubled);",
    "type": "code",
    "id": "example1"
  },
  {
    "content": "// Example: React Component\nimport React, { useState } from 'react';\n\nconst Counter = () => {\n  const [count, setCount] = useState(0);\n  \n  return (\n    <div style={{ \n      padding: '20px', \n      backgroundColor: '#f0f0f0', \n      borderRadius: '8px',\n      textAlign: 'center'\n    }}>\n      <h2>Counter: {count}</h2>\n      <button \n        onClick={() => setCount(count + 1)}\n        style={{ \n          padding: '10px 20px', \n          fontSize: '16px',\n          backgroundColor: '#007bff',\n          color: 'white',\n          border: 'none',\n          borderRadius: '4px',\n          cursor: 'pointer'\n        }}\n      >\n        Click Me!\n      </button>\n    </div>\n  );\n};\n\nshow(<Counter />);",
    "type": "code",
    "id": "example2"
  }
]