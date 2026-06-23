package com.cognizant.country.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.country.entity.Country;
import com.cognizant.country.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository repository;

    public List<Country> getAllCountries() {
        return repository.findAll();
    }

    public Country getCountry(String code) {
        return repository.findById(code).orElse(null);
    }

    public Country addCountry(Country country) {
        return repository.save(country);
    }
}