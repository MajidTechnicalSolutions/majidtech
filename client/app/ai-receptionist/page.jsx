import AiReceptionist from "../../src/AiReceptionist";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "AI receptionist",
  description:
    "An AI receptionist for DBHDD providers in Georgia that answers every call, day and night: it puts urgent calls through to whoever is on call, takes messages, logs staff call-outs and filters spam. From $197 a month. Try the demo.",
  alternates: { canonical: "/ai-receptionist" },
};

export default function AiReceptionistPage() {
  return (
    <>
      <AiReceptionist />
      <div className="m-auto w-9/12">
        <Footer />
      </div>
    </>
  );
}
