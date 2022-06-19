
package com.portfolio.diego.repositorio;

import com.portfolio.diego.entidad.Persona;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPersonaRepositorio extends JpaRepository<Persona,Long> {
    
}
