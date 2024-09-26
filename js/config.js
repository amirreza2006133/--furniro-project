import syltherineImage from "url:../img/product/syltherine.png";
import leviosaImage from "url:../img/product/leviosa edt.png";
import lolitaImage from "url:../img/product/Lolita.png";
import RespiraImage from "url:../img/product/Respira.png";
import GrifoImage from "url:../img/product/grifo.png";
import PingkyImage from "url:../img/product/pingky.png";
import MuggoImage from "url:../img/product/muggo.png";
import pottyImage from "url:../img/product/potty.png";

import sliderImage1 from "url:../img/slider/slide1.png";
import sliderImage2 from "url:../img/slider/slide2.png";
import sliderImage3 from "url:../img/slider/slide3.png";
import sliderImage4 from "url:../img/slider/slide4.png";

export const CURRENCY_UNIT = "USD";
export const LANG = "en-US"

export const products = [
  {
    id: 1,
    name: "syltherine",
    description: "Stylish caffe chair",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 250,
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
    discount: 50,
    imageUrl: lolitaImage,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stolde",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 500,
    discount: "",
    imageUrl: RespiraImage,
    new: true,
  },
  {
    id: 5,
    name: "Griffo",
    description: "Night Lamp",
    sizes: ["S", "M", "L"],
    colors: ["Red", "green", "Blue"],
    price: 150,
    discount: "",
    imageUrl: GrifoImage,
    new: true,
  },
  {
    id: 6,
    name: "pingky",
    description: "cute bed set",
    sizes: ["S", "M", "L"],
    colors: ["Red", "green", "Blue"],
    price: 700,
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
    discount: 50,
    imageUrl: pottyImage,
  },
];

export const slides = [
  {
    title: "bedroom",
    description: "inner peace",
    imageUrl: sliderImage1,
  },
  {
    title: "bedroom",
    description: "inner peace",
    imageUrl: sliderImage2,
  },
  {
    title: "bedroom",
    description: "inner peace",
    imageUrl: sliderImage3,
  },
  {
    title: "bedroom",
    description: "inner peace",
    imageUrl: sliderImage4,
  },
];
