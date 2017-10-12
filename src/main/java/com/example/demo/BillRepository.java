package com.example.demo;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BillRepository extends CrudRepository<RentBill, Long> {
}