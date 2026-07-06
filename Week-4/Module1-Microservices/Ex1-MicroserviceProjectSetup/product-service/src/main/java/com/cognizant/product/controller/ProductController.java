package com.cognizant.product.controller;

import com.cognizant.product.model.Product;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ProductController {

    private static final Map<Integer, Product> PRODUCTS = new HashMap<>();

    static {
        PRODUCTS.put(1, new Product(1, "Laptop", 999.99));
        PRODUCTS.put(2, new Product(2, "Mobile", 499.99));
        PRODUCTS.put(3, new Product(3, "Tablet", 299.99));
    }

    @GetMapping("/products")
    public Iterable<Product> getAllProducts() {
        return PRODUCTS.values();
    }

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable int id) {
        return PRODUCTS.get(id);
    }
}