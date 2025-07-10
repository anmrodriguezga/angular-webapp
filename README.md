# angular-webapp
A ready-to-use Angular 20 project with full support for GitHub and Dev Containers. Includes preconfigured development environment for rapid setup and consistent workflows.

## Quick Start with Dev Containers

This project is ready to run inside a Dev Container, providing a fully configured and isolated development environment:

1. **Install [Docker](https://www.docker.com/products/docker-desktop) and [Visual Studio Code](https://code.visualstudio.com/).**
2. **Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) for VS Code.**
3. **Open this repository in VS Code.**
4. When prompted, **"Reopen in Container"**.  
   If not prompted, press `F1` and select `Dev Containers: Reopen in Container`.
5. The container will build and install all dependencies automatically.
6. **Start developing!**  
   You can open a terminal in VS Code and use all commands (`ng serve`, `ng test`, etc.) as usual inside the container.

---

## Manual Installation

If you prefer to set up the project outside a Dev Container, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/anmrodriguezga/angular-webapp.git
cd angular-webapp
```

### 2. Install dependencies
Make sure you have [Node.js](https://nodejs.org/) (version 18 or later is recommended) and [npm](https://www.npmjs.com/) installed.

```bash
npm install
```

> If your project has multiple Angular apps (e.g., in `my-store` or `store` folders), you may need to install dependencies in those folders as well:
> ```bash
> cd my-store
> npm install
> cd ../store
> npm install
> cd ..
> ```

### 3. Start the development server
For a single-app setup:
```bash
ng serve
```
Or, for an app in a subfolder (e.g., `my-store`):
```bash
cd my-store
ng serve
```

The app will be available at [http://localhost:4200/](http://localhost:4200/).

### 4. Build the project
To build the project for production:
```bash
ng build
```
The build output will be in the `dist/` directory.

### 5. Run tests
To run unit tests:
```bash
ng test
```

To run end-to-end tests (if configured):
```bash
ng e2e
```

---

For more details, see the `README.md` files in each subproject (e.g., `my-store/README.md` or `store/README.md`).
