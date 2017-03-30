package com.example;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

@RestController
public class Weathercontroller {

    @Autowired
    RepositoryInterface repository;

    @GetMapping("/Log/{country}/{city}")
    public void addPos(@PathVariable String country,@PathVariable String city) throws Exception {
        System.out.println(city + country);
        repository.addLog(country, city);

    }
}
