# GitHub Issues Viewer 🚀

Welcome to the GitHub Issues Viewer! This simple React application allows you to explore both opened and closed issues for any GitHub repository using the GitHub GraphQL API.

DEMO : (GitHub Issues Viewer)[https://git-issues-viewer.vercel.app/]

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/github-issues-viewer.git
```
2. Navigate to the project directory:

```bash
cd github-issues-viewer
```
3. Install dependencies:
```bash
npm install
```

### Set GitHub GraphQL Token
To access the GitHub GraphQL API, you'll need to set up a personal access token. Follow these steps:

1. Visit GitHub Personal Access Tokens in your GitHub account settings.

2. Generate a new token with the repo scope.

3. Copy the generated token.

4. Create a .env file in the root of the project and add the following line, replacing YOUR_TOKEN_HERE with the token you copied:

```env
REACT_APP_G_TOKEN=YOUR_TOKEN_HERE
```
Note: Ensure that your .env file is included in your .gitignore to avoid sharing your token publicly.

### Run the Application
Once you've set up the token, you can start the application:

```bash
npm start
```
Open http://localhost:3000 in your browser to view the GitHub Issues Viewer.

### Features
- Search for any GitHub repository.
- View detailed information about opened and closed issues.
- Responsive and user-friendly interface.

### Future Enhancements
We have exciting plans for future enhancements, including:

- Additional filters for issue exploration.
- Displaying issue comments.
- Improved user interface and experience.

### Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

License
This project is licensed under the MIT License.

Happy coding! 🚀✨
