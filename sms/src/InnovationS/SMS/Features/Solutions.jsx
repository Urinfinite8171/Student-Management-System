import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI-Powered Attendance",
    desc: "Automated attendance with facial recognition and real-time updates.",
  },
  {
    title: "Performance Analytics",
    desc: "Track academic growth with intelligent insights and dashboards.",
  },
  {
    title: "Timetable & Scheduling",
    desc: "Dynamic scheduling and class management with ease.",
  },
  {
    title: "Parent & Student Portal",
    desc: "Secure access to academic records, notifications, and more.",
  },
  {
    title: "Fee & Finance Management",
    desc: "Integrated fee collection and accounting with reports.",
  },
  {
    title: "Multi-User Access",
    desc: "Role-based login for admins, teachers, students, and parents.",
  },
];

const Solutions = () => {
  return (
    <section className="min-h-screen w-full bg-white px-6 py-20">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4"
        >
          Student Management System
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto text-left"
        >
          Our advanced Student Management System is designed to automate,
          simplify, and intelligently enhance the way educational institutions
          operate. With AI-driven features and a clean, user-friendly interface,
          schools can now manage everything from admissions to analytics
          seamlessly.
        </motion.p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-6 bg-gradient-to-br from-white via-indigo-50 to-white border border-indigo-100 rounded-xl shadow hover:shadow-md transition duration-300 hover:-translate-y-1.5"
          >
            <h3 className="text-lg font-semibold text-indigo-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <a
          href="#demo"
          className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl transition-transform hover:scale-105"
        >
          Request a Demo
        </a>
      </motion.div>
    </section>
  );
};

export default Solutions;
