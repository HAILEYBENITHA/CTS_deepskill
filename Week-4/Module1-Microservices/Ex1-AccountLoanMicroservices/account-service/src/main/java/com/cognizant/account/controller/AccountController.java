package com.cognizant.account.controller;

import com.cognizant.account.model.Account;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountController {

    private static final Map<Integer, Account> ACCOUNTS = new HashMap<>();

    static {
        ACCOUNTS.put(1, new Account(1, "Savings", 5000.0));
        ACCOUNTS.put(2, new Account(2, "Current", 8000.0));
    }

    @GetMapping("/accounts")
    public Iterable<Account> getAllAccounts() {
        return ACCOUNTS.values();
    }

    @GetMapping("/accounts/{id}")
    public Account getAccount(@PathVariable int id) {
        return ACCOUNTS.get(id);
    }
}