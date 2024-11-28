import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import ProjectsSection from "./projects-section";

export default function MainSections() {
    return (
        <section className="w-full lg:w-7/12 flex flex-col gap-y-10 lg:gap-y-12 overflow-y-auto scrollbar-hide scroll-smooth">
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </section>
    )
}