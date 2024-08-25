# Acme Widget Co Sales System - MR Proposed Solution

This project implements a proof of concept for Acme Widget Co's new sales system. It includes a basket implementation that handles product catalogues, delivery charge rules, and special offers.

## Features

- Add products to the basket
- Calculate total cost including delivery charges and special offers
- Modular and extensible design
- Unit and integration tests
- Docker support for easy deployment

## Installation

1. Clone the repository:

2. Install dependencies:
npm install 

## Usage

To run the application:
node src/index.js

To run tests:
npm test

To run ESLint:
npm run lint

## Docker

To build and run the Docker container:
docker-compose up --build

## Project Structure

- `src/`: Source code
  - `models/`: Data models
  - `services/`: Business logic services
  - `Basket.js`: Main basket implementation
  - `index.js`: Entry point
- `tests/`: Unit and integration tests
- `Dockerfile` and `docker-compose.yml`: Docker configuration
- `.eslintrc.js`: ESLint configuration

## Assumptions

1. The offer "buy one red widget, get the second half price" applies to pairs of red widgets. If there's an odd number of red widgets, the last one doesn't get discounted.
2. Delivery charges are calculated based on the total after applying discounts.
3. All prices are in USD and rounded to two decimal places.
4. The application uses a simple in-memory data store for products and offers. In a real-world
application, you'd want to use a database.
5. The application doesn't handle cases where the product or offer data is invalid or inconsistent.
6. The application doesn't handle cases where the user tries to add a product that's not available
or has already reached the maximum quantity.
7. The application doesn't handle cases where the user tries to apply an offer that's not valid
for the products in their basket.
8. The application doesn't handle cases where the user tries to remove a product from their basket

## License

This project is licensed under the MIT License.

This solution implements the required functionality using Node.js, following best practices. It uses:

Modular structure with clear separation of concerns
Dependency injection for loose coupling
Strategy pattern for flexible offer and delivery rule implementations
Unit and integration tests using Jest
ESLint for code quality checks
Docker and Docker Compose for containerization
A basic CI/CD pipeline using GitHub Actions

The solution is scalable and can be easily extended to add new products, offers, or delivery rules. The README file provides clear instructions for setup, and usage.
