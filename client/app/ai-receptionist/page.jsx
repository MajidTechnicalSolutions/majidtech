import AiReceptionist from "../../src/AiReceptionist";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "AI receptionist",
  description:
    "An AI receptionist that answers every call to your business, day and night: it books appointments, transfers calls, takes messages, filters spam and updates your CRM. Try the demo.",
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
