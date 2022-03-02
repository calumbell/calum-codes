import { GatsbyImageProps, IGatsbyImageData } from "gatsby-plugin-image";

export type Project = {
  uid: string,
  data: {
    title: {
      text: string,
    },
    subtitle: {
      text: string,
    },
    content: {
      text: string,
    }
    thumbnail: {
      gatsbyImageData: IGatsbyImageData,
      alt: string,
    },
  }
};