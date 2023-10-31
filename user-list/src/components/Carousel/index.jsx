import styles from "./Carousel.module.scss";

const slides = [
  {
    id: 1,
    title: "Tapestry of Blazing Starbirth",
    description:
      "This image is one of the most photogenic examples of the many turbulent stellar nurseries the NASA/ESA Hubble Space Telescope has observed during its 30-year lifetime. The portrait features the giant nebula NGC 2014 and its neighbour NGC 2020 which together form part of a vast star-forming region in the Large Magellanic Cloud, a satellite galaxy of the Milky Way, approximately 163 000 light-years away.",
    src: "https://cdn.spacetelescope.org/archives/images/screen/heic2007a.jpg",
  },
  {
    id: 2,
    title: "Westerlund 2 — Hubble’s 25th anniversary image",
    description:
      "This NASA/ESA Hubble Space Telescope image of the cluster Westerlund 2 and its surroundings has been released to celebrate Hubble’s 25th year in orbit and a quarter of a century of new discoveries, stunning images and outstanding science. The image’s central region, containing the star cluster, blends visible- light data taken by the Advanced Camera for Surveys and near-infrared exposures taken by the Wide Field Camera 3. The surrounding region is composed of visible - light observations taken by the Advanced Camera for Surveys.",
    src: "https://cdn.spacetelescope.org/archives/images/thumb700x/heic1509a.jpg",
  },
  {
    id: 3,
    title: "Saturn and its northern auroras (composite image)",
    description:
      "This image is a composite of observations made of Saturn in early 2018 in the optical and of the auroras on Saturn’s north pole region, made in 2017. In contrast to the auroras on Earth the auroras on Saturn are mainly visible in the ultraviolet — a part of the electromagnetic spectrum blocked by Earth’s atmosphere — and therefore astronomers have to rely on space telescopes like the NASA/ ESA Hubble Space Telescope to study them.",
    src: "https://cdn.spacetelescope.org/archives/images/thumb700x/heic1815a.jpg",
  },
  {
    id: 4,
    title: "Hubble image of variable star RS Puppis",
    description:
      "This Hubble image shows RS Puppis, a type of variable star known as a Cepheid variable. As variable stars go, Cepheids have comparatively long periods — RS Puppis, for example, varies in brightness by almost a factor of five every 40 or so days. RS Puppis is unusual; this variable star is shrouded by thick, dark clouds of dust enabling a phenomenon known as a light echo to be shown with stunning clarity. These Hubble observations show the ethereal object embedded in its dusty environment, set against a dark sky filled with background galaxies.",
    src: "https://cdn.spacetelescope.org/archives/images/thumb700x/heic1323a.jpg",
  },
  {
    id: 5,
    title: "Jupiter and its shrunken Great Red Spot",
    description:
      "This full-disc image of Jupiter was taken on 21 April 2014 with Hubble's Wide Field Camera 3 (WFC3).",
    src: "https://cdn.spacetelescope.org/archives/images/thumb700x/heic1410a.jpg",
  },
];

function Carousel() {
  return (
    <div className={styles.carouselWrapper}>
      <ul className={styles.bodyCarousel}>
        {slides.map((s) => (
          <li className={styles.carouselItems} key={s.id}>
            <img src={s.src} alt={s.title} />
           
          </li>
        ))}
      </ul>
      <div className={styles.controlPanels}></div>
    </div>
  );
}

export default Carousel;
