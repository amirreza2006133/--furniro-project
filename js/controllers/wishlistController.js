import { getWishlist } from "../model";
import WishlistView from "../views/wishlistView";

const wishlist = getWishlist();

function init() {
    WishlistView.render(wishlist)
}

init();
