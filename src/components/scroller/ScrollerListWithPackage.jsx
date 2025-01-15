import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ScrollerItem from "./ScrollerItemV1";

function ScrollerList({ scrollerImages }) {
  // Start with 3 sets of images for smoother scrolling
  const [images, setImages] = useState([
    ...scrollerImages,
    ...scrollerImages,
    ...scrollerImages,
  ]);

  const fetchMoreData = () => {
    // Add another set before we reach the end
    setImages((prevImages) => [...prevImages, ...scrollerImages]);
  };

  // This effect ensures we always have enough images ahead
  useEffect(() => {
    if (images.length < scrollerImages.length * 4) {
      fetchMoreData();
    }
  }, [images.length]);

  return (
    <div
      id="scrollable-div"
      className="scroller-container h-full overflow-hidden"
    >
      <InfiniteScroll
        dataLength={images.length}
        next={fetchMoreData}
        hasMore={true}
        loader={null}
        scrollableTarget="scrollable-div"
        className="animate-scroll"
        scrollThreshold="800px"
      >
        <ul className="flex w-full flex-col items-center gap-10 p-10 xl:gap-7 xl:p-5">
          {images.map((img, ind) => (
            <ScrollerItem
              key={`${img.id}-${ind}`}
              src={img.url}
              alt={`img-${img.id}`}
            />
          ))}
        </ul>
      </InfiniteScroll>
    </div>
  );
}

export default ScrollerList;
