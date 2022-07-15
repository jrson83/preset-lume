import lume from 'lume/mod.ts';

const site = lume({
  src: './src',
  dest: "./_site",
  dev: true,
  prettyUrls: true,
  server: {
    port: 3000,
    open: false,
  },
});

export default site;
