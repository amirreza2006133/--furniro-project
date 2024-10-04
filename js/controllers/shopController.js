import { addProductToCart, addProductToWishlist, deleteProductFromWishlist, findProductById, getWishlist, state } from "../model";
import NotificationView from "../views/notificationView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";
import ModalView from "../views/productModalView";

function controlWishlist() {
  ProductListView.renderWishlist(getWishlist()); // Update the view
}

function wishlistClickHandler(productId) {
  const isProductInWishlist = getWishlist().some(
    (product) => product.id === productId
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

function init() {
  ProductModalView.render(addProductToCartHandler);
  ProductListView.render(
    state.fullProducts,
    findProductById,
    ModalView,
    wishlistClickHandler
  );

  ProductListView.addEventHandler(controlWishlist);
}

init();
