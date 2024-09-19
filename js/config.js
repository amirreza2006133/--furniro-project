import syltherineImage from "url:../img/product/syltherine.png";
import leviosaImage from "url:../img/product/leviosa edt.png";
import lolitaImage from "url:../img/product/Lolita.png";
import RespiraImage from "url:../img/product/Respira.png";
import GrifoImage from "url:../img/product/grifo.png";
import PingkyImage from "url:../img/product/pingky.png";
import MuggoImage from "url:../img/product/muggo.png";
import pottyImage from "url:../img/product/potty.png";

export const CURRENCY_UNIT = "$";

export const products = [
  {
    id: 1,
    name: "syltherine",
    description: "Stylish caffe chair",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 250,
    currency: CURRENCY_UNIT,
    discount: 30,
    imageUrl: syltherineImage,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish caffe chair",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 250,
    currency: CURRENCY_UNIT,
    discount: "",
    imageUrl: leviosaImage,
  },
  {
    id: 3,
    name: "Lolita",
    description: "Luxury big sofa",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 1400,
    currency: CURRENCY_UNIT,
    discount: "50",
    imageUrl: lolitaImage,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stolde",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 500,
    currency: CURRENCY_UNIT,
    discount: "new",
    imageUrl: RespiraImage,
  },
  {
    id: 5,
    name: "Griffo",
    description: "Night Lamp",
    sizes: ["S", "M", "L"],
    colors: ["Red", "green", "Blue"],
    price: 150,
    currency: CURRENCY_UNIT,
    discount: "new",
    imageUrl: GrifoImage,
  },
  {
    id: 6,
    name: "pingky",
    description: "cute bed set",
    sizes: ["S", "M", "L"],
    colors: ["Red", "green", "Blue"],
    price: 700,
    currency: CURRENCY_UNIT,
    discount: "",
    imageUrl: PingkyImage,
  },
  {
    id: 7,
    name: "moggo",
    description: " small mug ",
    sizes: ["S", "M", "L"],
    colors: ["Red", "green", "Blue"],
    price: 100,
    currency: CURRENCY_UNIT,
    discount: "",
    imageUrl: MuggoImage,
  },
  {
    id: 8,
    name: "potty",
    description: " minimalist sofa",
    sizes: ["S", "M", "L"],
    colors: ["Red", "green", "Blue"],
    price: 500,
    currency: CURRENCY_UNIT,
    discount: "50",
    imageUrl: pottyImage,
  },
];

// TODO: Export shop items from this elements to objects:

