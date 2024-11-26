import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import ProjectsSection from "./projects-section";

export default function MainSections() {
    return (
        <section className="w-7/12 flex flex-col gap-y-12 overflow-y-auto scrollbar-hide scroll-smooth">
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </section>
    )
}