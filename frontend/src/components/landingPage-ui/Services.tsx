import React from "react";

function Services() {
  return (
    <section className="py-10 lg:py-[120px] dark:bg-gray-900" id="services">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="block text-lg font-semibold text-primary dark:text-white mb-2">
            Our Services
          </span>
          <h2 className="text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] mb-4">
            Discover What We Offer
          </h2>
          <p className="text-base text-body-color dark:text-gray-400">
            Discover ShopPlusPlus's Value-Added Services. From no-fee
            transactions to secure payments and intuitive dashboards, we've got
            you covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="rounded-[20px] bg-white p-10 shadow-md hover:shadow-lg dark:bg-gray-800"
            >
              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-blue-600 mb-8">
                {service.icon}
              </div>
              <h4 className="text-xl font-semibold text-dark dark:text-white mb-3">
                {service.title}
              </h4>
              <p className="text-body-color dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const servicesData = [
  {
    title: "No-fee Transactions",
    description:
      "Our platform allows you to conduct transactions without any platform fees, helping you keep more of your profits.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.0"
        stroke="white"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Bulk Trading",
    description:
      "Buy and sell products in large quantities with ease using our marketplace. Whether you're a buyer or seller, our platform makes bulk trading simple and secure.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.0"
        stroke="white"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
        />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description:
      "With ShopPlusPlus, you can reach a global audience of potential buyers and sellers, giving you access to new markets and opportunities.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.0"
        stroke="white"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
];

export default Services;
