import { GatsbyImageProps, IGatsbyImageData } from "gatsby-plugin-image";
import { RichTextBlock } from "prismic-reactjs";

export type HomePage = {
  title: {
    text : string;
  },
  bio: {
    richText: RichTextBlock[];
    text: string;
  },
  hero_image: {
    gatsbyImageData: IGatsbyImageData;
    alt: string;
  }
}