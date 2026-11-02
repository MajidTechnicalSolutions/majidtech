import Estimator from "../../src/Estimator";
import Footer from "../../src/components/Footer";

export const metadata = {
  title: "Project estimator",
  description:
    "Describe your app or website idea and get a rough plan: the main screens or pages, the features, the package that fits and a timeline.",
  alternates: { canonical: "/estimate" },
};

export default function EstimatePage() {
  return (
    <>
      <Estimator />
      <div className="m-auto w-9/12">
        <Footer />
      </div>
    </>
  );
}
