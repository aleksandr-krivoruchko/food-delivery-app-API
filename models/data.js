import { Schema, model } from "mongoose";

const shopSchema = {
  name: String,
  img: String,
};

const productSchema = Schema({
  img: String,
  title: String,
  price: Number,
  quantity: Number,
});

const todoSchema = Schema({
  title: String,
  completed: Boolean,
});

export const Shop = model("shop", shopSchema);
export const Product = model("product", productSchema);
export const Todo = model("todo", todoSchema);
