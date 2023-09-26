# drone-delivery-services
# Drone Delivery Service

## Introduction

There is a major new technology that is destined to be a disruptive force in the field of transportation: **the drone**. Just as the mobile phone allowed developing countries to leapfrog older technologies for personal communication, the drone has the potential to leapfrog traditional transportation infrastructure. Useful drone functions include delivery of small items that are (urgently) needed in locations with difficult access.

## Task Description

We have a fleet of **10 drones**. A drone is capable of carrying devices, other than cameras, and capable of delivering small loads. For our use case, **the load is medications**.

A **Drone** has the following attributes:
- Serial number (100 characters max)
- Model (Lightweight, Middleweight, Cruiserweight, Heavyweight)
- Weight limit (500g max)
- Battery capacity (percentage)
- State (IDLE, LOADING, LOADED, DELIVERING, DELIVERED, RETURNING)

Each **Medication** has the following attributes:
- Name (allowed only letters, numbers, '-', '_')
- Weight
- Code (allowed only upper-case letters, underscore, and numbers)
- Image (picture of the medication case)

## Requirements

While implementing your solution, please take care of the following requirements:

### Functional Requirements

- There is no need for a UI.
- Prevent the drone from being loaded with more weight than it can carry.
- Prevent the drone from being in LOADING state if the battery level is **below 25%**.
- Introduce a periodic task to check drone battery levels and create a history/audit event log for this.

### Non-Functional Requirements

- Input/output data must be in JSON format.
- Your project must be buildable and runnable.
- Your project must have a README file with build/run/test instructions (use a DB that can be run locally, e.g., in-memory, via container).
- Required data must be preloaded in the database.
- JUnit tests are optional but advisable (if you have time).
- Advice: Show us how you work through your commit history.

## Technologies Used

- Node.js and Express.js using TypeScript
- MySQL/Sequelize for database modeling
- Global error handling
- Request input validation using [Joi](https://github.com/hapijs/joi)

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MySQL or a compatible database

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/DEsmondkele/drone-delivery-service.git
   cd drone-delivery-service

Install dependencies:

`npm install`

Create a .env file in the project root directory and configure your database connection:
DB_HOST=your_database_host
DB_PORT=your_database_port
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=your_database_name
Run database migrations:

npm run migrate
Start the application:
npm start

The application will be available at http://localhost:3000.
API Endpoints
POST /api/drones: Register a new drone.
POST /api/drones/:serialNumber/load: Load medications onto a drone.
GET /api/drones/:serialNumber/medications: Get loaded medications for a drone.
GET /api/drones/available: Get available drones for loading.
GET /api/drones/:serialNumber/battery: Get the battery level of a drone

Contributing
****

License
****
