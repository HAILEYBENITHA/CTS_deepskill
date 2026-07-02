# Exercise 3 - REST - Get country based on country code

## Description

Creating a REST service that returns a specific country based on country code. The country code should be case insensitive.

## Technologies
- Java
- Spring Boot
- Spring Web
- Spring XML Configuration
- Maven

## Controller Details
- Controller: `com.cognizant.springlearn.controller.CountryController`
- Method Annotation: `@GetMapping("/countries/{code}")`
- Method Name: `getCountry(String code)`

## Service Method
- Service: `com.cognizant.springlearn.service.CountryService`
- Method: `getCountry(String code)`

## Implementation
- Get the country code using `@PathVariable`
- Get country list from `country.xml`
- Iterate through the country list
- Make a case insensitive matching of country code and return the country
- Lambda expression can also be used instead of iterating the country list

## Sample Request
```
http://localhost:8083/countries/in
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

Access: http://localhost:8083/countries/in