package com.cognizant.country.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cognizant.country.entity.Country;
import com.cognizant.country.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getCountryByName(String name) {
        return countryRepository.findByName(name);
    }

    public List<Country> searchCountry(String text) {
        return countryRepository.findByNameContaining(text);
    }

    public List<Country> startsWith(String prefix) {
        return countryRepository.findByNameStartingWith(prefix);
    }

    public List<Country> endsWith(String suffix) {
        return countryRepository.findByNameEndingWith(suffix);
    }
}