package com.cognizant.employee.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.employee.entity.Employee;
import com.cognizant.employee.service.EmployeeService;
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }
    @PostMapping
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }
    @GetMapping("/department/{id}")
    public List<Employee> getEmployeesByDepartment(@PathVariable int id) {
        return employeeService.getEmployeesByDepartment(id);
    }
    @GetMapping("/native")
    public List<Employee> getEmployeesNative() {
        return employeeService.getAllEmployeesNative();
    }
}