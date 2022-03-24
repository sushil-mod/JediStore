
import React from 'react';


const filterReducerFunc=(filterState , filteraction )=>{

    switch (filteraction.type) {
        case "SORT":
            return {...filterState , sortBy : filteraction.payload  };

        case "RATING":
            return  {...filterState , rating: filteraction.payload  };

        case "CATEGORY":
            if(filterState.category.includes( filteraction.payload)){
                return {...filterState , category : filterState.category.filter( (item) => item !== filteraction.payload  ) }
            };
            return {...filterState , category : [...filterState.category , filteraction.payload ] };
         
        case "PRICE_RANGE":
            return { ...filterState , priceRange : filteraction.payload  }    

        case "CLEAR":
            return { 
                sortBy: null ,
                category : [],
                rating : 0,
                priceRange : 5000,
             }

        default:
            return filterState;
    }
}    

export default filterReducerFunc;