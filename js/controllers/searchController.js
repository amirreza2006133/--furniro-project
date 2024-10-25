import { deleteProductFromCart, getCartStorage, getProductsQueryResults, goToDetailsPage } from "../model";
import SearchResultsView from "../views/searchResultsView"
import CartPreviewView from "../views/cartPreviewView";
import HambergurMenuView from "../views/HambergurMenuView";
import NotificationView from "../views/notificationView";
import FooterView from "../views/footerView";

function controlFooter() {
  FooterView.render();
}
 
function controlSearchResults(query) {
  SearchResultsView.render(getProductsQueryResults(query));
}

function controlCartPreview() {
  CartPreviewView.render(getCartStorage());
}

function controlHambergurMenu() {
  HambergurMenuView.render();
}

function deleteProductFromCartHandler(productId) {
  deleteProductFromCart(productId);
  controlCartPreview();
  NotificationView.info("product deleted successfully");
}

function init() {
  CartPreviewView.addEventHandler(controlCartPreview, deleteProductFromCartHandler);
  HambergurMenuView.addEventHandler(controlHambergurMenu);
  SearchResultsView.addEventHandler(controlSearchResults, goToDetailsPage);
  FooterView.addEventHandler(controlFooter);
}

init();
