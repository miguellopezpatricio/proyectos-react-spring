package com.example.springboot.controllers;

import com.example.springboot.entities.Employee;
import com.example.springboot.services.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private IEmployeeService service;


    @GetMapping("/api/employees")
    public List<Employee> getAll(){

        return service.getAll();
    }

    @GetMapping("/api/employee/{id}")
    public Employee getById(@PathVariable String id){

        return service.getById(Long.parseLong(id));
    }

    @DeleteMapping("/api/employee/{id}")
    public void remove(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }

    @PostMapping("/api/employees")
    public void save(@RequestBody Employee employee){
        service.save(employee);
    }
}

