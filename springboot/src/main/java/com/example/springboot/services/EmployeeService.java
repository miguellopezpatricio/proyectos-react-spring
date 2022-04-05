package com.example.springboot.services;

import com.example.springboot.entities.Customer;
import com.example.springboot.entities.Employee;
import com.example.springboot.repository.CustomerRepository;
import com.example.springboot.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepository repository;

    @Override
    public List<Employee> getAll() {
        return (List) repository.findAll();

    }

    @Override
    public Employee getById(Long id) {
        return (Employee) repository.getById(id);
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void save(Employee employee) {
        repository.save(employee);
    }

}