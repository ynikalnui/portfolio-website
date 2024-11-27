import SocialButtons from "../user-section-components/social-buttons";
import UserSectionHead from "../user-section-components/user-section-head";
import ViewCV from "../user-section-components/view-cv";
import NavigationButtons from "./navigation-buttons";

export default function UserSectionDesktop() {
    return (
        <section className="w-4/12 py-10 h-screen flex flex-col justify-between">
            <UserSectionHead />
            
            <NavigationButtons />

            <ViewCV />

            <SocialButtons />
        </section>
    )
}