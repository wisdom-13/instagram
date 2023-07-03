import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 576 },
    items: 6
  },
};


export default function ScrollableBar({ children }: { children: React.ReactNode }) {
  return (
    <Carousel containerClass="flex " itemClass="mx-1" responsive={responsive}>
      {children}
    </Carousel>
  );
}

