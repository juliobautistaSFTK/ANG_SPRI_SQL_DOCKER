package com.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:4200")
public class DescripcionController {

    @Autowired
    private DataSource dataSource;

    @GetMapping("/descripcion/{clave}")
    public String getDescripcion(@PathVariable int clave) {
        String descripcion = "No encontrada!";
        try (Connection connection = dataSource.getConnection()) {
            String sql = "SELECT descripcion FROM distancia WHERE clave = ?";
            PreparedStatement statement = connection.prepareStatement(sql);
            statement.setInt(1, clave);
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                descripcion = resultSet.getString("descripcion");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "{ \"descripcion\": \"" + descripcion + "\" }";
    }
}