{
  /* <div class="product-card">
<div class="gradiant"></div>
<a class="hover-btn" href="#"> Add to cart </a>
   <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/share.svg" alt=" a share icon" />
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img
                      src="img/icons/compare-svgrepo-com 1.png"
                      alt=" a compare icon"
                    />
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/heart.svg" alt=" a heart icon " />
                    <span>like</span>
                  </a>
                </div>
              </nav>

<img
  class="product-card-image"
  src="img/product/leviosa edt.png"
  alt="a Stylish caffe chair"
/>

<div class="product-card-info">
  <h3 class="heading-tertiary">Leviosa</h3>
  <span class="tag">Stylish caffe chair</span>
  <p class="card-price">
    <span class="price-on"> Rp 2.500.000 </span>
  </p>
</div>
</div>
<div class="product-card">
<div class="off-50">
  <div class="gradiant"></div>
  <a class="hover-btn" href="#"> Add to cart </a>
   <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <img class="card-icon" src="img/icons/share.svg" alt=" a share icon" />
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img
                      src="img/icons/compare-svgrepo-com 1.png"
                      alt=" a compare icon"
                    />
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/heart.svg" alt=" a heart icon " />
                    <span>like</span>
                  </a>
                </div>
              </nav>

  <img
    class="product-card-image"
    src="img/product/lolita.png"
    alt="luxury big sofa"
  />
  <div class="product-card-info">
    <h3 class="heading-tertiary">Lolita</h3>
    <span class="tag"> Luxury big sofa</span>
    <p class="card-price">
      <span class="price-on"> Rp 7.000.000 </span>
      <span class="price-off"> Rp 14.000.000 </span>
    </p>
  </div>
</div>
</div>
<div class="product-card">
<div class="new">
  <div class="gradiant"></div>
  <a class="hover-btn" href="#"> Add to cart </a>
   <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/share.svg" alt=" a share icon" />
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img
                      src="img/icons/compare-svgrepo-com 1.png"
                      alt=" a compare icon"
                    />
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/heart.svg" alt=" a heart icon " />
                    <span>like</span>
                  </a>
                </div>
              </nav>

  <img
    class="product-card-image"
    src="img/product/respira.png"
    alt=" an outdoor bar table with stole"
  />
  <div class="product-card-info">
    <h3 class="heading-tertiary">Respira</h3>
    <span class="tag">Outdoor bar table and stole</span>
    <p class="card-price">
      <span class="price-on"> Rp 500.000 </span>
    </p>
  </div>
</div>
</div>
<div class="product-card">
<div class="new">
  <div class="gradiant"></div>
  <a class="hover-btn" href="#"> Add to cart </a>
     <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/share.svg" alt=" a share icon" />
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img
                      src="img/icons/compare-svgrepo-com 1.png"
                      alt=" a compare icon"
                    />
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/heart.svg" alt=" a heart icon " />
                    <span>like</span>
                  </a>
                </div>
              </nav>

  <img
    class="product-card-image"
    src="img/product/grifo.png"
    alt="a night lamp"
  />
  <div class="product-card-info">
    <h3 class="heading-tertiary">Grifo</h3>
    <span class="tag">night lamp</span>
    <p class="card-price">
      <span class="price-on"> Rp 1.500.000 </span>
    </p>
  </div>
</div>
</div>
<div class="product-card">
<div class="gradiant"></div>
<a class="hover-btn" href="#"> Add to cart </a>
   <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/share.svg" alt=" a share icon" />
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img
                      src="img/icons/compare-svgrepo-com 1.png"
                      alt=" a compare icon"
                    />
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/heart.svg" alt=" a heart icon " />
                    <span>like</span>
                  </a>
                </div>
              </nav>

<img
  class="product-card-image"
  src="img/product/pingky.png"
  alt="a cute bed set "
/>
<div class="product-card-info">
  <h3 class="heading-tertiary">pingky</h3>
  <span class="tag"> cute bed set</span>
  <p class="card-price">
    <span class="price-on"> Rp 7.000.000 </span>
  </p>
</div>
</div>
<div class="product-card">
<div class="gradiant"></div>
<a class="hover-btn" href="#"> Add to cart </a>
   <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/share.svg" alt=" a share icon" />
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img
                      src="img/icons/compare-svgrepo-com 1.png"
                      alt=" a compare icon"
                    />
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/heart.svg" alt=" a heart icon " />
                    <span>like</span>
                  </a>
                </div>
              </nav>

<img
  class="product-card-image"
  src="img/product/muggo.png"
  alt="a small mug"
/>
<div class="product-card-info">
  <h3 class="heading-tertiary">Moggo</h3>
  <span class="tag">a small mug</span>
  <p class="card-price">
    <span class="price-on"> Rp 150.000 </span>
  </p>
</div>
</div>
<div class="product-card">
            <div class="gradiant"></div>
            <a class="hover-btn" href="#"> Add to cart </a>
            <nav class="hover-nav">
              <div class="hover-nav-item">
                <a href="#">
                  <img src="img/icons/share.svg" alt=" a share icon" />
                  <span>share</span>
                </a>
              </div>
              <div class="hover-nav-item">
                <a href="#">
                  <img
                    src="img/icons/compare-svgrepo-com 1.png"
                    alt=" a compare icon"
                  />
                  <span>compare</span>
                </a>
              </div>
              <div class="hover-nav-item">
                <a href="#">
                  <img src="img/icons/heart.svg" alt=" a heart icon " />
                  <span>like</span>
                </a>
              </div>
            </nav>

            <img
              class="product-card-image"
              src="img/product/muggo.png"
              alt="a small mug"
            />
            <div class="product-card-info">
              <h3 class="heading-tertiary">Moggo</h3>
              <span class="tag">a small mug</span>
              <p class="card-price">
                <span class="price-on"> Rp 150.000 </span>
              </p>
            </div>
          </div>
<div class="product-card">
<div class="off-50">
  <div class="gradiant"></div>
  <a class="hover-btn" href="#"> Add to cart </a>
   <nav class="hover-nav">
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/share.svg" alt=" a share icon" />
                    <span>share</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img
                      src="img/icons/compare-svgrepo-com 1.png"
                      alt=" a compare icon"
                    />
                    <span>compare</span>
                  </a>
                </div>
                <div class="hover-nav-item">
                  <a href="#">
                    <img src="img/icons/heart.svg" alt=" a heart icon " />
                    <span>like</span>
                  </a>
                </div>
              </nav>

  <img
    class="product-card-image"
    src="img/product/potty.png"
    alt="a minimalist flower pot "
  />
  <div class="product-card-info">
    <h3 class="heading-tertiary">Potty</h3>
    <span class="tag"> minimalist flower po</span>
    <p class="card-price">
      <span class="price-on"> Rp 2.500.000 </span>
      <span class="price-off"> Rp 1.000.000 </span>
    </p>
  </div>
</div>
</div> */
}
