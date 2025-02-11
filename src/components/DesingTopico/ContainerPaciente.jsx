 
 
import { ItemPaciente } from "./ItemPaciente";
 
export const ContainerTable=({data})=>{
   
     return(
        <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Dias de atencion medica</th>
              <th>DNI</th>
              <th>Fecha_Registro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            {data.map((row, index) => (
                <ItemPaciente
                  key={row.id}
                  {...row}
                />
            ))}
          </tbody>
        </table>
      </div>

     )
}