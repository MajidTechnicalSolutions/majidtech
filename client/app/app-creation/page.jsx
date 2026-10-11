import AppCreation from "../../src/AppCreation";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "App creation",
  description:
    "We build your web or mobile app, start to launch: a Discovery Sprint, Starter, Growth and Advanced apps, and a Care Plan once it is live.",
  alternates: { canonical: "/app-creation" },
};

export default function AppCreationPage() {
  return (
    <>
      <AppCreation />
      <div className="m-auto w-9/12">
        <Footer />
      </div>
    </>
  );
}
