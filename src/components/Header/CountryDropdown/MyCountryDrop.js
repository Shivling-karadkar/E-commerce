import React, { memo, useContext, useEffect, useState } from 'react'
import { FaAngleDown } from "react-icons/fa";
import './MyCountryDropbtn.css'
import Dialog from '@mui/material/Dialog';
import { BsSearch } from "react-icons/bs";
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { MyContext } from 'C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\App.js';



const MyCountryDrop = () => {

  useEffect(()=>{

  },[])
 const context=useContext(MyContext)

  const[your_Location,SetLocation]=useState("Your Location");
  const[open,setOpen]=useState(false)

  const currentLocation=(cityName)=>{
    
    SetLocation(cityName);
    setOpen(false)
  }

  const openDialog=()=>{
    setOpen(true);
  }

  const closeDialog=()=>{
    setOpen(false)
  }

  // for search

 
  const [search,setSearch]=useState(" ")

  const onhandleSearch=(e)=>{
    setSearch(e.target.value) 
  }

  // for getting suggestion
  const [suggestions, setSuggestions] = useState([]);

  const handleSuggestion =()=>{
    const filtred = context.countryList.filter((item)=>{
     return item.country.toLowerCase().includes(search.trim().toLowerCase())
    });
    setSuggestions(filtred);
  };
  return (
    <>
    
      <button className='myCountryDropbtn'onClick={openDialog}>
            <div className='text-group'>
                <span className='label' >{your_Location}</span>
                {/* <span className='name'>india</span> */}
                <span className='ms-2'><FaAngleDown/></span>
            </div> 
      </button>


      <Dialog  open={open} className='locationModal'>
          <h5 className='h ms-5 mb-0'>Choose your Delivery Location </h5>
          <p>Please enter your address and we will specify the offer for your areas</p>
          <Button className='cross' onClick={closeDialog}><IoCloseSharp /></Button>
           <div className="headerSearch ms-3 me-3 w-100">
                <input type="text" className="search-input"placeholder='Search your area ' onChange={(e)=>onhandleSearch(e)} value={search}  />
                <button onClick={handleSuggestion}><BsSearch /></button>
            </div>

              <ul className='countryList'>

              {suggestions.length>0 && suggestions.map((item,index)=>(
                 <li key={index}>
                 <Button className='C W-100 mt-1'  onClick={()=>currentLocation(item.country)}>{item.country}</Button>
               </li>
                
              ))}
                
                 { suggestions.length ===0 && context.countryList?.length!==0 && context.countryList?.map((city,index)=>(
                    
                      <li key={index}>
                  <Button className='C W-100 mt-1'  onClick={()=>currentLocation(city.country)}>{city.country}</Button>
                </li>
                    )
                  )
                }
            </ul>
            
      </Dialog>
</>
  )
}

export default memo(MyCountryDrop);
