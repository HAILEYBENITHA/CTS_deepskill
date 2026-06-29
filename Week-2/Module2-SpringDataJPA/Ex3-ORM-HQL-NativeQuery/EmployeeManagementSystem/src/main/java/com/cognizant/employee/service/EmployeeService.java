package com.cognizant.employee.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.employee.entity.Employee;
import com.cognizant.employee.repository.EmployeeRepository;
@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
    public List<Employee> getEmployeesByDepartment(int departmentId) {
        return employeeRepository.findEmployeesByDepartment(departmentId);
    }
    public List<Employee> getAllEmployeesNative() {
        return employeeRepository.getAllEmployeesNative();
    }
    public Employee saveEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }
}