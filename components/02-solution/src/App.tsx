import React from "react";

export default function App() {
  return (
    <>
      <Section
        heading="Long-term thinking"
        cover="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
        text="We're committed to responsible, sustainable, and ethical
          manufacturing. Our small-scale approach allows us to focus on quality
          and reduce our impact. We're doing our best to delay the inevitable
          heat-death of the universe."
      />
      <Section
        heading="Level up your desk"
        text="Make your desk beautiful and organized. Post a picture to social media and watch it get more likes than
        life-changing announcements. Reflect on the shallow nature of existence. At least you have a really nice
        desk setup."
      />
    </>
  );
}

interface Props {
  heading: string;
  text: string;
  cover?: string;
}

function Section(props: Props) {
  return (
    <div className="relative bg-gray-800 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
      {props.cover && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
      )}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {props.heading}
        </h2>
        <p className="mt-3 text-xl text-white">{props.text}</p>
      </div>
    </div>
  );
}
