import { addProductToCart, addProductToWishlist, deleteProductFromCart, deleteProductFromWishlist, findProductById, getCartStorage, getWishlist, requestPaginationItems, requestSortProducts, state,} from "../model";
import CartPreviewView from "../views/cartPreviewView";
import NotificationView from "../views/notificationView";
import PaginationView from "../views/paginationView";
import ProductListView from "../views/productListView";
import ProductModalView from "../views/productModalView";
import ProductModalView from "../views/productModalView";
import SortProductView from "../views/sortProductView";

function controlWishlist() {
  ProductListView.renderWishlist(getWishlist()); // Update the view
}

function controlModal(productId) {
  ProductModalView.render(findProductById(productId));
}

function controlProductList(gotoPage = 0, products = requestPaginationItems(state.sortedProducts, gotoPage), viewMode = state.productsViewMode) {
  ProductListView.render(products, getWishlist(), viewMode);
}

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function controlPagination(gotoPage = 0, products = state.sortedProducts) {
  controlProductList(gotoPage, requestPaginationItems(products, gotoPage));
  PaginationView.render(
    gotoPage,
    Math.ceil(products.length / state.countPaginationItems),
    products.length,
    state.countPaginationItems
  );
}

function controlSortProduct(sortInfo) {
  state.countPaginationItems = sortInfo.countItems;
  state.productsViewMode = sortInfo.viewMode;
  SortProductView.render(state.countPaginationItems);
  controlPagination(0, requestSortProducts(sortInfo.sortBy))
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

function goToDetailsPage(productId) {
  window.location.assign(`product.html?id=${productId}`);
}

function init() {
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler)
  ProductModalView.addEventHandler(addProductToCartHandler);
  ProductListView.addEventHandler( null, null, controlModal, wishlistClickHandler, goToDetailsPage);
  SortProductView.addEventHandler(controlSortProduct)
  PaginationView.addEventHandler(controlPagination);
}

init();
