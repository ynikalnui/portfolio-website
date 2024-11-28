import MainSections from "../components/main-sections";
import UserSection from "../components/user-section";

export default function Home() {
  return (
    <main className="w-full px-4 py-4 gap-y-8 lg:gap-y-0 lg:py-2 flex flex-col md:mx-auto max-w-[768px] lg:flex-row lg:justify-between lg:max-w-[1280px] lg:overflow-hidden lg:max-h-screen">
      <UserSection />
      <MainSections /> 
    </main>
  );
}
