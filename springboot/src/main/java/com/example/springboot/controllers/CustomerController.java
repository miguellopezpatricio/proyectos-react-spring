package com.example.springboot.controllers;

import com.example.springboot.entities.Customer;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CustomerController {

    @GetMapping("/api/customers")
    public List<Customer> getAll(){
        List<Customer> customers = new ArrayList<>();
        customers.add(new Customer());
        return customers;
    }
}
