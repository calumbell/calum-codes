export type Project = {
  uid: string,
  data: {
    title: {
      text: string,
    },
    subtitle: {
      text: string,
    },
    thumbnail: {
      gatsbyImageData: any,
      alt: string,
    }
  }
};