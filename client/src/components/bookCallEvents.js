// Opens the "Book a call" pop-up (BookCall.jsx, mounted once in the layout)
// from anywhere: after the contact form sends ("contact"), from Ask Mr. Majid
// ("chat") or from the project estimator ("estimate").
export const openBookCall = (from) => window.dispatchEvent(new CustomEvent("book-call", { detail: { from } }));

// Asks Ask Mr. Majid to reopen its chat ("Back to chat" in the booker).
export const openAskMajid = () => window.dispatchEvent(new Event("ask-majid-open"));
