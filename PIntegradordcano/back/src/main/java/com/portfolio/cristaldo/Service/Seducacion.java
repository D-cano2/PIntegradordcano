/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.cristaldo.Service;

import com.portfolio.cristaldo.Entity.Educacion;
import com.portfolio.cristaldo.Repository.REducacion;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class Seducacion {
    @Autowired
    REducacion rEducacion;
    
    public List<Educacion> List(){
        return rEducacion.findAll();
    }
    public Optional<Educacion> getOne (int id){
        return rEducacion.findById(id);
    }
    public Optional<Educacion> getByNombreEdu(String nombreEdu){
        return rEducacion.findByNombreEdu(nombreEdu);
       
    }
    public void save(Educacion educacion){
        
        rEducacion.save(educacion);
    }
    public void delete(int id){
        rEducacion.deleteById(id);
    }
    public boolean existsById(int id){
        return rEducacion.existsById(id);
    }
    public boolean existsByNombreEdu(String nombreEdu){
        return rEducacion.existsByNombreEdu(nombreEdu);
    }
}
