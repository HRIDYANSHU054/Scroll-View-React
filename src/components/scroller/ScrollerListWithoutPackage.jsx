import ScrollerItem from "./ScrollerItem";

function ScrollerList({ isFading, prevImages, scrollerImages = [] }) {
  return (
    <div className="scroller-container h-full overflow-hidden">
      {/* <ul className="animate-scroll flex w-full flex-col items-center gap-10 p-10 xl:gap-7 xl:p-5">
        {scrollerImages?.length < maxImages
          ? Array.from({ length: maxImages }).map((_, ind) => (
              <ScrollerItem
                key={`${scrollerImages[ind % scrollerImages.length].id}-${ind}`}
                src={scrollerImages[ind % scrollerImages.length].url}
                alt={`img-${scrollerImages[ind % scrollerImages.length].id}`}
                bgImage={prevImages[ind % 3].url}
                isFading={isFading}
              />
            ))
          : scrollerImages.map((img, ind) => (
              <ScrollerItem
                key={`${img.id}-${ind}`}
                src={img.url}
                alt={`img-${img.id}`}
                bgImage={prevImages[ind % 3].url}
                isFading={isFading}
              />
            ))}
      </ul> */}
      <ul className="animate-scroll flex w-full flex-col items-center gap-10 p-10 px-14 xl:gap-7 xl:p-5">
        {scrollerImages.map((img, ind) => (
          <ScrollerItem
            key={`${img.id}-${ind}`}
            src={img.url}
            alt={`img-${img.id}`}
            bgImage={prevImages[ind % 3].url}
            isFading={isFading}
          />
        ))}
      </ul>
      <ul className="animate-scroll flex w-full flex-col items-center gap-10 p-10 px-14 xl:gap-7 xl:p-5">
        {scrollerImages.map((img, ind) => (
          <ScrollerItem
            key={`${img.id}-${ind}`}
            src={img.url}
            alt={`img-${img.id}`}
            bgImage={prevImages[ind % 3].url}
            isFading={isFading}
          />
        ))}
      </ul>
    </div>
  );
}

export default ScrollerList;
