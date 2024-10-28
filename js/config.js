import syltherineImage from "url:../img/product/syltherine.png";
import leviosaImage from "url:../img/product/leviosa edt.png";
import lolitaImage from "url:../img/product/Lolita.png";
import RespiraImage from "url:../img/product/Respira.png";
import GrifoImage from "url:../img/product/grifo.png";
import PingkyImage from "url:../img/product/pingky.png";
import MuggoImage from "url:../img/product/muggo.png";
import pottyImage from "url:../img/product/potty.png";

import detailImage1 from "url:../img/product/detail-chair.webp";
import detailImage2 from "url:../img/product/detail-bed.webp";
import detailImage3 from "url:../img/product/detail-bulb.jpg";
import detailImage4 from "url:../img/product/detail-sofa.jpg";

import sliderImage1 from "url:../img/slider/slide1.png";
import sliderImage2 from "url:../img/slider/slide2.png";
import sliderImage3 from "url:../img/slider/slide3.png";
import sliderImage4 from "url:../img/slider/slide4.png";

import tabbarImage1 from "url:../img/Group 106.png";
import tabbarImage2 from "url:../img/Group 107.png";

export const CURRENCY_UNIT = "USD";
export const LANG = "en-US";

export let COUNT_PAGINATION_ITEMS = 8;
export let COUNT_PAGINATION_BUTTONS = 3;

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

