const shops = ["qewqe", "wewqewqe", "wqewqewe"];
const products = ["qew22qe", "wewq33ewqe", "wqew44qewe"];
const qqq = {
  shops: [
    {
      id: 1,
      name: "McDonalds",
      products: [
        {
          id: 1,
          img: "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png",
          title: "Burger",
          price: 44,
          quantity: 1,
        },
        {
          id: 2,
          img: "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png",
          title: "Ice-cream",
          price: 25,
          quantity: 1,
        },
        {
          id: 3,
          img: "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png",
          title: "Potato",
          price: 18,
          quantity: 1,
        },
        {
          id: 4,
          img: "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png",
          title: "Coca-cola",
          price: 44,
          quantity: 1,
        },
        {
          id: 5,
          img: "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png",
          title: "Cheese-Burger",
          price: 25,
          quantity: 1,
        },
        {
          id: 6,
          img: "https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png",
          title: "Big-Mac-Menu",
          price: 18,
          quantity: 1,
        },
      ],
    },
    {
      id: 2,
      name: "KFC",
      products: [
        {
          id: 11,
          img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
          title: "Burger",
          price: 44,
          quantity: 1,
        },
        {
          id: 12,
          img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
          title: "ice-cream",
          price: 25,
          quantity: 1,
        },
        {
          id: 13,
          img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
          title: "potato",
          price: 18,
          quantity: 1,
        },
        {
          id: 14,
          img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
          title: "Burger",
          price: 44,
          quantity: 1,
        },
        {
          id: 15,
          img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
          title: "ice-cream",
          price: 25,
          quantity: 1,
        },
        {
          id: 16,
          img: "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png",
          title: "potato",
          price: 18,
          quantity: 1,
        },
      ],
    },
    {
      id: 3,
      name: "ATB",
      products: [
        {
          id: 21,
          img: "https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png",
          title: "Burger",
          price: 44,
          quantity: 1,
        },
        {
          id: 22,
          img: "https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png",
          title: "ice-cream",
          price: 25,
          quantity: 1,
        },
        {
          id: 23,
          img: "https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png",
          title: "potato",
          price: 18,
          quantity: 1,
        },
        {
          id: 24,
          img: "https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png",
          title: "Burger",
          price: 44,
          quantity: 1,
        },
        {
          id: 25,
          img: "https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png",
          title: "ice-cream",
          price: 25,
          quantity: 1,
        },
        {
          id: 26,
          img: "https://upload.wikimedia.org/wikipedia/uk/thumb/c/c4/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_%D0%90%D0%A2%D0%91.svg.png",
          title: "potato",
          price: 18,
          quantity: 1,
        },
      ],
    },
  ],
};

export function getShops(req, res) {
  res.status(200).json(shops);
}

export function getProducts(req, res) {
  res.status(200).json(products);
}
