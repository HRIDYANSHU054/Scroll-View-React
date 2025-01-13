function ScrollerItem({ src, alt }) {
  return (
    <li className="relative h-[80vh] w-full overflow-hidden rounded-lg bg-blue-600 shadow-md">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
      />
    </li>
  );
}

export default ScrollerItem;
