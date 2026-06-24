package com.cognizant.country.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.country.entity.Country;
import com.cognizant.country.service.CountryService;

@RestController
@RequestMapping("/countries")
public class CountryController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/name/{name}")
    public List<Country> getCountryByName(@PathVariable String name) {
        return countryService.getCountryByName(name);
    }

    @GetMapping("/contains/{text}")
    public List<Country> searchCountry(@PathVariable String text) {
        return countryService.searchCountry(text);
    }

    @GetMapping("/starts/{prefix}")
    public List<Country> startsWith(@PathVariable String prefix) {
        return countryService.startsWith(prefix);
    }

    @GetMapping("/ends/{suffix}")
    public List<Country> endsWith(@PathVariable String suffix) {
        return countryService.endsWith(suffix);
    }
}