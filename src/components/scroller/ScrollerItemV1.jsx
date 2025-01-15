function ScrollerItem({ src, bgImage, alt = "list image", isFading = true }) {
  return (
    <li
      className="relative h-[80vh] w-full overflow-hidden rounded-[2.5rem] bg-gray-700 shadow-md"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        role="img"
        aria-label={alt}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className={`duration-400 h-full w-full object-cover object-center transition-all ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
      />
      {/* <img
        src={src}
        alt={alt}
        className={`h-full w-full object-cover object-center transition-opacity duration-200 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
      /> */}
    </li>
  );
}

export default ScrollerItem;

// ############################
// ORIGINAL
// function ScrollerItem({ src, bgImage, alt = "list image", isFading = true }) {
//   return (
//     <li
//       className="relative h-[80vh] w-full overflow-hidden rounded-[2.5rem] bg-gray-700 shadow-md"
//       style={{
//         backgroundImage: `url(${bgImage}) no-repeat center center/cover`,
//       }}
//     >
//       {/* <img
//         src={src}
//         alt={alt}
//         className={`h-full w-full object-cover object-center transition-opacity duration-200 ease-in-out ${isFading ? "opacity-0" : "opacity-100"}`}
//       /> */}
//     </li>
//   );
// }

// export default ScrollerItem;
