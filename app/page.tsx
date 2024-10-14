import Header from "@/components/header/header";
import Slider from "@/components/slider/slider";

export default function page() {
  return (
    <>
      <Header />
      <main className="p-4">
        <div className="px-5">
            <div className="w-8/12">
                <Slider></Slider>
            </div>
        </div>
      </main>
    </>
  );
}