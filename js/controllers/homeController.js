import { slides } from "../config";
import { state, findProductById, addProductToCart, deleteProductFromCart, getWishlist, addProductToWishlist, deleteProductFromWishlist, getCartStorage } from "../model";
import CartPreviewView from "../views/cartPreviewView";
import FooterView from "../views/footerView";
import NotificationView from "../views/notificationView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";
import ProductsSliderView from "../views/productsSliderView";
import HambergurMenuView from "../views/HambergurMenuView";

function controlWishlist() {
  ProductListView.renderWishlist(getWishlist()); // Update the view
}

function controlSlider() {
  ProductsSliderView.render(slides)
}

function controlFooter() {
  FooterView.render();
}

function controlProductList() {
  ProductListView.render(state.products, getWishlist(), "box");
}

function controlModal(productId) {
  ProductModalView.render(findProductById(productId));
}

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function controlHambergurMenu() {
  HambergurMenuView.render();
}

function addProductToCartHandler(newItem) {
  addProductToCart(newItem);
  controlCartPreview();
  NotificationView.success("product added successfully");
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function wishlistClickHandler(productId) {
  const isProductInWishlist = getWishlist().some((product) => product.id === Number(productId));
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

function goToDetailsPage(productId) {
  window.location.assign(`product.html?id=${productId}`);
}

function init() {
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler);
  ProductModalView.addEventHandler(addProductToCartHandler);
  ProductListView.addEventHandler(controlProductList, controlWishlist, controlModal, wishlistClickHandler, goToDetailsPage);
  FooterView.addEventHandler(controlFooter);
  ProductsSliderView.addEventHandler(controlSlider);
  HambergurMenuView.addEventHandler(controlHambergurMenu)
}

init();
