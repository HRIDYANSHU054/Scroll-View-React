import ScrollerList from "./components/scroller/ScrollerListWithPackage";
import { ScrollerImages } from "./constants/ScrollerImages";

function App() {
  return (
    <section className="scrollbar-hide absolute left-1/2 top-1/2 mx-10 mt-4 h-[90vh] w-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-auto scroll-smooth bg-gray-900">
      <ScrollerList scrollerImages={ScrollerImages} />
    </section>
  );
}

export default App;
