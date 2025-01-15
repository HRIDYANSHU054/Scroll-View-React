function ScrollerItem({ src, bgImage, alt = "list image", isFading = true }) {
  return (
    <li className="relative h-[80vh] w-full overflow-hidden rounded-[2.5rem] bg-gray-700 shadow-md">
      <div
        role="img"
        aria-label={alt}
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`absolute bottom-0 left-0 right-0 top-0 z-10 h-full w-full object-cover object-center transition-all duration-500 ease-in-out ${isFading ? "opacity-100" : "opacity-0"}`}
      />
      <div
        role="img"
        aria-label={alt}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`absolute bottom-0 left-0 right-0 top-0 z-[5] h-full w-full object-cover object-center transition-all duration-500 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
      />
    </li>
  );
}

export default ScrollerItem;
