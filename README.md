# AppSolve Application Blocks - Node.js Starter

A comprehensive Node.js development starter template featuring a complete development environment using VS Code dev containers. This starter provides everything you need to quickly bootstrap a modern Node.js project with TypeScript support and best practices.

## Features

- **Dev Container Ready**: Complete development environment using Docker
- **Node.js 22**: Latest LTS version with npm pre-installed
- **TypeScript Support**: TypeScript compiler pre-configured
- **Code Formatting**: Prettier integration with auto-format on save
- **Enhanced UI**: Material Icon Theme for better file recognition
- **GitHub Copilot**: AI-powered code assistance
- **ESLint**: Code linting for quality assurance
- **REST Client**: Built-in HTTP client for API testing

## Quick Start

### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Getting Started

1. **Clone or use this template**:
   ```bash
   git clone https://github.com/cmeegamarachchi/aab_node
   cd aab_node
   ```

2. **Open in VS Code**:
   ```bash
   code .
   ```

3. **Reopen in Container**:
   - VS Code will detect the dev container configuration
   - Click "Reopen in Container" when prompted
   - Or use Command Palette (`Ctrl+Shift+P`) → "Dev Containers: Reopen in Container"

4. **Start developing**:
   - The container will automatically build with all dependencies
   - Your development environment is ready to use!

## Development Environment

### Included Tools

- **Node.js 22** - Latest LTS runtime
- **npm** - Package manager
- **TypeScript Compiler (tsc)** - For TypeScript compilation
- **ESLint** - Code linting and quality checks
- **Prettier** - Code formatting (width: 120 characters)
- **Git** - Version control (built from source)

### VS Code Extensions

- **Prettier** - Code formatter with auto-format on save
- **Material Icon Theme** - Enhanced file icons
- **GitHub Copilot** - AI-powered code suggestions
- **REST Client** - HTTP client for API testing

### Formatting Configuration

- **Print Width**: 120 characters
- **Auto-format on save** for:
  - TypeScript files
  - JavaScript files
  - JSON files

## Project Structure

```
aab_node/
├── .devcontainer/
│   ├── devcontainer.json    # Dev container configuration
│   └── Dockerfile          # Container image definition
└── README.md               # This file
```

## Available Commands

Since this is a starter template, you'll need to add your own `package.json` and scripts. Here are some common commands you might want to add:

```bash
# Initialize your project
npm init -y

# Install dependencies
npm install

# Add TypeScript configuration
npx tsc --init

# Install common development dependencies
npm install -D typescript @types/node eslint prettier

# Run your application
npm start

# Build TypeScript
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

## Customization

### Adding Dependencies

Install packages as you normally would:
```bash
npm install express
npm install -D @types/express
```

### Modifying Dev Container

Edit [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) to:
- Add port forwarding for your application
- Install additional VS Code extensions
- Modify container settings
- Add environment variables

### Adding Scripts

Create or modify `package.json` to add your build, test, and run scripts:

```json
{
  "scripts": {
    "start": "node dist/index.js",
    "build": "tsc",
    "dev": "ts-node src/index.ts",
    "test": "jest",
    "lint": "eslint src/**/*.ts",
    "format": "prettier --write src/**/*.ts"
  }
}
```

## Browser Integration

Open web pages in your host's default browser:
```bash
"$BROWSER" http://localhost:3000
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is open source. Please add your preferred license.

## Support

For issues and questions:
- Check the [VS Code Dev Containers documentation](https://code.visualstudio.com/docs/devcontainers/containers)
- Review the [Node.js documentation](https://nodejs.org/docs/)
- Check [TypeScript documentation](https://www.typescriptlang.org/docs/)

---

**Happy coding!**
