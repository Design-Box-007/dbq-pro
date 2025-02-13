import { images } from "../../public/assets";
import {Blog} from '@/types/index'

export const blogs: Blog[] = [
    {
      id: 1,
      title: "The Future of Live Sound",
      description:
        "Learn about the cutting-edge innovations shaping the future of music & innovations for your next event.",
      image: images.png.img15.src,
      link: "/blogs/future-of-live-sound",
    },
    {
      id: 2,
      title: "How to Choose the Right Audio Setup",
      description:
        "Learn about the cutting-edge innovations shaping the future of music & innovations for every occasion.",
        image: images.png.img16.src,
      link: "/blogs/audio-setup-guide",
    },
    {
      id: 3,
      title: "Creating the Perfect Sound Environment",
      description:
        "Learn about the cutting-edge innovations shaping the future of music & innovations for every occasion.",
        image: images.png.img17.src,
      link: "/blogs/perfect-sound-environment",
    },
  ];
