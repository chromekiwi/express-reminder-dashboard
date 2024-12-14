# Express Reminder Dashboard

## Overview

This project is an Express API for managing reminders. It allows users to create, read, update, and delete reminders.

## Features

- Create a new reminder
- Get a list of all reminders
- Get a specific reminder by ID
- Update a reminder by ID
- Delete a reminder by ID

## Getting Started

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/express-reminder-dashboard.git
   ```
2. Navigate to the project directory:
   ```sh
   cd express-reminder-dashboard
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

### Running the Server

1. Start the server:
   ```sh
   npm start
   ```
2. The API will be available at `http://localhost:3000/api/v1`.

## API Documentation

### Endpoints

- `GET /reminders` - Get all reminders
- `GET /reminders/:id` - Get a reminder by ID
- `POST /reminders` - Create a new reminder
- `PATCH /reminders/:id` - Update a reminder by ID
- `DELETE /reminders/:id` - Delete a reminder by ID

### Example Reminder Object

```json
{
  "id": 1,
  "title": "Buy groceries",
  "description": "Milk, bread, cheese",
  "date": "2024-12-14T17:35:04.950Z"
}
```
