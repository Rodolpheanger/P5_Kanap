/** Récupération des données du local storage */
const getLocalStorage = () => {
  return (localStorageData = JSON.parse(window.localStorage.getItem("cart")));
};

/** Récupérations des données */
const fetchItemData = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/products/" + itemId
    );
    return (data = await response.json());
  } catch (error) {
    alert(error);
  }
};

/** Affichage des produits contenus dans le panier */
const cartDisplay = async () => {
  getLocalStorage();
  let itemQuantityArray = [];
  for (let entry of localStorageData) {
    getItemId(entry.id);
    const itemData = await fetchItemData();
    itemImageDisplay(itemData.imageUrl, itemData.altTxt);
    itemNameDisplay(itemData.name);
    itemColorDisplay(entry.color);
    itemPriceDisplay(itemData.price);
    itemQuantityPreTextDisplay();
    itemQuantityInputDisplay(entry.quantity);
    itemContentSettingsDeleteButtonDisplay();
    console.log(entry.color);
    console.log(itemId);
    console.log(itemData);
    createItemQuantityArray(itemQuantityArray, entry.quantity);
    calculateTotalItemsQuantity(itemQuantityArray);
    console.log(sumItemsQuantity);
    totalItemsQuantityDisplay(sumItemsQuantity);
    itemContentSettingsDeleteContainer();
    itemContentSettingsQuantityContainer();
    itemContentSettingsContainer();
    itemContentDescriptionContainer();
    itemContentContainer();
    itemImageContainer();
    itemContainer(itemId, entry.color);
    getCartItemsContainer();
  }
};

const getItemId = (entryId) => {
  return (itemId = entryId);
};

const getCartItemsContainer = () => {
  return document.getElementById("cart__items").appendChild(article);
};

const itemContainer = (itemId, itemColor) => {
  return (
    (article = document.createElement("article")),
    article.classList.add("cart__item"),
    (article.dataset.id = `${itemId}`),
    (article.dataset.color = `${itemColor}`),
    article.appendChild(divImage),
    article.appendChild(divItemContentContainer)
  );
};

const itemImageContainer = () => {
  return (
    (divImage = document.createElement("div")),
    divImage.classList.add("cart__item__img"),
    divImage.appendChild(cartItemImage)
  );
};

const itemImageDisplay = (itemImageUrl, itemAltTxt) => {
  return (
    (cartItemImage = document.createElement("img")),
    cartItemImage.setAttribute("src", itemImageUrl),
    cartItemImage.setAttribute("alt", itemAltTxt)
  );
};

const itemContentContainer = () => {
  return (
    (divItemContentContainer = document.createElement("div")),
    divItemContentContainer.classList.add("cart__item__content"),
    divItemContentContainer.appendChild(divItemContentDescriptionContainer),
    divItemContentContainer.appendChild(divItemContentSettingsContainer)
  );
};

const itemContentDescriptionContainer = () => {
  return (
    (divItemContentDescriptionContainer = document.createElement("div")),
    divItemContentDescriptionContainer.classList.add(
      "cart__item__content__description"
    ),
    divItemContentDescriptionContainer.appendChild(cartItemName),
    divItemContentDescriptionContainer.appendChild(cartItemColor),
    divItemContentDescriptionContainer.appendChild(cartItemPrice)
  );
};

const itemNameDisplay = (itemDataName) => {
  return (
    (cartItemName = document.createElement("h2")),
    (cartItemName.textContent = itemDataName)
  );
};

const itemColorDisplay = (itemDataColor) => {
  return (
    (cartItemColor = document.createElement("p")),
    (cartItemColor.textContent = itemDataColor)
  );
};

const itemPriceDisplay = (itemDataPrice) => {
  return (
    (cartItemPrice = document.createElement("p")),
    (cartItemPrice.textContent = itemDataPrice + " €")
  );
};

const itemContentSettingsContainer = () => {
  return (
    (divItemContentSettingsContainer = document.createElement("div")),
    divItemContentSettingsContainer.classList.add(
      "cart__item__content__settings"
    ),
    divItemContentSettingsContainer.appendChild(
      divItemContentSettingsQuantityContainer
    ),
    divItemContentSettingsContainer.appendChild(
      divItemContentSettingsDeleteContainer
    )
  );
};

const itemContentSettingsQuantityContainer = () => {
  return (
    (divItemContentSettingsQuantityContainer = document.createElement("div")),
    divItemContentSettingsQuantityContainer.classList.add(
      "cart__item__content__settings__quantity"
    ),
    divItemContentSettingsQuantityContainer.appendChild(preTextItemQuantity),
    divItemContentSettingsQuantityContainer.appendChild(itemQuantityInput)
  );
};

const itemQuantityPreTextDisplay = () => {
  return (
    (preTextItemQuantity = document.createElement("p")),
    (preTextItemQuantity.textContent = "Qté : ")
  );
};

const itemQuantityInputDisplay = (itemDataQuantity) => {
  return (
    (itemQuantityInput = document.createElement("input")),
    itemQuantityInput.classList.add("itemQuantity"),
    itemQuantityInput.setAttribute("type", "number"),
    itemQuantityInput.setAttribute("name", "itemQuantity"),
    itemQuantityInput.setAttribute("min", "1"),
    itemQuantityInput.setAttribute("max", "100"),
    itemQuantityInput.setAttribute("value", itemDataQuantity)
  );
};

const itemContentSettingsDeleteContainer = () => {
  return (
    (divItemContentSettingsDeleteContainer = document.createElement("div")),
    divItemContentSettingsDeleteContainer.classList.add(
      "cart__item__content__settings__delete"
    ),
    divItemContentSettingsDeleteContainer.appendChild(
      itemContentSettingsDeleteButton
    )
  );
};

const itemContentSettingsDeleteButtonDisplay = () => {
  return (
    (itemContentSettingsDeleteButton = document.createElement("p")),
    itemContentSettingsDeleteButton.classList.add("deleteItem"),
    (itemContentSettingsDeleteButton.textContent = "Supprimer")
  );
};

const createItemQuantityArray = (itemQuantityArray, itemDataQuantity) => {
  return (
    (itemDataQuantityToNumber = Number.parseInt(itemDataQuantity)),
    itemQuantityArray.push(itemDataQuantityToNumber),
    console.log(itemQuantityArray)
  );
};

const calculateTotalItemsQuantity = (itemQuantityArray) => {
  return (
    (sumItemsQuantity = 0),
    (sumItemsQuantity = itemQuantityArray.reduce((a, b) => a + b))
  );
};

const totalItemsQuantityDisplay = (sumItemsQuantity) => {
  return (document.getElementById("totalQuantity").textContent =
    sumItemsQuantity);
};

// const calculateTotalItemsPrice = (itemQuantity, itemPrice) => {
//   return (

//   )
// };

const totalItemsPriceDisplay = (sumItemsPrice) => {
  return (document.getElementById("totalPrice").textContent = sumItemsPrice);
};
cartDisplay();
