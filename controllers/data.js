import { Shop, Mcd, Kfc, Atb, Order } from "../models/data.js";

export async function getShops(req, res) {
  const data = await Shop.find({});
  res.json(data);
}

export async function getMcdProducts(req, res) {
  const data = await Mcd.find({});
  res.json(data);
}

export async function getKfcProducts(req, res) {
  const data = await Kfc.find({});
  res.json(data);
}

export async function getAtbProducts(req, res) {
  const data = await Atb.find({});
  res.json(data);
}

export async function createOrder(req, res) {
  const data = await Order.create(req.body);
  res.status(201).json(data);
}
