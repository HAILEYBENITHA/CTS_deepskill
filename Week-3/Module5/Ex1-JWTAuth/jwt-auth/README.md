# Exercise 1 - Create authentication service that returns JWT

## Description

Creating an authentication service that generates and returns a JWT token when user credentials are sent via curl command.

## Technologies
- Java
- Spring Boot
- Spring Security
- JWT (JSON Web Token)
- Maven

## Request
```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

## Response
```json
{"token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNTcwMzc5NDc0LCJleHAiOjE1NzAzODA2NzR9.t3LRvlCV-hwKfoqZYlaVQqEUiBloWcWn0ft3tgv0dL0"}
```

## Implementation Steps
1. Create authentication controller and configure it in SecurityConfig
2. Read Authorization header and decode the username and password
3. Generate token based on the user retrieved

## How to Run

```bash
cd jwt-auth
mvn spring-boot:run
```

Test: `curl -s -u user:pwd http://localhost:8090/authenticate`