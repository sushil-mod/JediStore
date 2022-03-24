import React from 'react';

const getSortedFilter =( filterState , productData )=>{

    if (filterState.sortBy === "LOW_TO_HIGH") {
        return [...productData].sort((a, b) => Math.ceil(( a.orignalPrice * (100 - a.discount)) / 100) - Math.ceil(( b.orignalPrice * (100 - b.discount)) / 100));
      }
    if (filterState.sortBy === "HIGH_TO_LOW") {
        return [...productData].sort((a, b) => Math.ceil(( b.orignalPrice * (100 - b.discount)) / 100) - Math.ceil(( a.orignalPrice * (100 - a.discount)) / 100));
      }
    return productData;
}

const getRatingFilter =( filterState , productData  )=> productData.filter((item) => filterState.rating > 0 ? Number(item.rating) >= filterState.rating : item );

const getCategoryFilter=( filterState , productData  )=> productData.filter( (item) => filterState.category.length === 0 ? item : filterState["category"].includes(item.categoryName));

const getPriceRangeFilter =( filterState , productData )=> productData.filter((item) => ( item.orignalPrice <= filterState.priceRange ) );





 export { getSortedFilter , getRatingFilter  , getCategoryFilter  , getPriceRangeFilter } ;