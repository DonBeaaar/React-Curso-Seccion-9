import { useState } from "react"

export const useForm = (initialState = {}) => {
    
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
          ...values,
          [target.name]: target.value,
        });
        // Con esta forma, solo modificamos los inputs que cambiaron del form (...formState)
        // para la asignacion de los elementos que cambiaron se hace con el target
        // Buenisimo el manejo de los formularios
      };

    return [values, handleInputChange];
}
