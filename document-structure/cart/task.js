document.addEventListener("DOMContentLoaded", () => {
    // Получаем все товары
    const products = document.querySelectorAll(".product");
    // Контейнер корзины
    const cartProducts = document.querySelector(".cart__products");
  
    products.forEach(product => {
      const decBtn = product.querySelector(".product__quantity-control_dec");
      const incBtn = product.querySelector(".product__quantity-control_inc");
      const quantityValue = product.querySelector(".product__quantity-value");
      const addBtn = product.querySelector(".product__add");
  
      // Уменьшение количества
      decBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityValue.textContent);
        if (currentValue > 1) {
          quantityValue.textContent = currentValue - 1;
        }
      });
  
      // Увеличение количества
      incBtn.addEventListener("click", () => {
        let currentValue = parseInt(quantityValue.textContent);
        quantityValue.textContent = currentValue + 1;
      });
  
      // Добавление в корзину
      addBtn.addEventListener("click", () => {
        const productId = product.dataset.id;
        const productImageSrc = product.querySelector(".product__image").src;
        const quantityToAdd = parseInt(quantityValue.textContent);
  
        // Проверяем, есть ли товар уже в корзине
        let cartProduct = cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
  
        if (cartProduct) {
          // Если есть, увеличиваем количество
          const countElem = cartProduct.querySelector(".cart__product-count");
          let currentCount = parseInt(countElem.textContent);
          countElem.textContent = currentCount + quantityToAdd;
        } else {
          // Если нет, создаём новый элемент в корзине
          cartProduct = document.createElement("div");
          cartProduct.className = "cart__product";
          cartProduct.dataset.id = productId;
  
          const img = document.createElement("img");
          img.className = "cart__product-image";
          img.src = productImageSrc;
  
          const count = document.createElement("div");
          count.className = "cart__product-count";
          count.textContent = quantityToAdd;
  
          cartProduct.appendChild(img);
          cartProduct.appendChild(count);
          cartProducts.appendChild(cartProduct);
        }
  
        // После добавления можно сбросить количество к 1 (по желанию)
        quantityValue.textContent = "1";
      });
    });
  });