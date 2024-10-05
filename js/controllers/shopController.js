import { addProductToCart, addProductToWishlist, deleteProductFromWishlist, findProductById, getWishlist, state } from "../model";
import NotificationView from "../views/notificationView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";
import ProductModalView from "../views/productModalView";

function controlWishlist() {
  ProductListView.renderWishlist(getWishlist()); // Update the view
}

function controlProductList() {
  ProductListView.render(state.fullProducts);
}

function controlModal(productId) {
  // Pass the clicked product to the modal view
  ProductModalView.openModal(findProductById(productId));
}

function wishlistClickHandler(productId) {
  console.log(productId);
  
  const isProductInWishlist = getWishlist().some(
    (product) => product.id === Number(productId)
  );
  const product = findProductById(productId);

  if (isProductInWishlist) {
    deleteProductFromWishlist(product.id);
    NotificationView.info("product deleted from wishlist successfully");
  } else {
    addProductToWishlist(product);
    NotificationView.success("product added to wishlist successfully");
  }

  controlWishlist(); // Update the view
}

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  NotificationView.success("product added successfully");
}

function goToDetailsPage(productId) {
  window.location.assign(`product.html?id=${productId}`);
}

function init() {
  ProductModalView.render(addProductToCartHandler);
  ProductListView.addEventHandler(
    controlProductList,
    controlWishlist,
    controlModal,
    wishlistClickHandler,
    goToDetailsPage,
  );
  ProductListView.render(state.fullProducts);
}

init();
