import NavigationButtons from "./navigation-buttons";
import SocialButtons from "./social-buttons";
import UserSectionHead from "./user-section-head";
import ViewCV from "./view-cv";

export default function UserSection() {
    return (
        <section className="w-full lg:w-4/12 lg:py-10 lg:h-screen flex flex-col gap-y-6 lg:gap-y-0 items-center lg:items-start lg:justify-between">
            <UserSectionHead />
            
            <NavigationButtons />

            <ViewCV />

            <SocialButtons />
        </section>
    )
}