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

    //Vi måste också lägga till en GET-mapping för att spara ner info
    @GetMapping("/Log/{Country}/{City}")
    public void addPos(@PathVariable String Country,@PathVariable String City) throws Exception {
        System.out.println(City + Country);
        repository.addLog(Country, City);

    }
}
