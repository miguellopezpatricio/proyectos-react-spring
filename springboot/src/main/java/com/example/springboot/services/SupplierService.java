package com.example.springboot.services;

import com.example.springboot.entities.Customer;
import com.example.springboot.entities.Supplier;
import com.example.springboot.repository.CustomerRepository;
import com.example.springboot.repository.SupplierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SupplierService implements ISupplierService {

    @Autowired
    private SupplierRepository repository;

    @Override
    public List<Supplier> getAll() {
        return (List) repository.findAll();

    }

    @Override
    public Supplier getById(Long id) {
        return (Supplier) repository.getById(id);
    }

    @Override
    public void remove(Long id) {
        repository.deleteById(id);
    }

    @Override
    public void save(Supplier supplier) {
        repository.save(supplier);
    }

}