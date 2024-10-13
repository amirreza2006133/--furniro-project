import { deleteProductFromCart, deleteProductFromWishlist, getCartStorage, getWishlist } from "../model";
import CartPreviewView from "../views/cartPreviewView";
import NotificationView from "../views/notificationView";
import WishlistView from "../views/wishlistView";

function controlWishlist() {
  WishlistView.render(getWishlist());
}

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function handleDeleteProductFromWishlist(productId) {
  deleteProductFromWishlist(productId);
  controlWishlist();
  NotificationView.info("product deleted from wishlist succesfully");
}

function init() {
  WishlistView.addEventHandler(controlWishlist, handleDeleteProductFromWishlist);
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler)
}

init();
