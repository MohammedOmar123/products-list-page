import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

const ItemsSummary = () => {
  const context = useContext(ProductContext);
  return (
    <div style={{ height:"fit-content", display:"flex ", 
    justifyContent:"flex-end", gap:"40px", width:"86%", marginTop:"10px" }}>
      <p>Showing {context?.data?.count} of {context?.data?.totalNumberOfItems} results</p>
      <p>Total Price: 3250$</p>
    </div>
  )
}

export default ItemsSummary