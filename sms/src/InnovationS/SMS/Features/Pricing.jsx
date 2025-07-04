import React, { useState } from "react";
import { motion } from "framer-motion";

const countries = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Australia", code: "+61" },
];

const Pricing = () => {
  /* ---------------- form state ---------------- */
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    country: countries[0].code,
  });
  const [errors, setErrors] = useState({});

  /* --------------- handlers ------------------- */
  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!/^[A-Za-z\s]{3,}$/.test(form.name.trim()))
      e.name = "Name ≥ 3 letters, no numbers/symbols";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Invalid email";
    if (!/^\d{10}$/.test(form.phone.trim()))
      e.phone = "Phone must be 10 digits";
    if (!form.org.trim()) e.org = "Organization required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    alert(
      `Thanks! We'll reach out at ${form.country} ${form.phone} / ${form.email}`
    );
    /* TODO: send data to backend */
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6 min-h-screen" id="pricing">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-indigo-700 mb-4"
        >
          Affordable & Flexible Pricing
        </motion.h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Choose a plan that suits your institution's size and needs. No hidden
          costs — just powerful features at honest prices.
        </p>
      </div>

      {/* Pricing Cards */}
      <section
        className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-20 px-6"
        id="pricing"
      >
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-indigo-100 rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-indigo-700 mb-4">
              Complete Student Management Suite
            </h2>
            <p className="text-gray-600 mb-6">
              Get all the core features you need to manage your institution with
              ease.
            </p>
            <p className="text-5xl font-extrabold text-gray-900 mb-2">
              ₹2999{" "}
              <span className="text-lg font-normal text-gray-500">/month</span>
            </p>

            <ul className="text-sm text-gray-700 space-y-3 mt-6">
              <li>✅ Smart Student Records</li>
              <li>✅ Attendance Automation</li>
              <li>✅ Performance Reports</li>
              <li>✅ Fee Management</li>
              <li>✅ Mobile & Cloud Access</li>
              <li>✅ 24/7 Priority Support</li>
            </ul>
          </motion.div>

          {/* Requirement Form */}
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white rounded-xl shadow-md border border-gray-200 p-8 space-y-5"
          >
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
              Tell Us Your Needs
            </h3>

            {/* Name */}
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full rounded-lg border p-3 ${
                  errors.name && "border-red-500"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                className={`w-full rounded-lg border p-3 ${
                  errors.email && "border-red-500"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone with country dropdown */}
            <div>
              <div className="flex gap-2">
                <select
                  name="country"
                  value={form.country}
                  onChange={handleChange}
                  className="rounded-lg border p-3 bg-gray-50"
                >
                  {countries.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.name} ({c.code})
                    </option>
                  ))}
                </select>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="10‑digit phone"
                  className={`flex-1 rounded-lg border p-3 ${
                    errors.phone && "border-red-500"
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Organization */}
            <div>
              <input
                name="org"
                value={form.org}
                onChange={handleChange}
                placeholder="School / College / Institute"
                className={`w-full rounded-lg border p-3 ${
                  errors.org && "border-red-500"
                }`}
              />
              {errors.org && (
                <p className="text-red-500 text-sm mt-1">{errors.org}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold hover:scale-105 transition"
            >
              Submit Requirements
            </button>
          </motion.form>
        </div>
      </section>
    </section>
  );
};

export default Pricing;
