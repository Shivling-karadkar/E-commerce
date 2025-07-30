import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { useState } from 'react';
import listimg from "C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\assests\\images\\listimg.jpg";

const Sidebar=()=>{
    const [price,setPrice]=useState(1500);
    return (
     <>
    
        <div className="sidebar">
           <div className="filterbox">
                <h6>PRODUCT CATAGOIRES</h6>
                <div className="scroll">
                     <ul>
                        <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="men" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Women" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Beauty" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Kids" />
                        </li>
                        <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="men" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Women" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Beauty" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Kids" />
                        </li>
                           <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Women" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Beauty" />
                        </li>
                         <li>
                            <FormControlLabel  className ="w-100"control={<Checkbox  />} label="Kids" />
                        </li>
                        
                     </ul>
                </div>
           </div>

           <div className="filterprice">
                <h6>Filter By Price</h6>
                 <Box sx={{ width: 150 }}>
                    <Slider
                    value={price}
                    onChange={(e,newValue)=>setPrice(newValue)}
                        size="small"
                        defaultValue={70}
                        aria-label="Price Filter"
                        valueLabelDisplay="auto"
                        min={200}
                        max={3000}
                        />
                    </Box>
                    <p> Selected Price : ₹ {price}</p>

           </div>

            <br />

            <img src={listimg} alt="" className='lsitimg me-2'/>   

           
        </div>
      
    
     </>   
    )
}

export default Sidebar;