import axios from 'axios'

export const fetchProducts = () => async(dispatch: any) => {
    try {
        const { data } = await axios.get("http://localhost:3000/products")
        dispatch({ type: "products/fetchProducts", payload: data })
        return data
    } catch (error: any) {
        return error.message
    }finally{}
}

export const addProduct = (product: any) => async(dispatch: any) => {
    try {
        const { data } = await axios.post("http://localhost:3000/products", product)
        dispatch({ type: "products/addProduct", payload: data }) 
    } catch (error: any) {
 
    } 
}

export const updateProduct = (product: any) => async(dispatch: any) => {
    try {
        const { data } = await axios.put("http://localhost:3000/products/" + product.id, product)
        dispatch({ type: "products/updateProduct", payload: data }) 
    } catch (error: any) {
 
    } 
}

export const removeProduct = (id: any) => async(dispatch: any) => {
    try {
        await axios.delete("http://localhost:3000/products/" + id)
        dispatch({ type: "products/removeProduct", payload: id }) 
    } catch (error: any) {
 
    } 
}