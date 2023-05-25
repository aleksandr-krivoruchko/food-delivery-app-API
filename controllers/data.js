import { Shop, Product, Todo } from "../models/data.js";

export async function getShops(req, res) {
  const data = await Shop.find({});
  res.json(data);
}

export async function getProducts(req, res) {
  const data = await Product.find({});
  res.json(data);
}

export async function getTodos(req, res) {
  const data = await Todo.find({});
  res.json(data);
}

export function getDataById(req, res) {
  const dataById = data.shops.find((item) => item.id == req.params.id);
  res.json(dataById);
}
