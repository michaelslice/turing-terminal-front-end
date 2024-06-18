# Turing-Terminal-Front-End

This is a React project that was initiated with [`npm create vite@latest`](https://vitejs.dev/guide/)

## Description

Turing-Terminal is a web-based financial terminal developed using React, and Django.

## Prerequisites

- Node.js: Ensure node.js is downloaded

## Installation & Setup

1.  **Clone the repository**
   
```
git clone https://github.com/michaelslice/turing-terminal-front-end.git
cd turing-terminal-front-end/turing-terminal-front-end
```

2. **Start Front-End**
```
npm run dev
```

3. **Build Front-End**
```
npm run build
```

3. **Test on Docker**

```
docker build -t test .
docker run -dp 127.0.0.1.5173:5173 test
```
4. **Stop Docker Container**
```
docker ps
docker kill <CONTAINER ID>
```

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/reference/react)
