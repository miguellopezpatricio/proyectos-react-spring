package com.example.springboot.repository;

import com.example.springboot.entities.Customer;
import com.example.springboot.entities.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {


    Employee getById(Long id);
}
