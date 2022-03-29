# Kanban board

Tool for tasks and projects management.
You can find it on
[this url](https://goldsami-kanban-board.netlify.app)

## Tech stack

Vue, TS, Express, Firebase

## Setup 

Project consists of two subprojects _backend_ 
and _frontend_. You need to install dependencies on 
both of them:

```bash
    backend> npm i
    frontend> npm i
```

Then run next commands to run these projects:

```bash
    backend> npm run dev
    frontend> npm run dev
```

## Configuration

To use local backend replace <code>BACKEND_URL</code> 
in <code>frontend/config.js</code> value with
this value: <code>'http://localhost:3000'</code>
