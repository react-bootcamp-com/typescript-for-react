import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";
import React from "react";

// Add type annotation for event handler
export default function App() {
  const [isOpen, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-8">
      {isOpen ? (
        <Details handleClose={handleClose} />
      ) : (
        <button onClick={handleOpen}>Open</button>
      )}
    </div>
  );
}

interface Props {}

function Details(props: Props) {
  return (
    <section className="mt-4">
      <div className="flex items-center">
        <p className="text-lg text-gray-900 sm:text-xl">{product.price}</p>

        <div className="ml-4 border-l border-gray-300 pl-4">
          <h4 className="sr-only">Reviews</h4>
          <div className="flex items-center">
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    product.rating > rating
                      ? "text-yellow-400"
                      : "text-gray-300",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{product.rating} out of 5 stars</p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center">
        <CheckIcon
          className="h-5 w-5 flex-shrink-0 text-green-500"
          aria-hidden="true"
        />
        <p className="ml-2 font-medium text-gray-500">
          In stock and ready to ship
        </p>
      </div>
      <button onClick={props.handleClose} className="py-4">
        Close
      </button>
    </section>
  );
}

const product = {
  name: "Everyday Ruck Snack",
  price: "$220",
  rating: 3.9,
  href: "#",
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg",
  imageAlt:
    "Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.",
  sizes: [
    {
      name: "18L",
      description: "Perfect for a reasonable amount of snacks.",
    },
    {
      name: "20L",
      description: "Enough room for a serious amount of snacks.",
    },
  ],
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
