import { Recipe } from "./Recipe";

// hardcoded db for recipes

export const recipeDB: Recipe[] = [
  {
    name: "Cosmopolitan",
    imageUrl:
      "https://media.istockphoto.com/id/1135076767/photo/cranberry-and-lime-cocktail.jpg?s=612x612&w=0&k=20&c=7dqjXyv__XugOyuAXqNdQsLzbV8rc4_rBmYmTeGHxeA=",
    ingredients: [
      {
        id: 3,
        name: "Vodka 40%",
        imageUrl:
          "https://cdn.pixabay.com/photo/2018/06/16/05/55/alcohol-3478219_960_720.jpg",
        amount: 1,
        measurementUnit: "litre(s)",
      },
      {
        id: 0,
        name: "Triple sec",
        imageUrl:
          "https://resources.vino.com/data/offertaFileFile/offertaFileFile-98025.jpg",
        amount: 1,
        measurementUnit: "litre(s)",
      },
      {
        id: 8,
        name: "Crannbery juice",
        imageUrl:
          "https://www.alecoq.ee/wordpress/wp-content/uploads/2014/11/fresh_johvika-sml.png",
        amount: 2,
        measurementUnit: "litre(s)",
      },
      {
        id: 6,
        name: "Lime",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091_960_720.jpg",
        amount: 2,
        measurementUnit: "pieces",
      },
      {
        id: 7,
        name: "Ice",
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/04/28/23/58/ice-6215207_960_720.jpg",
        amount: 12,
        measurementUnit: "cubes",
      },
    ],
    steps:
      "1. Fill a shaker with ice. 2. Add 1 1/2 oz of vodka, 1 oz of cranberry juice, 1/2 oz of triple sec, and 1/2 oz of fresh lime juice to the shaker. 3. Shake vigorously for about 10 seconds. 4. Strain into a chilled martini glass. 5. Garnish with a lime wheel.",
  },
  {
    name: "Wake up 'n a ditch",
    imageUrl:
      "https://i.pinimg.com/736x/d2/58/bd/d258bd014a2a73865a8faf2372add324.jpg",
    ingredients: [
      {
        id: 0,
        name: "Triple sec",
        imageUrl:
          "https://resources.vino.com/data/offertaFileFile/offertaFileFile-98025.jpg",
        amount: 1,
        measurementUnit: "litres",
      },
      {
        id: 1,
        name: "Simple syrup",
        imageUrl:
          "https://www.thespruceeats.com/thmb/aWX06OUI_zTUt_1cdh1DIxY1jVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-simple-syrup-760330-4_preview-5b0edbc8303713003737ff09.jpeg",
        amount: 2,
        measurementUnit: "litre(s)",
      },
      {
        id: 2,
        name: "Jack Daniels",
        imageUrl:
          "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
        amount: 0.5,
        measurementUnit: "oz",
      },
    ],
    steps: "1. place 2. holder 3. text",
  },
  {
    name: "Gin and Tonic",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/10/29/01/00/gin-and-tonic-507439_960_720.jpg",
    ingredients: [
      {
        id: 5,
        name: "Gin",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/05/10/08/05/gin-2300124_960_720.jpg",
        amount: 1,
        measurementUnit: "litre(s)",
      },
      {
        id: 4,
        name: "Tonic",
        imageUrl:
          "https://rimibaltic-res.cloudinary.com/image/upload/b_white,c_fit,f_auto,h_216,q_auto,w_216/d_ecommerce:backend-fallback.png/MAT_1352162_PCE_EE",
        amount: 2,
        measurementUnit: "litre(s)",
      },
      {
        id: 6,
        name: "Lime",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091_960_720.jpg",
        amount: 2,
        measurementUnit: "pieces",
      },
      {
        id: 7,
        name: "Ice",
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/04/28/23/58/ice-6215207_960_720.jpg",
        amount: 12,
        measurementUnit: "cubes",
      },
    ],
    steps:
      "1. Fill a highball glass with ice. 2. Add 2 oz of gin to the glass. 3.Top off with 4 oz of tonic water. 4. Stir gently to mix. 5.Garnish with a lime wedge.",
  },
  {
    name: "Cuba Libre",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/07/20/23/23/cuba-libre-2524121_960_720.jpg",
    ingredients: [
      {
        id: 2,
        name: "Jack Daniels",
        imageUrl:
          "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
        amount: 2,
        measurementUnit: "litres",
      },
      {
        id: 9,
        name: "Cola",
        imageUrl: "https://bilyonaryo.com/wp-content/uploads/2022/08/coke.jpg",
        amount: 2,
        measurementUnit: "litre(s)",
      },
      {
        id: 6,
        name: "Lime",
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/03/10/15/15/lime-2133091_960_720.jpg",
        amount: 2,
        measurementUnit: "pieces",
      },
      {
        id: 7,
        name: "Ice",
        imageUrl:
          "https://cdn.pixabay.com/photo/2021/04/28/23/58/ice-6215207_960_720.jpg",
        amount: 12,
        measurementUnit: "cubes",
      },
    ],
    steps:
      "1. Fill a highball glass with ice. 2. Add 2 oz of rum to the glass. 3. Squeeze in 1/2 oz of fresh lime juice. 4. Top off with 4 oz of cola. 5. Stir gently to mix. 6. Garnish with a lime wedge.",
  },
  {
    name: "Plain Jack",
    imageUrl:
      "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
    ingredients: [
      {
        id: 2,
        name: "Jack Daniels",
        imageUrl:
          "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
        amount: 2,
        measurementUnit: "litres",
      },
    ],
    steps: "1. Open Bottle 2. Chug",
  },
  {
    name: "Sweet shot",
    imageUrl:
      "https://www.thedailymeal.com/img/gallery/jack-daniels-is-the-most-recommended-shot-by-bartenders-according-to-survey/dreamstime_m_55945218.jpg",
    ingredients: [
      {
        id: 1,
        name: "Simple syrup",
        imageUrl:
          "https://www.thespruceeats.com/thmb/aWX06OUI_zTUt_1cdh1DIxY1jVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-simple-syrup-760330-4_preview-5b0edbc8303713003737ff09.jpeg",
        amount: 2,
        measurementUnit: "litre(s)",
      },
      {
        id: 2,
        name: "Jack Daniels",
        imageUrl:
          "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
        amount: 0.5,
        measurementUnit: "oz",
      },
    ],
    steps: "1. fill the bottom of the glass with syrup 2. pour Jack on top",
  },
];
