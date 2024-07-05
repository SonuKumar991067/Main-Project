const express = require('express');
const router = express.Router();

const foodList=[
    {
      name: "Maharaja Thali", 
      price: "Rs 499",
      desc:"The Maharaja Thali: A regal feast featuring rich paneer tikka, creamy dal makhani, aromatic biryani, assorted breads, chutneys, and sweet desserts, showcasing India's culinary opulence in every bite.",
      imageUrl:"https://b.zmtcdn.com/data/pictures/chains/7/19226397/8a4d661992abd465d81e16254418d348.jpg?output-format=webp&fit=around|750:500&crop=750:500;*,*"
    },
    {
      name: "Asian Noodles", 
      price: "Rs 149" ,
      desc:"Steaming strands of noodles wok-tossed to perfection, infused with vibrant vegetables, savory soy sauce, and aromatic spices, delivering a tantalizing taste of Asian culinary excellence.",
      imageUrl:"https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2-960x1440.jpg"
    },
    {
      name: "Burger", 
      price: "Rs 149-Rs 249",
      desc:"TA symphony of flavors: Grilled veg patty, creamy avocado, roasted bell peppers, crisp lettuce, tomato, tangy sauce, all embraced by a toasted whole wheat bun. Pure vegetarian delight.",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuHTiGWB-2IMLv4VAejR5Ts6KZI59xcNmMQ&s"
    },
    {
      name: "Paneer Tikka", 
      price: "Rs 345",
      desc:"ender cubes of marinated paneer, grilled to smoky perfection, bursting with flavors of yogurt, spices, and charred edges, a delightful Indian appetizer rich in taste and texture..",
      imageUrl:"https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg"
    },
    {
      name: "Malai Chaap", 
      price: "Rs 199",
      desc:"Succulent soy chaap pieces marinated in creamy malai, yogurt, and aromatic spices, grilled to tender perfection, offering a decadent vegetarian delight with every bite.",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWweDD2NLUZQacnzURxVINDUc4UqQrQWv1Gw&s"
    },
     {
      name: "Rumali Roti", 
      price: "Rs 29",
      desc:"Thin, soft Indian flatbread resembling a handkerchief, expertly stretched and cooked on a hot griddle, perfect for scooping up rich curries or enjoying on its own.",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCyu_WNRJG0rBWDJ1EhnSycD2rl-p73KuMuh4eYM3OLom4Yo64LgDf5rTy1pH9GfXbp6g&usqp=CAU"
    },
    
    {
      name: "Garlic Naan", 
      price: "Rs 49",
      desc:"Soft, pillowy Indian bread infused with aromatic garlic, toasted to golden perfection in a tandoor, offering a savory complement to any flavorful curry or dish.",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNWi0rt6RkCa4pEXeY8v2w5tVJs7Nh0rH4KQ&s"
    }
  ]

  router.get("/foods",(req,res)=>{
    res.json(foodList);
  })


module.exports=router;