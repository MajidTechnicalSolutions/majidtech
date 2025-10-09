import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash({ offset = 120 }) {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) return;
        const id = hash.replace('#', '');

        // Try multiple times to allow route/layout to render
        let attempts = 0;
        const tryScroll = () => {
            const el = document.getElementById(id);
            if (el) {
                const getTop = () => {
                    const r = el.getBoundingClientRect();
                    const perIdOffset = id.toLowerCase() === 'contact' ? 0 : offset;
                    const t = r.top + window.scrollY - perIdOffset;
                    const maxTop = document.documentElement.scrollHeight - window.innerHeight;
                    return Math.max(0, Math.min(t, maxTop));
                };

                // initial smooth scroll
                window.scrollTo({ top: getTop(), behavior: 'smooth' });
                // re-align a few times as images/content settle
                const times = [150, 350, 700, 1200, 1800];
                const timers = times.map((ms, i) => setTimeout(() => {
                    window.scrollTo({ top: getTop(), behavior: 'auto' });
                }, ms));

                // observe element size changes briefly
                let ro;
                if (typeof ResizeObserver !== 'undefined') {
                    ro = new ResizeObserver(() => {
                        window.scrollTo({ top: getTop(), behavior: 'auto' });
                    });
                    ro.observe(el);
                    setTimeout(() => ro.disconnect(), 2000);
                }

                // cleanup scheduled timers after 2s
                setTimeout(() => timers.forEach(clearTimeout), 2200);
            } else if (attempts < 12) {
                attempts += 1;
                setTimeout(tryScroll, 80);
            }
        };

        tryScroll();
    }, [pathname, hash, offset]);

    return null;
}


