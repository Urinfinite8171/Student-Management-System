import React from "react";
import { motion } from "framer-motion";
import Solutions from "./Solutions";
import WhyChooseUs from "./WhyChooseUs";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Background blur animation */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-500"></div>
        </div>

        {/* Main content */}
        <div className="z-10 w-full max-w-5xl text-left">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 text-5xl sm:text-6xl md:text-7xl font-extrabold text-indigo-700 leading-tight mb-6"
          >
            Innovation'S
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-800 font-semibold mb-6"
          >
            Empowering Education with Next-Gen AI Software
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="text-gray-700 text-sm sm:text-base max-w-3xl leading-relaxed mb-8"
          >
            At <strong>Innovation'S</strong>, we're redefining how institutions
            manage students through the power of Artificial Intelligence. Our
            mission is to simplify, automate, and enhance every aspect of
            educational administration — from smart attendance tracking and
            academic performance insights, to seamless communication systems.
            <br />
            We don't just build software; we build intelligent systems that
            learn, adapt, and grow with your institution. With a passionate team
            and cutting-edge technology, <strong>Innovation'S</strong> is proud
            to offer the most advanced{" "}
            <strong>Student Management System</strong> in the industry —
            intuitive, scalable, and designed for tomorrow's learners.
          </motion.p>

          {/* Left-Aligned Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <button
              type="button"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-base font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              Explore More
            </button>
          </motion.div>
        </div>
      </section>
      <div>
        <Solutions />
        <WhyChooseUs />
        <Pricing />
      </div>
    </>
  );
};

export default Home;
