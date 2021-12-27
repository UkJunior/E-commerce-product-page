window.onload = () => {

  let products = [
    {
      company: "Sneaker Company",
      name: "Fall Limited Edition Sneakers",
      description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      price: "&#36;125.00",
      discount: "&#36;250.00",
      percentage: "50&#37;",
      quantity: 0,
      preview: [
        {
          image: "./images/image-product-1.jpg",
          thumbnail: "./images/image-product-1-thumbnail.jpg"
        },
        {
          image: "./images/image-product-2.jpg",
          thumbnail: "./images/image-product-2-thumbnail.jpg"
        },
        {
          image: "./images/image-product-3.jpg",
          thumbnail: "./images/image-product-3-thumbnail.jpg"
        },
        {
          image: "./images/image-product-4.jpg",
          thumbnail: "./images/image-product-4-thumbnail.jpg"
        }
      ]
    }
  ]

  let cartItems = [];

  let currentProduct = products[0];

  let pLength = currentProduct.preview.length;


  let product = document.getElementsByClassName("product")[0];
  let thumbnails = document.getElementsByClassName("thumbnail");
  let prev = document.getElementsByClassName("previous-icon")[0];
  let next = document.getElementsByClassName("next-icon")[0];
  let imageId = 0;
  let minus = document.getElementsByClassName("minus")[0];
  let plus = document.getElementsByClassName("plus")[0];
  let quantity = document.getElementsByClassName("value")[0];
  let qValue = 0;
  let addToCart = document.querySelector(".add-to-cart")
  let name = document.getElementById("name");
  let company = document.getElementById("company");
  let description = document.getElementById("description");
  let amount = document.getElementById("amount");
  let discount = document.getElementById("discount");
  let percentage = document.getElementById("percentage");

  name.innerHTML = currentProduct.name;
  company.innerHTML = currentProduct.company;
  description.innerHTML = currentProduct.description;
  amount.innerHTML = currentProduct.price;
  discount.innerHTML = currentProduct.discount;
  percentage.innerHTML = currentProduct.percentage;
  product.src = currentProduct.preview[0].image;
  quantity.innerHTML = 0;

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].src = currentProduct.preview[i].thumbnail
  }

  for (let i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", () => {
      product.src = currentProduct.preview[i].image
    })
  }

  prev.onclick = () => {
    imageId -= 1
    if (imageId < 0) {
      imageId = pLength - 1
    }
    product.src = currentProduct.preview[imageId].image
  }

  next.onclick = () => {
    imageId += 1
    if (imageId > pLength - 1) {
      imageId = 0
    }
    product.src = currentProduct.preview[imageId].image
  }

  minus.onclick = () => {
    if (qValue === 0) return;
    qValue -= 1;
    quantity.innerHTML = qValue

    let comprWith = JSON.stringify(cartItems[cartItems.length - 1]);
    let result = cartItems.find(el => JSON.stringify(el) === comprWith);
    if (result) {
      cartItems = cartItems.map(item => (
        item.name === result.name ? { ...item, quantity: qValue } : item
      ))
    } else {
      cartItems.push({ ...currentProduct, quantity: qValue })
    }
    console.log(cartItems);
  }

  plus.onclick = () => {
    qValue += 1;
    quantity.innerHTML = qValue
    let comprWith = JSON.stringify(cartItems[cartItems.length - 1]);
    let result = cartItems.find(el => JSON.stringify(el) === comprWith);
    if (result) {
      cartItems = cartItems.map(item => (
        item.name === result.name ? { ...item, quantity: qValue } : item
      ))
    } else {
      cartItems.push({ ...currentProduct, quantity: qValue })
    }
    console.log(cartItems);
  }

  addToCart.onclick = () => {
    let comprWith = JSON.stringify(currentProduct);
    let result = cartItems.find(el => JSON.stringify(el) === comprWith);
    if (result) return;
    cartItems.push({ ...currentProduct, quantity: 1 })
    console.log(cartItems);
  }

}