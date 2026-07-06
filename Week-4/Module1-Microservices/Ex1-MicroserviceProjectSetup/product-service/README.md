# Exercise 1 - Microservice Project Setup

## Description

Setting up a basic microservice project using Spring Boot 3.

## Technologies
- Java
- Spring Boot 3
- Spring Web
- Maven

## REST Endpoints
- GET `/products` - Returns all products
- GET `/products/{id}` - Returns product by ID

## How to Run

```bash
cd product-service
mvn spring-boot:run
```

Access:
- http://localhost:9090/products
- http://localhost:9090/products/1