package com.cognizant.country.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cognizant.country.entity.Country;

public interface CountryRepository extends JpaRepository<Country, String> {

}