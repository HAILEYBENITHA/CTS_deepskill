# Exercise 2 - REST - Country Web Service

## Description

Creating a REST service that returns India country details.

## Technologies
- Java
- Spring Boot
- Spring Web
- Spring XML Configuration
- Maven

## Controller Details
- Controller: `com.cognizant.springlearn.controller.CountryController`
- URL: `/country`
- Method Name: `getCountryIndia()`
- Method Annotation: `@RequestMapping`

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

## How to Run

```bash
cd spring-learn
mvn spring-boot:run
```

Access: http://localhost:8083/country