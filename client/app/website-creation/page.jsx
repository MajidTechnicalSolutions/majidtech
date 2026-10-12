import WebsiteCreation from "../../src/WebsiteCreation";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "Website creation",
  description:
    "We build your website, start to launch: landing pages, business websites, online stores and redesigns, with a Care Plan once it is live.",
  alternates: { canonical: "/website-creation" },
};

export default function WebsiteCreationPage() {
  return (
    <>
      <WebsiteCreation />
      <div className="m-auto w-9/12">
        <Footer />
      </div>
    </>
  );
}
