import Navigation from "./Navigation";
import Footer from "./Footer";

export default function LayoutWrapper(props: any) {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
}
