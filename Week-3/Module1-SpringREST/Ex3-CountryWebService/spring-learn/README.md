# Exercise 3 - REST - Country Web Service

## Description

Creating a REST service that returns India country details in the Spring Learn application.

## Technologies
- Java
- Spring Boot
- Spring Web
- Spring XML Configuration
- Maven

## Controller Details
- Controller: `com.cognizant.springlearn.controller.CountryController`
- Method Annotation: `@RequestMapping`
- Method Name: `getCountryIndia()`

## Method Implementation
Load India bean from Spring XML configuration and return as JSON response.

## Sample Request
```
http://localhost:8083/country
```

## Sample Response
```json
{
  "code": "IN",
  "name": "India"
}
```

## Concepts
- What happens in the controller method?
- How the bean is converted into JSON response?
- HTTP header details in network tab

## How to Run

```bash
cd spring-learn
mvn spring-boot:run
```

Access: http://localhost:8083/country