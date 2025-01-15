import { useEffect, useState } from "react";
import ScrollerList from "./components/scroller/ScrollerListWithoutPackage";
import { ScrollerImages } from "./constants/ScrollerImages";
import { fetchRandomPhotos } from "./services/image.service";

// function shuffleImages(images) {
//   return images.sort(() => Math.random() - 0.5);
// }

let intervalId = undefined;
function App() {
  const [imgs, setImgs] = useState(ScrollerImages);
  const [isFading, setIsFading] = useState(false);

  const [prevImgs, setPrevImgs] = useState(ScrollerImages); //display the previous set of images until the new set is ready to show(has been fetched and properly loaded)

  useEffect(function () {
    // function fadeInAndOut() {
    //   setIsFading(true);
    //   // waiting time for fade out to end ( equal to transition duration see the tailwind duration class aplied on the ScrollerItem two bg image divs )
    //   // await new Promise((resolve) => setTimeout(resolve, 200));
    //   setTimeout(() => {
    //     setIsFading(false);
    //   }, 500);
    // }

    async function preloadImages(imageUrls) {
      return Promise.all(
        imageUrls.map(
          (url) =>
            new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = () => {
                resolve();
              };
              img.onerror = (err) => {
                reject(err);
              };
            }),
        ),
      );
    }

    async function getPhotos() {
      const imageData = await fetchRandomPhotos(3);
      if (imageData) {
        await preloadImages(imageData.map((img) => img.url));

        setImgs((imgs) => {
          setPrevImgs(imgs);
          return [...imageData];
        });
        setIsFading(true);
      } else {
        console.log("Some error occured and no images were fetched");
      }
    }

    if (!intervalId)
      intervalId = setInterval(function () {
        getPhotos();
      }, 20 * 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };
  });

  // FADE OUT check
  useEffect(() => {
    if (isFading) {
      setTimeout(function () {
        setIsFading(false);
      }, 500);
    }
  }, [isFading]);

  // SHUFFLER
  /*
  useEffect(() => {
    intervalId = setInterval(() => {
      setImgs((imgs) => {
        setPrevImgs(imgs);
        return shuffleImages([...imgs]);
      });
      setIsFading(true);
    }, 10 * 1000);

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
      }
    };
  }, []);
  */

  return (
    <section className="scrollbar-hide absolute left-1/2 top-1/2 h-dvh w-dvw -translate-x-1/2 -translate-y-1/2 overflow-auto scroll-smooth bg-gray-900 py-3">
      <ScrollerList
        scrollerImages={imgs}
        prevImages={prevImgs}
        isFading={isFading}
      />
    </section>
  );
}

export default App;
