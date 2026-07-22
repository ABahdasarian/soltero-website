import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

import Sidebar from "../../components/catalog/Sidebar";
import DressGrid from "../../components/catalog/DressGrid";

export default function CatalogPage() {
  return (
    <>
      <Header />

      <main className="bg-[#F8F6F3] py-20">
        <div className="mx-auto flex max-w-7xl gap-16 px-8">
          <Sidebar />

          <div className="flex-1">
            <h1 className="mb-4 text-4xl font-light tracking-wide">
              Wedding Dresses
            </h1>

            <p className="mb-12 text-stone-500">

                </p>
    

            <DressGrid />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}