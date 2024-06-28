const ContentClient = () => {
  return (
    <>
      <section className="w-full bg-wel">
        <div className="container mx-auto py-6 lg:py-16">
          <div className="grid grid-cols-2">
            <div className="space-y-5">
              <span className="bg-[#FDE4D3] text-primary px-4 py-2 inline-block rounded-full font-light">
                #Special Food 🍇
              </span>
              <h1 className="text-6xl font-semibold leading-[1.5]">
                We Offer  <br /> Delicious{" "}
                <span className="text-primary">Food</span> <br />
                And Quick <br /> Service
              </h1>
              <p className="text-xl">
                Imagine you don’t need a diet because we <br /> provide healthy
                and delicious food for you!.
              </p>
            </div>
            <div>
              <img
                src="../../../src/assets/images/foods-welcome.png"
                className="w-fit mx-auto"
                alt=""
              />
            </div>
          </div>
          <div className="space-x-5">
            <button className="py-4 px-8 rounded-full bg-primary text-white">
              Order Now
            </button>
            <button className="text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="#f58220"
                className="size-14 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z"
                />
              </svg>
              How to Order
            </button>
          </div>
        </div>
      </section>
      <section className="container mx-auto lg:py-16 py-6">
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-util/30 rounded-lg">
            <img
              src="../../../src/assets/images/about-us-gtbFqDcB.png"
              alt=""
            />
          </div>
          <div className="space-y-5">
            <span className="bg-[#FDE4D3] text-primary px-4 py-2 inline-block rounded-full font-light">
              About Us
            </span>
            <h2 className="text-3xl font-semibold tracking-[0.75px]">
              Where quality food meet Excellent services.
            </h2>
            <p className="text-black/50 font-medium text-lg leading-[24px]">
              It’s the perfect dining experience where every dish is crafted
              with fresh, <br /> high-quality ingredients and served by friendly
              staff who go.
            </p>
            <div className="grid grid-cols-3 gap-5">
              <div className=" bg-white shadow-box p-5 rounded-lg space-y-3 border hover:border-primary transition-all">
                <div className="max-w-[55px]">
                  <img src="../../../src/assets/images/fast-food.png" alt="" />
                </div>
                <h3 className="text-lg font-[550] tracking-[0.75px]">
                  Fast Foods
                </h3>
                <p className="text-lg tracking-[0.75px] font-thin text-black/50">
                  Healthy Foods are nutrient-Dense Foods
                </p>
              </div>
              <div className=" bg-white shadow-box p-5 rounded-lg space-y-3 border hover:border-primary ">
                <div className="max-w-[55px]">
                  <img src="../../../src/assets/images/vegetables.png" alt="" />
                </div>
                <h3 className="text-lg font-[550] tracking-[0.75px]">
                  Healthy Foods
                </h3>
                <p className="text-lg tracking-[0.75px] font-thin text-black/50">
                  Healthy Foods are nutrient-Dense Foods
                </p>
              </div>
              <div className=" bg-white shadow-box p-5 rounded-lg space-y-3 border hover:border-primary ">
                <div className="max-w-[55px]">
                  <img src="../../../src/assets/images/fast-delivery.png" alt="" />
                </div>
                <h3 className="text-lg font-[550] tracking-[0.75px]">
                  Fast Delivery
                </h3>
                <p className="text-lg tracking-[0.75px] font-thin text-black/50">
                  Healthy Foods are nutrient-Dense Foods
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentClient;
