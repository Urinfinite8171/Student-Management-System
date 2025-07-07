import React from "react";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    title: "Starter",
    price: "₹999",
    description: "Perfect for small institutions getting started.",
    features: [
      "Student Records",
      "Basic Attendance",
      "Report Generation",
      "Email Support",
    ],
    highlight: false,
  },
  {
    title: "Professional",
    price: "₹2999",
    description: "Ideal for growing institutions with more needs.",
    features: [
      "Advanced Analytics",
      "Fee Management",
      "Mobile Access",
      "Priority Support",
    ],
    highlight: true, // Highlight this plan
  },
  {
    title: "Enterprise",
    price: "₹5999",
    description: "Complete control & customization for large campuses.",
    features: [
      "Custom Integrations",
      "Role-based Dashboards",
      "24/7 Dedicated Support",
      "Unlimited Storage",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section
      className="w-full bg-gradient-to-br from-indigo-50 via-white to-purple-100 py-20 px-6"
      id="pricing"
    >
      {/* Header */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4"
        >
          Affordable & Flexible Pricing
        </motion.h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Choose a plan that fits your institute’s scale. Upgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`rounded-3xl shadow-xl border border-indigo-100 p-8 bg-white relative hover:scale-[1.02] transition-transform duration-300 group ${
              plan.highlight
                ? "bg-gradient-to-r from-indigo-100 to-purple-100 border-indigo-200 shadow-2xl"
                : ""
            }`}
          >
            {plan.highlight && (
              <span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-bold text-indigo-700 mb-2">
              {plan.title}
            </h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <p className="text-4xl font-extrabold text-gray-900 mb-4">
              {plan.price}
              <span className="text-sm text-gray-500 font-medium"> /month</span>
            </p>
            <ul className="space-y-2 text-sm text-gray-700 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className="block w-full text-center py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:scale-105 transition"
            >
              Contact Us
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
