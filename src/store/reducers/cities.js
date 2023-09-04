import { createReducer } from "@reduxjs/toolkit";
import city_actions from "../actions/cities";

const { read_carousel, read_cities, read_city } = city_actions

const initial_state = {
    carousel: [],
    cities: [],
    city: {},
    error: null,
}

const city_reducer = createReducer(
    initial_state,  //estado inicial
    builder => builder.addCase(     //esta callback es una constructora de estados globales.
                                    //Lo que hace es agregar casos de reduccion por cada accion.
                                    //Un caso de reduccion es alguna logica de reduccion que necesite aplicar (modificar, crear, leer, eliminar, etc.).
        read_carousel.fulfilled,
        (state, action) => {        //callback que depende del estado y la accion y es la encargada de reducir los estados
            let new_state = {
                ...state,           //a la copia del estado tengo que llenarle la propiedad carousel que me envia la accion.
                carousel: action.payload.carousel
            }
            return new_state        //retorno el nuevo estado para que se actualice la vista.
        }
    )
    .addCase(
        read_cities.fulfilled,
        (state, action) => {
          console.log('Cities data received:', action.payload.cities); // Agrega este console log
          return {
            ...state,
            cities: action.payload.cities,
          };
        }
      )
      
    
    .addCase(
        read_city.fulfilled,
        (state, action) => {
            let new_state = {
                ...state,
                city: action.payload.city
            }
            return new_state
        }
    )
)

export default city_reducer