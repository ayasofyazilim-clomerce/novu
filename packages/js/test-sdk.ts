/* cspell:disable */
import { Novu } from './src';

const test = async () => {
  const novu = new Novu({
    applicationIdentifier: 'i2Xc50K5Apnf',
    subscriberId: '6447afe9d89122e250412c10',
    backendUrl: 'http://localhost:3000',
  });

  const feed = await novu.feeds.fetch();
  console.log(feed);
};

test();
