import { RichTextBlock, RichTextProps } from "prismic-reactjs"

export type AboutPage = {
  title: {
    text: string;
  },
  content: {
    richText: RichTextBlock[];
  }
}