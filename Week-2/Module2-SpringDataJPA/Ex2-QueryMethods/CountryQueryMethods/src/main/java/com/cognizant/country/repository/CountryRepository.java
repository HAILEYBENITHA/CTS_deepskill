package com.cognizant.country.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cognizant.country.entity.Country;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // Query Method
    List<Country> findByName(String name);

    // Contains
    List<Country> findByNameContaining(String text);

    // Starts With
    List<Country> findByNameStartingWith(String prefix);

    // Ends With
    List<Country> findByNameEndingWith(String suffix);
}