import MainSections from "./components/main-sections";
import UserSection from "./components/user-section";

export default function Home() {
  return (
    <main className="w-full px-4 py-2 flex flex-col md:flex-row md:justify-between md:p-0 md:max-w-[1280px] md:mx-auto md:overflow-hidden">
      <UserSection />
      <MainSections /> 
    </main>
  );
}
