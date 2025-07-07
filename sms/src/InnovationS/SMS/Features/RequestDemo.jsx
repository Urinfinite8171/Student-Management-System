import React, { useState } from "react";
import { motion } from "framer-motion";

/* ——— static helpers ——— */
const countries = [
  { name: "India", code: "+91" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Australia", code: "+61" },
];

/* ——— main component ——— */
const RequestDemo = () => {
  /* ---------- form state ---------- */
  const [orgType, setOrgType] = useState(""); // default = none selected
  const [form, setForm] = useState({
    name: "",
    email: "",
    country: countries[0].code,
    phone: "",
    orgName: "",
    address: "",
    syllabus: "",
    volStart: "",
    volEnd: "",
    courses: "",
  });
  const [errors, setErrors] = useState({});

  /* ---------- common change handler ---------- */
  const handle = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  /* ---------- validation ---------- */
  const validate = () => {
    const e = {};

    if (!orgType) e.orgType = "Please select organization type";

    if (!/^[A-Z][a-zA-Z]{2,}$/.test(form.name.trim()))
      e.name = "Min 3 letters, first capital";

    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/.test(form.email.trim()))
      e.email = "Only Gmail or Yahoo address allowed";

    if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      e.phone = "Phone number must be 10 digits/Start with 6, 7, 8, or 9";
    }
    if (!form.orgName.trim())
      e.orgName = `${orgType || "Organization"} name required`;
    else if (!/^[A-Za-z.]+(?: [A-Za-z.]+)*$/.test(form.orgName.trim()))
      e.orgName = "Letters, spaces & periods only";

    if (!/^[A-Za-z0-9\s\-\/]+$/.test(form.address.trim()))
      e.address = "Only letters, numbers, -, / and spaces allowed";

    // org‑specific checks
    if (orgType === "School") {
      if (!form.syllabus) e.syllabus = "Select syllabus";
      if (!form.volStart || !form.volEnd) e.volume = "Enter start & end year";
    } else if (orgType === "College") {
      if (!form.courses.trim()) e.courses = "Courses required";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  /* ---------- submit ---------- */
  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    alert("Request submitted successfully! 🎉");
    // …send to API here…
  };

  /* ---------- UI ---------- */
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex items-center justify-center px-4 py-16">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full max-w-2xl space-y-6 rounded-3xl bg-white/80 p-8 shadow-2xl backdrop-blur-md"
      >
        <h2 className="text-center text-3xl font-extrabold text-indigo-700">
          Request a Demo
        </h2>

        {/* Name */}
        <div>
          <label className="mb-1 block font-semibold">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="John"
            className={`w-full rounded-lg border p-3 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block font-semibold">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="example@gmail.com"
            className={`w-full rounded-lg border p-3 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Country & Phone */}
        <div className="flex flex-col gap-2 sm:flex-row">
          <select
            name="country"
            value={form.country}
            onChange={handle}
            className="rounded-lg border p-3 bg-gray-50"
          >
            {countries.map((c) => (
              <option key={c.code} value={c.code}>
                {c.name} ({c.code})
              </option>
            ))}
          </select>
          <div className="flex-1">
            <input
              name="phone"
              value={form.phone}
              onChange={handle}
              placeholder="10‑digit phone"
              className={`w-full rounded-lg border p-3 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Organisation Type */}
        <div>
          <label className="mb-1 block font-semibold">Organisation Type</label>
          <select
            value={orgType}
            onChange={(e) => setOrgType(e.target.value)}
            className={`w-full rounded-lg border p-3 bg-gray-50 ${
              errors.orgType ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select</option>
            <option value="School">School</option>
            <option value="College">College</option>
          </select>
          {errors.orgType && (
            <p className="mt-1 text-sm text-red-500">{errors.orgType}</p>
          )}
        </div>

        {/* Conditional Fields */}
        {orgType === "School" && (
          <>
            {/* School name */}
            <div>
              <label className="mb-1 block font-semibold">School Name</label>
              <input
                name="orgName"
                value={form.orgName}
                onChange={handle}
                placeholder="St. Xavier's School"
                className={`w-full rounded-lg border p-3 ${
                  errors.orgName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.orgName && (
                <p className="text-sm text-red-500">{errors.orgName}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="mb-1 block font-semibold">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handle}
                placeholder="221B Baker St / Sector‑45, Delhi"
                className={`w-full rounded-lg border p-3 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address}</p>
              )}
            </div>

            {/* Syllabus */}
            <div>
              <label className="mb-1 block font-semibold">Syllabus Type</label>
              <select
                name="syllabus"
                value={form.syllabus}
                onChange={handle}
                className={`w-full rounded-lg border p-3 bg-gray-50 ${
                  errors.syllabus ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select</option>
                <option>NCERT</option>
                <option>SCERT</option>
              </select>
              {errors.syllabus && (
                <p className="text-sm text-red-500">{errors.syllabus}</p>
              )}
            </div>

            {/* Volume */}
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="mb-1 block font-semibold">Start Year</label>
                <input
                  name="volStart"
                  value={form.volStart}
                  onChange={handle}
                  type="number"
                  placeholder="2024"
                  className={`w-full rounded-lg border p-3 ${
                    errors.volume ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block font-semibold">End Year</label>
                <input
                  name="volEnd"
                  value={form.volEnd}
                  onChange={handle}
                  type="number"
                  placeholder="2025"
                  className={`w-full rounded-lg border p-3 ${
                    errors.volume ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
            </div>
            {errors.volume && (
              <p className="text-sm text-red-500">{errors.volume}</p>
            )}
          </>
        )}

        {orgType === "College" && (
          <>
            {/* College name */}
            <div>
              <label className="mb-1 block font-semibold">College Name</label>
              <input
                name="orgName"
                value={form.orgName}
                onChange={handle}
                placeholder="ABC Engineering College"
                className={`w-full rounded-lg border p-3 ${
                  errors.orgName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.orgName && (
                <p className="text-sm text-red-500">{errors.orgName}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label className="mb-1 block font-semibold">Address</label>
              <input
                name="address"
                value={form.address}
                onChange={handle}
                placeholder="123 Main Rd, Bengaluru"
                className={`w-full rounded-lg border p-3 ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="text-sm text-red-500">{errors.address}</p>
              )}
            </div>

            {/* Courses */}
            <div>
              <label className="mb-1 block font-semibold">
                Courses Offered
                <span className="ml-1 text-xs text-gray-500">
                  (comma‑separated)
                </span>
              </label>
              <input
                name="courses"
                value={form.courses}
                onChange={handle}
                placeholder="B.Tech, MBA, BBA"
                className={`w-full rounded-lg border p-3 ${
                  errors.courses ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.courses && (
                <p className="text-sm text-red-500">{errors.courses}</p>
              )}
            </div>
          </>
        )}

        {/* Submit */}
        <button
          type="submit"
          className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 py-3 text-lg font-semibold text-white shadow hover:scale-105 transition-transform"
        >
          Request Demo
        </button>
      </motion.form>
    </section>
  );
};

export default RequestDemo;
