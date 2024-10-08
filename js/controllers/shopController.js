import { COUNT_PAGINATION_ITEMS } from "../config";
import {
  addProductToCart,
  addProductToWishlist,
  deleteProductFromWishlist,
  findProductById,
  getWishlist,
  requestPaginationItems,
  state,
} from "../model";
import NotificationView from "../views/notificationView";
import PaginationView from "../views/paginationView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";
import ProductModalView from "../views/productModalView";

function controlWishlist() {
  ProductListView.renderWishlist(getWishlist()); // Update the view
}

function controlProductList(gotoPage) {
  ProductListView.render(requestPaginationItems(state.fullProducts, gotoPage));
}

function controlModal(productId) {
  // Pass the clicked product to the modal view
  ProductModalView.render(findProductById(productId));
}

function controlPagination(gotoPage = 0) {
  controlProductList(gotoPage);
  PaginationView.render(
    gotoPage,
    Math.ceil(state.fullProducts.length / COUNT_PAGINATION_ITEMS)
  );
}

function wishlistClickHandler(productId) {
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
  ProductModalView.addEventHandler(addProductToCartHandler);
  ProductListView.addEventHandler(
    controlProductList,
    controlWishlist,
    controlModal,
    wishlistClickHandler,
    goToDetailsPage
  );
  PaginationView.addEventHandler(controlPagination);
}

init();
