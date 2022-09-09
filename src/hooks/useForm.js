import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ({ target }) => {             // lo que pasa acá es que se llama al objeto target que tiene los valores de name y value que corresponden al evento 
        const {name, value} = target                    // Se des-estructuran esos valores, name y value
        // console.log({name, value})
        setFormState({                                  // Como en el form también se tienen esos valores se relacionan
            ...formState,                               // Con el operador spread mantengo el estado que no cambia de formState
            [ name ]: value                             // Según el input en que se cambie su valor se asigna el nuevo valor que se escribe ej: [username]: value ó [email]: value y se cambia
        });
        // console.log({name, value})            
    }
   
    const onResetForm = () => {
        setFormState( initialForm );                    // Esta es mi solcuión bn cexo xd
    }
  
    return {
        ...formState,                                   // Esta es otra forma de devolver los atributos que se asignen al useForm en el componente que lo usa
        formState,
        onInputChange,
        onResetForm
    }

}
