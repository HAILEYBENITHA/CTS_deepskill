# Exercise 1 - Creating Microservices for account and loan

## Description

Creating two independent Spring Boot microservices: `account-service` and `loan-service`. Each runs as a separate deployable unit with its own port and data.

## Technologies
- Java 17
- Spring Boot 3
- Spring Web
- Maven

## Services
- **account-service** (port 8081): manages account details
- **loan-service** (port 8082): manages loan details linked to accounts

## Endpoints
- `GET /accounts` and `GET /accounts/{id}`
- `GET /loans` and `GET /loans/account/{accountId}`

## How to Run

```bash
cd account-service && mvn spring-boot:run
cd loan-service && mvn spring-boot:run
```