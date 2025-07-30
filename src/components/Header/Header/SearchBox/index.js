import { BsSearch } from "react-icons/bs";

const SearchBox =()=>{
    
    return(
        <>
        <div className="headerSearch ms-3 me-3">
            <input type="text" className="search-input"placeholder='Search for products' />
            <button><BsSearch /></button>
        </div>
        </>
    )
}

export default SearchBox;
