
package com.portfolio.diego.interfase;

import com.portfolio.diego.entidad.Persona;
import java.util.List;


public interface IPersonaServicio {
    //traer una lista de personas
    public List<Persona> getPersona();
    
    //guardar un objeto de tipo persona
    public void savePersona(Persona persona);
    
    
    //Eliminar un objeto pero lo buscamos por ID
    public void deletePersona(Long id);

    //buscar ua persona por ID
    public Persona findPersona (Long id);
}
