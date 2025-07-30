import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { useContext, useEffect, useState } from 'react';
import cartimg3 from "C:\\Users\\Asus\\OneDrive\\Desktop\\fullstack\\src\\assests\\images\\cartimg3.webp";
import { Rating } from "@mui/material";
import { IoCloseSharp } from "react-icons/io5";
import { MyContext } from '../../App'; 

const ProductModel = ({ open, onClose, img }) => {
  const [counter, setCounter] = useState(1);
  const { handleAddToCart } = useContext(MyContext);

  // ✅ Reset counter when modal is opened
  useEffect(() => {
    if (open) setCounter(1);
  }, [open]);

  return (
    <>
      <Dialog
        className='dialog'
        open={open}
        onClose={(event, reason) => {
          // ✅ Ensure only close if not backdrop click
          if (reason !== "backdropClick") {
            onClose();
          }
        }}
      >
        <div className="cart">
          <h3>Shopping Cart</h3>

          <div className="close">
            <Button className='btn' onClick={onClose}>
              <IoCloseSharp />
            </Button>
          </div>

          <div className='cartImg'>
            {/* ✅ Conditional rendering to avoid null img error */}
            {img ? (
              <img src={img} alt="Product" className='img' />
            ) : (
              <p>No image selected</p>
            )}
          </div>

          <div className="cartPart2">
            <Rating name="read-only" value={3.4} readOnly className='rating' />
            <h6 className='price'>
              Price : <span className='p'>1299</span>
            </h6>

            <div className="counter">
              {/* ✅ Prevent counter from going below 1 */}
              <button
                className='minus'
                onClick={() => setCounter(prev => Math.max(1, prev - 1))}
              >
                <h4>-</h4>
              </button>
              <h4 className='ms-2 me-2'>{counter}</h4>
              <button
                className='minus'
                onClick={() => setCounter(prev => prev + 1)}
              >
                <h4>+</h4>
              </button>
            </div>

            <Button className='add' onClick={handleAddToCart}>Add to cart</Button>
            <Button className='buy'>Buy Now</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ProductModel;
