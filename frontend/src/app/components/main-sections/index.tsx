import AboutSection from "./about";

export default function MainSections() {
    return (
        <section className="w-7/12 flex flex-col gap-y-12 overflow-auto scrollbar-hide ">
            <AboutSection />
        </section>
    )
}