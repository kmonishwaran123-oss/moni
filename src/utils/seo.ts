/**
 * SEO utility to apply dynamic meta tags based on the current page route.
 */
export const applyPageSEO = (path: string) => {
    const titles: Record<string, string> = {
        "/": "Monishwaran K | Portfolio",
        "/about": "About | Monishwaran K",
        "/projects": "Projects | Monishwaran K",
        "/certifications": "Certifications | Monishwaran K",
        "/events": "Events | Monishwaran K",
        "/stats": "Stats | Monishwaran K",
        "/contact": "Contact | Monishwaran K",
    };

    const descriptions: Record<string, string> = {
        "/": "Explore Monishwaran K's portfolio, an aspiring React developer and engineer.",
        "/about": "Learn more about Monishwaran K's background, skills, and journey.",
        "/projects": "Discover the high-impact projects built by Monishwaran K.",
        "/certifications": "Professional certifications and achievements of Monishwaran K.",
        "/events": "Timeline of events, hackathons, and activities.",
        "/stats": "Key metrics and statistics on skills and contributions.",
        "/contact": "Get in touch with Monishwaran K for collaborations.",
    };

    const title = titles[path] || "Monishwaran K | Portfolio";
    const description = descriptions[path] || "Monishwaran K's professional portfolio.";

    // Apply title
    document.title = title;

    // Apply meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", description);
    }
};
