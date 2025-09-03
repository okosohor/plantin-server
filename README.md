## Plantin Server

Simple Express server that serves a random temperature via a weather endpoint.

## Requirements

- Node.js 18+

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

The server starts on `http://localhost:3000` by default. To change the port, set `PORT` in a `.env` file or your environment.

Example `.env`:

```bash
PORT=4000
```

## API

- GET `/weather`
  - Response: `{ "temperature": number }`
