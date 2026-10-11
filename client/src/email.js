// Shared by the server routes that email Majid Tech through Resend (the
// contact form and the "Ask Mr. Majid" brief). Server-side only.

export const TO = "majidtechnicalsolutions@gmail.com";
export const FROM = "Jamal from MajidTech <mail@majidtechnicalsolutions.com>";

// Visitors' text goes into HTML emails, so escape it.
export const escape = (value) =>
  String(value).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

export const clean = (value, max) => (typeof value === "string" ? value.trim().slice(0, max) : "");

export const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
