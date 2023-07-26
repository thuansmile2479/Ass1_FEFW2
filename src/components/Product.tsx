import { useEffect } from 'react'
import { fetchProducts, addProduct, updateProduct, removeProduct } from '../actions/products'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'


const Product = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const { products } = useSelector((state: any)=> state.products);
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
  return (
    <div>
        {products?.map((item: any) => {
            return <div key={item.id}>{item.name}</div>
        })}

        <button
            className='border bg-green-500 p-2'
            onClick={() => dispatch(addProduct({name: "Product D"}))}
        >
            Add Product
        </button>

        <button
            className='border bg-blue-500  p-2'
            onClick={() => dispatch(updateProduct({name: "Product D update", id: 4}))}
        >
            Update Product
        </button>

        <button
            className='border bg-red-500 p-2'
            onClick={() => dispatch(removeProduct(4))}
        >
            Remove Product
        </button>
    </div>
  )
}

export default Product