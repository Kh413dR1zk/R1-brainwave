import { pricing } from "../constants";
import Button from "./Button";
const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap ">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p>{item.description}</p>
          <div>
            {item.price && (
              <>
                <div>$</div>
                <div>{item.price}</div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:kh413d413@gmail.com"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default PricingList;