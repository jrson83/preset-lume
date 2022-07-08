import lume from 'lume/mod.ts';

const site = lume({
  src: './app',
  dev: true,
  prettyUrls: true,
  server: {
    port: 3000,
    open: true,
  },
});

export default site;
