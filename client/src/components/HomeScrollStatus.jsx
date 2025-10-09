import React from "react";
import useScrollSpy from "../hooks/useScrollSpy";
import useRevealOnScroll from "../hooks/useRevealOnScroll";

const sections = [
    { id: "home", selector: "home" },
    { id: "Selectedwork", selector: "Selectedwork" },
    { id: "Services", selector: "Services" },
    { id: "Blog", selector: "Blog" },
    { id: "Contact", selector: "Contact" },
];

function HomeScrollStatus() {
    const active = useScrollSpy(sections.map((s) => s.selector), 120);
    useRevealOnScroll();

    const handleClick = (idx) => {
        const el = document.getElementById(sections[idx].selector);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="fixed left-4 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-4">
            {sections.map((_, idx) => (
                <button
                    key={`home-dot-${idx}`}
                    aria-label={`Scroll to ${sections[idx].id}`}
                    onClick={() => handleClick(idx)}
                    className={`w-2 h-10 rounded-full transition-colors ${active === idx ? "bg-majidTech" : "bg-grayMid/40"
                        }`}
                />
            ))}
        </div>
    );
}

export default HomeScrollStatus;


