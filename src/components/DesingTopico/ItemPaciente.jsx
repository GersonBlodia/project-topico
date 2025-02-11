import { ClipboardPlus, PenSquare, Trash2 } from "lucide-react"

export const ItemPaciente=(row)=>{
       return(
        <tr key={row.id}>
        <td>{`${row.nombre} ${row.apellido}`}</td>
        <td>{row.dni}</td>
        <td>{row.fechaAtencion}</td>
        <td>
          <div className="actions">
            <button className="edit-button">
              <PenSquare size={16} />
            </button>
            <button className="delete-button">
              <Trash2 size={16} />
            </button>
            <button className="primary-button">
              <ClipboardPlus size={16} />
            </button>
          </div>
        </td>
      </tr>
       )
}