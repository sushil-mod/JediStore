import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Clothings",
    categoryIcons: "./assets/clothes100.png",
  },
  {
    _id: uuid(),
    categoryName: "Merchandise",
    categoryIcons: "./assets/merchandise100.png",
  },
  {
    _id: uuid(),
    categoryName: "Toys",
    categoryIcons: "./assets/toys100.png",
  },
  {
    _id: uuid(),
    categoryName: "Collectibles",
    categoryIcons:"./assets/collectibles100.png",
  },
];
