// Image imports ending in `&responsive` are turned into a <picture> descriptor by vite-imagetools
// (see responsiveImages() in vite.config.ts).
declare module "*&responsive" {
  const picture: import("@/components/ResponsiveImage").Picture;
  export default picture;
}
