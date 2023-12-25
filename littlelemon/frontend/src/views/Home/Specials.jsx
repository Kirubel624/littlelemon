import React from "react";
import Card from "../../components/common/Card";
import Button from "../../components/common/Button";

const Specials = () => {
  const specials = [
    {
      name: "Greek Salad",
      description: `A refreshing and healthy salad inspired by Mediterranean cuisine. 
      This Greek Salad features a mix of crisp vegetables like tomatoes, cucumbers, 
      and bell peppers, topped with feta cheese and olives. The salad is often dressed with olive oil,
       lemon juice, and herbs, providing a burst of flavors.`,
      price: "$12.99",
      imgURL:
        "https://res.cloudinary.com/dvqawl4nw/image/upload/v1701456411/egxxnqvfc50gfksic7dk.png",
    },
    {
      name: "Bruschetta",
      description: `A classic Italian appetizer, 
      Bruschetta consists of grilled bread rubbed with garlic and topped with diced tomatoes,
       fresh basil, and drizzled with balsamic glaze. It offers a delightful combination of crunchy bread and vibrant, 
       flavorful toppings.`,
      price: "$5.99",
      imgURL:
        "https://res.cloudinary.com/dvqawl4nw/image/upload/v1701454943/jbcggkchmsfgnomtobkp.jpg",
    },
    {
      name: "Lemon Dessert",
      description: `A zesty and indulgent lemon dessert that satisfies the sweet tooth.
       This dessert may include lemon bars, lemon tarts, or lemon-flavored cakes. 
       The bright and citrusy flavor of lemon adds a refreshing twist to the sweetness, creating a delightful treat.`,
      price: "$5.00",
      imgURL:
        "https://res.cloudinary.com/dvqawl4nw/image/upload/v1701454934/p3gvo4pew7extg8johdn.jpg",
    },
  ];

  return (
    <>
      <section className="flex flex-col justify-center items- py-24 px-[20vw] borer borer-green-900">
        <div className="flex md:flex-row flex-col justify-between md:items-center mb-4 borer borer-green-900">
          <h1 className=" font-markazi text-5xl md:pb-0 pb-4">This week's specials!</h1>
          <Button buttonText="Order online" aria-label="Order online button" />
        </div>
        <div className="flex flex-wrap justify-between items-start borer borer-green-900">
          {specials.map((special, index) => (
            <div key={index}>
              <Card
                uniqueKey={index}
                imgURL={special.imgURL}
                foodName={special.name}
                description={special.description.slice(0, 200).concat("...")}
                price={special.price}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Specials;
