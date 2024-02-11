import "../style/Task.css"
import { FaTrash } from "react-icons/fa";


export default function Task({id, description, onDelete}) {
  
    const handleDeleteClick = () => {
        onDelete && onDelete(id);
      };
    
    return (
        <div className="task">
           {description}
            <div className="task_close" onClick={handleDeleteClick}>
                <FaTrash/>
            </div>
        </div>
    )
}