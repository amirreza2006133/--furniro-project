import { findProductById, state } from "../model";
import ProductListView from "../views/productListView";
import ModalView from "../views/productModalView";

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

  ProductListView.renderWishlist(getWishlist()); // Update the view
}

function init() {
  ProductListView.render(
    state.fullProducts,
    findProductById,
    ModalView,
    wishlistClickHandler
  );
}

init();
