import axios from 'axios';
import React ,{ useState, useReducer , useEffect ,createContext,useContext } from 'react';
import filterReducerFunc from '../reducer/filterReducerFunc';
import { getSortedFilter , getRatingFilter  , getCategoryFilter  , getPriceRangeFilter } from '../utils/filterUtil'


const ProductContext = createContext();


const ProductProvider = ({ children })=>{

    const [ productList ,setProductList ] =useState([]);

    const [category , setCategory ] = useState([]);

    const initialFilterState = {
        sortBy: null ,
        category : [],
        rating : 0,
        priceRange : 5000,
    }
    const [ filterState , filterDispatch ] = useReducer(filterReducerFunc , initialFilterState);

    const compose = (...getFilterFunc) =>(filterState , productData) => getFilterFunc.reduce( ( data , getFilterFunc ) => getFilterFunc(filterState , data )  , productData);

    const filteredList = compose(
        getSortedFilter,
        getRatingFilter,
        getCategoryFilter,
        getPriceRangeFilter
    )(filterState , productList)

     useEffect(()=>{

        (async()=>{

            try {
               
                const [response1 , response2 ] = await Promise.all( [ axios.get("/api/products") , axios.get("/api/categories") ] ) 
                setProductList(response1.data.products);
                setCategory(response2.data.categories);
                
            } catch (error) {
                console.error(error);
            }
    
        })();
       

     },[]) 

    return <ProductContext.Provider  value={{ filteredList , setProductList , category , filterState , filterDispatch }} >
        {children}
    </ProductContext.Provider>

}

const useProducts =()=> useContext(ProductContext);

export { useProducts ,ProductProvider};