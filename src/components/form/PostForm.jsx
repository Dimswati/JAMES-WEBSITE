import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { CloudUploadOutlined } from '@mui/icons-material';
import "./form.scss"

export default function PostForm({edit}) {

    const [ editformData, setEditFormData ] = useState({
        duration: 0,
        price: 0,
        status: "" 
    })

    const fileTypes = ["JPG", "PNG", "GIF"];
    
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    
    const handleTypeError = () => {
        console.log("error")
    }
    
    const DragDrop = ({children}) => {
        return (
          <FileUploader handleChange={handleChange} name="file" types={fileTypes} onTypeError={handleTypeError}>{children}</FileUploader>
        )
    }

  return (
    <form>
        <DragDrop>
        <div className="drag-drop">
            <CloudUploadOutlined sx={{ fontSize: 50 }}/>
            {
            !file ? (<p className="body-medium">Upload your images here</p>) : (<p className="body-medium">Succesfully uploaded upload another</p>)
            }
        </div>
        </DragDrop>
        <div className="field-inputs">
        <label className="body-large" htmlFor="status">Status</label>
        <select name="status" id="status" className="body-medium">
            <option className="body-medium" value="Completed">Completed</option>
            <option className="body-medium" value="In progress">In Progress</option>
        </select> 

        <label className="body-large"  htmlFor="price">Price</label>
        <input className="body-medium" id="price" type="number" />
        
        <label className="body-large"  htmlFor="duration">Duration</label>

        <input id="duration" type="range" name="range" min="1" max="30" onInput={(e)=>console.log(e.target.value)}/>
        {/* <output>2</output> */}
        </div>
        <button className="label-large">Add Project</button>
    </form>
  )
}
