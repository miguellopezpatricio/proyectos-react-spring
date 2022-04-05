package com.example.springboot.services;

import com.example.springboot.entities.Customer;
import com.example.springboot.entities.Employee;

import java.util.List;

public interface IEmployeeService {

    List<Employee> getAll();

    Employee getById(Long id);

    void remove(Long id);

    void save(Employee employee);


}
