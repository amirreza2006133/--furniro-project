import { slides } from "../config";
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
import productsSliderView from "../views/productsSliderView";

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

function goToDetailsPage(productId) {
  window.location.assign(`product.html?id=${productId}`)
}

function init() {
  CartPreviewView.render(state.cart, deleteProductFromCartHandler);
  ProductModalView.render(addProductToCartHandler);
  ProductListView.render(
    state.products,
    findProductById,
    ProductModalView,
    wishlistClickHandler,
    goToDetailsPage
  );
  ProductListView.renderWishlist(getWishlist());
  FooterView.render();
  productsSliderView.render(slides);
}

init();
