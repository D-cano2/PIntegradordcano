
package com.portfolio.diego.controlador;

import com.portfolio.diego.entidad.Persona;
import com.portfolio.diego.interfase.IPersonaServicio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonaControler {
    @Autowired IPersonaServicio ipersonaServicio;
    
    @GetMapping ("personas/traer")
    public List<Persona> getPersona (){
    return ipersonaServicio.getPersona();
    }
    @PostMapping("/personas/crear")
    public String createPersona(@RequestBody Persona persona){
    ipersonaServicio.savePersona(persona);
    return "la persona fue creada correctamente";
    }
    @DeleteMapping("/personas/borrar/(id)")
    public String deletePersona(@PathVariable Long id){
      ipersonaServicio.deletePersona(id);
      return "la persona fue eliminada correctamente";
    }
    
    //URL:PUERTO/personas/editar/
    @PutMapping("/personas/editar/{id}")
    public Persona editPersona(@PathVariable Long id,
            @RequestParam("nombre") String nuevoNombre,
            @RequestParam("Apellido") String nuevoApellido,
            @RequestParam("img") String nuevoImg){
        Persona persona = ipersonaServicio.findPersona(id);
        
        persona.setNombre(nuevoNombre);
        persona.setApellido(nuevoApellido);
        persona.setImg(nuevoImg);
        
        ipersonaServicio.savePersona(persona);
        return persona;
    }
}
