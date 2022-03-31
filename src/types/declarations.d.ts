
/* Declare an ambient module for scss modules. This resolves a ts error */
declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}