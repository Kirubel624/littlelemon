import React from "react";
import Button from "./Button";
import Delivery from "../../assets/Delivery.svg";
const Card = ({ imgURL, foodName, description, price }) => {
  return (
    <article
      className={`flex flex-col justify-start item-start mb-8 w-full lg:w-[230px] boder boder-red-900
     bg-gray-200 rounded-[16px] font-karla hover:cursor-pointer`}
      aria-label={`Card for ${foodName}`}>
      <div className="borer rounded-t-xl borer-red-800 overflow-clip">
        <img
          className={`object-cover duration-300 delay=150 transition-all ease-in hover:scale-110 w-full lg:w-[250px] h-[224px] `}
          src={imgURL}
          alt={foodName}
        />
      </div>
      <span className="flex items-center justify-between">
        {" "}
        <p className="p-4" aria-label={`${foodName} name`}>
          {foodName}
        </p>
        <p className="p-4 text-[#EE9972]">{price}</p>
      </span>
      <p className="p-4" aria-label={`${foodName} description`}>
        {description}
      </p>

      <Button
        style="bg-none"
        buttonText={
          <p
            className="flex p-4"
            aria-label={`Order a delivery for ${foodName}`}>
            Order a delivery
            <img className="ml-6" src={Delivery} />
          </p>
        }
      />
    </article>
  );
};

export default Card;
