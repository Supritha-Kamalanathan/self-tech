# Homeless Support System Backend

## Project Overview
A comprehensive backend system designed to facilitate the connection between homeless individuals and old age homes, with volunteer coordination. The system aims to provide a structured approach to helping homeless people find shelter and support through a network of volunteers and care facilities.

## My Role & Contributions
As the backend developer, I was responsible for:

### System Architecture & Design
- Designed and implemented the complete backend architecture using TypeScript
- Created comprehensive data models and schema design for multiple entities:
  - Homeless Persons
  - Volunteers
  - Old Age Homes
  - Transfer Management

### Technical Implementation
- Developed RESTful APIs using TypeScript 
- Implemented TSOA for automatic route generation and API documentation
- Integrated Swagger UI for interactive API documentation
- Set up PostgreSQL database with proper relationships and constraints
- Implemented proper DTO (Data Transfer Object) patterns for data validation and type safety

## Technical Stack

### Core Technologies
- TypeScript
- Node.js
- TSOA (Typescript OpenAPI)
- PostgreSQL

### Tools & Libraries
- TSOA for API specification and route generation
- Swagger UI for API documentation
- Postman for API testing
- Express middleware for request handling
- Body-parser for request parsing
- CORS support for cross-origin requests

### Development Practices
- Implemented type-safe development using TypeScript
- Followed DTO pattern for data validation
- Implemented middleware for request logging and error handling
- Proper error handling and validation using TSOA decorators

## Project Structure
```typescript
src/
├── controllers/     // API endpoint controllers
├── dtos/           // Data Transfer Objects
├── models/         // Database models and helpers
├── routes/         // Auto-generated routes
├── swagger.json    // API documentation
└── app.ts          // Application entry point
```

## API Documentation
- Implemented automatic API documentation using Swagger UI
- All endpoints are documented with:
  - Request/Response schemas
  - Required parameters
  - Response codes
  - Clear endpoint descriptions

## Testing
- Implemented comprehensive unit tests for all controllers
- API testing using Postman

## Getting Started
```bash
npm install
npm run tsoa:routes  # Generate routes
npm run tsoa:spec   # Generate Swagger specification
npm run dev         # Start development server
```
