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

const orderSchema = Schema({
  buyerInfo: Object,
  orderInfo: Object,
});

export const Shop = model("shop", shopSchema);
export const Mcd = model("mcd-product", productSchema);
export const Kfc = model("kfc-product", productSchema);
export const Atb = model("atb-product", productSchema);
export const Order = model("order", orderSchema);
