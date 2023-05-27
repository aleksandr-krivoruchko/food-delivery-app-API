# Web server for the food delivery application

API for a single page web application for a simple online grocery store. Provides a list of stores, products available in it and customer orders.
The project was created on "Node.js" using the server on the "Express" framework connected to the "MongoDB" database.
Source code here
[SOURCE CODE](https://github.com/aleksandr-krivoruchko/food-delivery-app-API.git)

## Application launch instructions

Database deployed 
[here](https://food-delivery-app-api.onrender.com/).
- The `/shops` endpoint is used to get the list of stores
- The `/mcd-products` the endpoint is used to get the list of products for McDonalds shop
- The `/kfc-products` the endpoint is used to get the list of products for KFC shop
- The `/atb-products` the endpoint is used to get the list of products for ATB shop
- The `/orders` endpoint is used to send orders

### Data Information

	In the database, information about stores, products and orders is stored as an object.

- The shop element looks like this:

```js
{
  "_id": "ID",
        "name": "SHOP NAME",
        "img": "IMG SOURCE",
        "label": "LABEL NAME"
}
```

- The product element looks like this:

```js
{"_id": "ID",
        "img": "IMG SOURCE",
        "title": "FOOD NAME",
        "price": 44.44,
        "quantity": 1
		  }
```

- The order element looks like this:

```js
{"_id": "ID",
        "buyerInfo": {
            "name": "NAME",
            "email": "EMAIL@qwe.qwe",
            "phone": "099123456",
            "address": "Street, City"
        },
        "orderInfo": {
            "products": {
                "Ice Cream": 3,
                "BigMac": 2,
            },
            "orderPrice": "100$"
				}
				}
```

