import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Cloud,
  Repeat,
  FileText,
  Brain,
  Monitor,
  Headphones,
  Layers,
  Server,
  Rocket,
} from "lucide-react";

// 1️⃣  Core value props -------------------------------------------------------
const coreReasons = [
  {
    icon: Brain,
    title: "AI‑Driven Intelligence",
    desc: "Leverage machine learning to automate and optimize school operations.",
  },
  {
    icon: Monitor,
    title: "User‑Friendly Design",
    desc: "Clean, modern interfaces that are easy for all users to navigate.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Dedicated support team ready to help anytime, anywhere.",
  },
  {
    icon: Layers,
    title: "Customizable Modules",
    desc: "Tailor features to your institution's exact needs and workflows.",
  },
  {
    icon: Server,
    title: "Secure & Scalable",
    desc: "Top‑tier security and infrastructure that grows with your institution.",
  },
  {
    icon: Rocket,
    title: "Fast Implementation",
    desc: "Get started quickly with onboarding support and guided setup.",
  },
];

// 2️⃣  Trust & security props -------------------------------------------------
const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "Data Encryption",
    desc: "Protect sensitive data with advanced encryption techniques.",
  },
  {
    icon: Lock,
    title: "Role‑Based Access Control",
    desc: "Control access based on user roles and permissions.",
  },
  {
    icon: Cloud,
    title: "Automated Backups",
    desc: "Ensure data integrity with regular automated backups.",
  },
  {
    icon: Repeat,
    title: "High Availability",
    desc: "Maintain availability and reliability with redundancy.",
  },
  {
    icon: FileText,
    title: "Audit Trails",
    desc: "Track all system activities for accountability and compliance.",
  },
];

// 3️⃣  Re‑usable icon wrapper animation --------------------------------------
const IconWrap = ({ Icon }) => (
  <motion.div
    className="p-3 bg-indigo-50 rounded-lg mb-4 inline-flex"
    initial={{ scale: 0, rotate: -15, opacity: 0 }}
    whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: "spring", stiffness: 260, damping: 20, duration: 0.4 }}
    whileHover={{ scale: 1.15, rotate: 5 }}
  >
    <Icon className="w-6 h-6 text-indigo-600 transition-colors group-hover:text-purple-600" />
  </motion.div>
);

// 4️⃣  Component --------------------------------------------------------------
const WhyChooseUs = () => (
  <section id="why" className="w-full bg-white px-6 py-24">
    {/* Header */}
    <div className="max-w-7xl mx-auto text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-6"
      >
        Why Choose Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto"
      >
        Innovation'S delivers a world‑class Student Management System that
        blends intelligent automation, beautiful design, and enterprise‑grade
        security — making education administration effortless.
      </motion.p>
    </div>

    {/* Core benefits with animated icons */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
      {coreReasons.map(({ icon: Icon, title, desc }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group p-6 bg-white border border-indigo-100 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition"
        >
          <IconWrap Icon={Icon} />
          <h3 className="text-lg font-semibold text-indigo-700 mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600">{desc}</p>
        </motion.div>
      ))}
    </div>

    {/* Security subsection */}
    <div className="text-center mb-10">
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
        Our Commitment to Security
      </h3>
      <p className="text-gray-600 max-w-xl mx-auto mt-2">
        We protect your data with the strictest security practices and
        cutting‑edge technology.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {securityFeatures.map(({ icon: Icon, title, desc }, i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-1.5 transition"
        >
          <IconWrap Icon={Icon} />
          <h4 className="text-md font-semibold text-indigo-700 mb-1">
            {title}
          </h4>
          <p className="text-sm text-gray-600">{desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
