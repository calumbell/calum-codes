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
      gatsbyImageData: any,
      alt: string,
    },
  }
};