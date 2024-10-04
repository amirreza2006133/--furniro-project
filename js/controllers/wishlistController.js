import { deleteProductFromWishlist, getWishlist } from "../model";
import notificationView from "../views/notificationView";
import WishlistView from "../views/wishlistView";

function controlWishlist() {
  WishlistView.render(getWishlist());
}

function handleDeleteProductFromWishlist(productId) {
  deleteProductFromWishlist(productId);
  controlWishlist();
  notificationView.info("product deleted from wishlist succesfully");
}

function init() {
  WishlistView.addEventHandler(
    controlWishlist,
    handleDeleteProductFromWishlist
  );
}

init();
