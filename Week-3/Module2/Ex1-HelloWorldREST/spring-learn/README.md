# Exercise 1 - Hello World RESTful Web Service

## Description

Creating a simple REST endpoint that returns "Hello World!" when accessed.

## Technologies
- Java
- Spring Boot
- Spring Web
- Maven

## Controller Details
- Controller: `com.cognizant.springlearn.controller.HelloController`
- Method Annotation: `@GetMapping("/hello")`

## Outcome
Successfully created a REST endpoint that returns a greeting message.

## How to Run

```bash
cd spring-learn
mvn spring-boot:run
```

Access: http://localhost:8080/hello