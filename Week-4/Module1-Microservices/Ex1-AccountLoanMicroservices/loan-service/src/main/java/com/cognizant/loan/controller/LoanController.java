package com.cognizant.loan.controller;

import com.cognizant.loan.model.Loan;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class LoanController {

    private static final Map<Integer, Loan> LOANS = new HashMap<>();

    static {
        LOANS.put(1, new Loan(1, 1, 10000.0, "APPROVED"));
        LOANS.put(2, new Loan(2, 2, 5000.0, "PENDING"));
    }

    @GetMapping("/loans")
    public Iterable<Loan> getAllLoans() {
        return LOANS.values();
    }

    @GetMapping("/loans/account/{accountId}")
    public Loan getLoanByAccount(@PathVariable int accountId) {
        return LOANS.values().stream()
                .filter(loan -> loan.getAccountId() == accountId)
                .findFirst()
                .orElse(null);
    }
}