export const fullProducts = [
  {
    id: 1,
    name: "Syltherine Chair",
    description: "Stylish caffe chair",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 250,
    discount: 30,
    imageUrl: syltherineImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 2,
    name: "Leviosa Chair",
    description: "Elegant sleek chair",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 250,
    discount: "",
    imageUrl: leviosaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 3,
    name: "Lolita Sofa",
    description: "Luxury large sofa",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 1400,
    discount: 50,
    imageUrl: lolitaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 4,
    name: "Respira Outdoor Table",
    description: "Stylish outdoor table",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 500,
    discount: "",
    imageUrl: RespiraImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4],
    new: true,
  },
  {
    id: 5,
    name: "Griffo Night Lamp",
    description: "Elegant night lamp",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 150,
    discount: "",
    imageUrl: GrifoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4],
    new: true,
  },
  {
    id: 6,
    name: "Pingky Bed Set",
    description: "Cute kids' bed",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 700,
    discount: "",
    imageUrl: PingkyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 7,
    name: "Moggo Mug",
    description: "Small stylish mug",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 100,
    discount: "",
    imageUrl: MuggoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 8,
    name: "Potty Minimalist Sofa",
    description: "Comfortable minimalist sofa",
    sizes: ["S", "M", "L"],
    colors: ["Red", "Green", "Blue"],
    price: 500,
    discount: 50,
    imageUrl: pottyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 9,
    name: "Orion Coffee Table",
    description: "Sleek modern table",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Brown"],
    price: 320,
    discount: 15,
    imageUrl: syltherineImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 10,
    name: "Luna Bookshelf",
    description: "Elegant tall bookshelf",
    sizes: ["S", "M", "L"],
    colors: ["White", "Walnut", "Black"],
    price: 750,
    discount: 20,
    imageUrl: leviosaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 11,
    name: "Aurora Dining Set",
    description: "Luxurious dining set",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Beige", "White"],
    price: 1800,
    discount: 40,
    imageUrl: lolitaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 12,
    name: "Celestia Armchair",
    description: "Plush comfortable armchair",
    sizes: ["S", "M", "L"],
    colors: ["Yellow", "Navy", "Green"],
    price: 650,
    discount: "",
    imageUrl: RespiraImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 13,
    name: "Vega Floor Lamp",
    description: "Modern illuminating lamp",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gold", "Silver"],
    price: 200,
    discount: 5,
    imageUrl: GrifoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 14,
    name: "Nova Bed Frame",
    description: "Sturdy stylish frame",
    sizes: ["S", "M", "L"],
    colors: ["Oak", "Walnut", "Black"],
    price: 1100,
    discount: 25,
    imageUrl: PingkyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 15,
    name: "Atlas Bar Stool",
    description: "Modern adjustable stool",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Red", "Blue"],
    price: 180,
    discount: "",
    imageUrl: MuggoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 16,
    name: "Comet Desk",
    description: "Compact home desk",
    sizes: ["S", "M", "L"],
    colors: ["White", "Brown", "Black"],
    price: 450,
    discount: 30,
    imageUrl: pottyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 17,
    name: "Apollo Sofa",
    description: "Comfortable large sofa",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Blue", "Beige"],
    price: 1300,
    discount: 15,
    imageUrl: syltherineImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 18,
    name: "Hermes Side Table",
    description: "Stylish marble side table",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Gold"],
    price: 300,
    discount: 10,
    imageUrl: leviosaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 19,
    name: "Zephyr Lounge Chair",
    description: "Chic cozy chair",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Green", "Gray"],
    price: 850,
    discount: 20,
    imageUrl: lolitaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 20,
    name: "Helios Ceiling Light",
    description: "Industrial ceiling light",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Brass", "Copper"],
    price: 550,
    discount: "",
    imageUrl: RespiraImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 21,
    name: "Neptune Mirror",
    description: "Large minimalist mirror",
    sizes: ["S", "M", "L"],
    colors: ["Silver", "Gold", "Black"],
    price: 250,
    discount: 5,
    imageUrl: GrifoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 22,
    name: "Orpheus Cabinet",
    description: "Sleek storage cabinet",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Brown", "White"],
    price: 700,
    discount: 10,
    imageUrl: PingkyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 23,
    name: "Aether Coffee Table",
    description: "Modern glass-top table",
    sizes: ["S", "M", "L"],
    colors: ["Clear", "Black", "White"],
    price: 400,
    discount: "",
    imageUrl: MuggoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 24,
    name: "Phoenix Recliner",
    description: "Luxury adjustable recliner",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Gray", "Brown"],
    price: 1200,
    discount: 35,
    imageUrl: pottyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 25,
    name: "Ganymede Bedside Table",
    description: "Functional bedside table",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Gray"],
    price: 300,
    discount: 15,
    imageUrl: syltherineImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 26,
    name: "Jupiter Dining Chair",
    description: "Stylish cushioned chair",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Gray"],
    price: 220,
    discount: 10,
    imageUrl: leviosaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 27,
    name: "Cosmos Bed Frame",
    description: "Minimalist sturdy frame",
    sizes: ["S", "M", "L"],
    colors: ["Oak", "Walnut", "Black"],
    price: 1200,
    discount: 20,
    imageUrl: lolitaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 28,
    name: "Pluto Nightstand",
    description: "Modern nightstand design",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Gray"],
    price: 180,
    discount: "",
    imageUrl: RespiraImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 29,
    name: "Aurora TV Stand",
    description: "Sleek storage TV stand",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Walnut", "White"],
    price: 600,
    discount: 15,
    imageUrl: GrifoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 30,
    name: "Solis Wardrobe",
    description: "Spacious sliding wardrobe",
    sizes: ["S", "M", "L"],
    colors: ["White", "Walnut", "Black"],
    price: 1000,
    discount: 10,
    imageUrl: PingkyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 31,
    name: "Titanium Sofa",
    description: "Large minimalist sofa",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Beige", "Brown"],
    price: 1500,
    discount: "",
    imageUrl: MuggoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 32,
    name: "Venus Floor Lamp",
    description: "Contemporary adjustable lamp",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Gold"],
    price: 300,
    discount: 15,
    imageUrl: pottyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 33,
    name: "Mars Coffee Table",
    description: "Stylish wooden table",
    sizes: ["S", "M", "L"],
    colors: ["Walnut", "Black", "White"],
    price: 450,
    discount: 10,
    imageUrl: syltherineImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 34,
    name: "Pandora Ottoman",
    description: "Comfortable extra seating",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black", "Brown"],
    price: 250,
    discount: 5,
    imageUrl: leviosaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 35,
    name: "Themis Console Table",
    description: "Modern glass console",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Glass"],
    price: 500,
    discount: "",
    imageUrl: lolitaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 36,
    name: "Io Dining Set",
    description: "Compact round dining",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Wood"],
    price: 600,
    discount: "",
    imageUrl: RespiraImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 37,
    name: "Medusa Mirror",
    description: "Large ornate mirror",
    sizes: ["S", "M", "L"],
    colors: ["Gold", "Silver", "Black"],
    price: 450,
    discount: 20,
    imageUrl: GrifoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 38,
    name: "Oberon Sofa",
    description: "Luxury sectional sofa",
    sizes: ["S", "M", "L"],
    colors: ["Beige", "Gray", "Blue"],
    price: 1600,
    discount: "",
    imageUrl: PingkyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 39,
    name: "Triton Bed",
    description: "Plush king-sized bed",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "White", "Black"],
    price: 1400,
    discount: 30,
    imageUrl: MuggoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 40,
    name: "Atlas Office Chair",
    description: "Comfortable adjustable chair",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Red", "Gray"],
    price: 200,
    discount: "",
    imageUrl: pottyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 41,
    name: "Hestia Coffee Table",
    description: "Marble top table",
    sizes: ["S", "M", "L"],
    colors: ["White", "Black", "Gray"],
    price: 600,
    discount: "",
    imageUrl: syltherineImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 42,
    name: "Persephone Lounge Chair",
    description: "Luxurious cushioned lounge",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Beige", "Gray"],
    price: 800,
    discount: 10,
    imageUrl: leviosaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 43,
    name: "Olympus Dining Table",
    description: "Large glass dining",
    sizes: ["S", "M", "L"],
    colors: ["Clear", "Black", "White"],
    price: 1200,
    discount: 15,
    imageUrl: lolitaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 44,
    name: "Zeus Recliner",
    description: "Modern adjustable recliner",
    sizes: ["S", "M", "L"],
    colors: ["Gray", "Black", "Brown"],
    price: 1100,
    discount: 25,
    imageUrl: RespiraImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 45,
    name: "Kronos Bedside Table",
    description: "Sleek bedside table",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Gray"],
    price: 220,
    discount: "",
    imageUrl: GrifoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 46,
    name: "Hyperion Wardrobe",
    description: "Large ample wardrobe",
    sizes: ["S", "M", "L"],
    colors: ["White", "Walnut", "Black"],
    price: 1300,
    discount: 15,
    imageUrl: PingkyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 47,
    name: "Helios Floor Lamp",
    description: "Bright adjustable lamp",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Gold"],
    price: 300,
    discount: "",
    imageUrl: MuggoImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 48,
    name: "Poseidon Armchair",
    description: "Comfortable modern armchair",
    sizes: ["S", "M", "L"],
    colors: ["Blue", "Gray", "Brown"],
    price: 600,
    discount: 20,
    imageUrl: pottyImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 49,
    name: "Athena Bookshelf",
    description: "Tall ample bookshelf",
    sizes: ["S", "M", "L"],
    colors: ["Black", "White", "Walnut"],
    price: 800,
    discount: 10,
    imageUrl: syltherineImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
  },
  {
    id: 50,
    name: "Hephaestus Desk",
    description: "Sturdy ample workspace",
    sizes: ["S", "M", "L"],
    colors: ["Brown", "Black", "White"],
    price: 700,
    discount: "",
    imageUrl: leviosaImage,
    deatailImagesUrl: [detailImage1, detailImage2, detailImage3, detailImage4]
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

export const TabbarTabs = [
  {
    title: "description",
    description: {
      paragraphes: [
        `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road`,
        `Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
      ],
      images: [tabbarImage1, tabbarImage2],
    },
  },
  {
    title: "aditional information",
    description: {
      paragraphes: [
        `Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road`,
        `Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.`,
      ],
    },
  },
];
