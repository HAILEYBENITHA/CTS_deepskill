# Exercise 2 - Create Eureka Discovery Server and register

## Description

Setting up a Eureka Discovery Server and registering a microservice client with it. Service discovery lets microservices locate each other dynamically without hard-coded host/port configuration.

## Technologies
- Java 17
- Spring Boot 3
- Spring Cloud Netflix Eureka
- Maven

## Projects
- **eureka-server** (port 8761): `@EnableEurekaServer`, does not register itself
- **eureka-client** (port 8085): `@EnableDiscoveryClient`, registers with the server

## How to Run

```bash
cd eureka-server && mvn spring-boot:run
cd eureka-client && mvn spring-boot:run
```

Open the Eureka dashboard at http://localhost:8761 to see the registered client.