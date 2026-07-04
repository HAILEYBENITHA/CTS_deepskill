# Exercise 1 - Display Employee List and Edit Employee form using RESTful Web Service

## Description

Creating RESTful web services for Employee and Department management using Spring Boot 3. This exercise demonstrates:
- Static employee list data using Spring XML configuration
- REST service to get all employees
- REST service for departments

## Technologies
- Java
- Spring Boot 3
- Spring Web
- Spring XML Configuration
- Maven

## REST Endpoints
- GET `/employees` - Returns all employees
- GET `/departments` - Returns all departments

## Model Classes
- Employee
- Department
- Skill

## DAO Classes
- EmployeeDao - Loads employees from XML
- DepartmentDao - Loads departments from XML

## Service Classes
- EmployeeService - Business logic for employees
- DepartmentService - Business logic for departments

## Controller Classes
- EmployeeController - REST endpoint for employees
- DepartmentController - REST endpoint for departments

## How to Run

```bash
cd employee-service
mvn spring-boot:run
```

Access:
- http://localhost:8080/employees
- http://localhost:8080/departments