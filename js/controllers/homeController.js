import {
  state,
  findProductById,
  addProductToCart,
  deleteProductFromCart,
  getWishlist,
  addProductToWishlist,
  deleteProductFromWishlist,
} from "../model";
import CartPreviewView from "../views/cartPreviewView";
import FooterView from "../views/footerView";
import NotificationView from "../views/notificationView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  CartPreviewView.reRender(state.cart);
  NotificationView.success("product added successfully");
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  CartPreviewView.reRender(state.cart);
  NotificationView.info("product deleted successfully");
}

function wishlistClickHandler(productId) {
  const isProductInWishlist = getWishlist().some((id) => id === productId);
  
  if (isProductInWishlist) deleteProductFromWishlist(productId);
  else addProductToWishlist(productId);

  ProductListView.renderWishlist(getWishlist()); // Update the view
}

function init() {
  CartPreviewView.render(state.cart, deleteProductFromCartHandler);
  ProductModalView.render(addProductToCartHandler);
  ProductListView.render(
    state.products,
    findProductById,
    ProductModalView,
    wishlistClickHandler
  );
  ProductListView.renderWishlist(getWishlist());
  FooterView.render();
}

init();
