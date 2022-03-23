import axios from 'axios';
import React ,{ useState, useEffect ,createContext,useContext } from 'react';




const ProductContext = createContext();


const ProductProvider = ({ children })=>{

    const [ productList ,setProductList ] =useState([]);

    const [category , setCategory ] = useState([]);

     useEffect(()=>{

        (async()=>{

            try {
               
                const [response1 , response2 ] = await Promise.all( [ axios.get("/api/products") , axios.get("/api/categories") ] ) 
                // const [response1 , response2 ] = await axios.all( [ axios.get("/api/products") , axios.get("/api/categories") ] );
                console.log( "response1" ,  response1.data);
                console.log( "response2" , response2.data);
                setProductList(response1.data.products);
                setCategory(response2.data.categories);
                
            } catch (error) {
                console.error(error);
            }
    
        })();
       

     },[]) 

    return <ProductContext.Provider  value={{ productList , setProductList , category}} >
        {children}
    </ProductContext.Provider>

}

const useProducts =()=> useContext(ProductContext);

export { useProducts ,ProductProvider};