const config = require('./config');
const { contentRoot } = config;

const data = [
  {
    id: 'prompt-3',
    title: 'Prompt 3',
    artist: 'kindohm',
    date: '2023-07-31T00:12:00.000Z',
    bandcampUrl:
      'https://kindohm.bandcamp.com/album/prompt-3?label=407192147&tab=music',
    isHosted: true,
  },
  {
    id: 'merge-experience',
    title: 'Merge Experience',
    artist: 'kindohm',
    date: '2022-09-16T00:12:00.000Z',
    bandcampUrl: 'https://aethersound.bandcamp.com/album/merge-experience',
    isHosted: false,
  },
  {
    id: 'vacuity-shared',
    title: 'Vacuity Shared',
    artist: 'kindohm',
    date: '2022-04-15T00:12:00.000Z',
    bandcampUrl: 'https://aethersound.bandcamp.com/album/vacuity-shared',
    isHosted: false,
  },
  {
    id: 'three-degrees',
    title: 'Three Degrees',
    artist: 'kindohm',
    date: '2022-01-14T00:12:00.000Z',
    bandcampUrl: 'https://aethersound.bandcamp.com/album/three-degrees',
    isHosted: false,
  },
  {
    id: 'vr-sunset',
    title: 'VR Sunset',
    artist: 'kindohm',
    date: '2021-09-23T00:12:00.000Z',
    bandcampUrl: 'https://nadarecs.bandcamp.com/album/vr-sunset',
    isHosted: false,
  },
  {
    id: 'internet-recluse',
    title: 'Internet Recluse',
    artist: 'kindohm',
    date: '2021-07-08T00:12:00.000Z',
    bandcampUrl:
      'https://internationalwinners.bandcamp.com/album/internet-recluse',
    isHosted: false,
  },
  {
    id: 'leskinen',
    title: 'Leskinen',
    artist: 'kindohm',
    date: '2020-08-02T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/leskinen-2',
    isHosted: false,
  },
  {
    id: 'deserted-reclaimed',
    title: 'Deserted / Reclaimed',
    artist: 'kindohm',
    date: '2020-09-16T00:12:00.000Z',
    bandcampUrl: 'https://ginandplatonic.bandcamp.com/album/deserted-reclaimed',
    isHosted: false,
  },
  {
    id: 'fear-of-tears-for-fears',
    title: 'Fear of Tears for Fears',
    artist: 'kindohm',
    date: '2020-07-02T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/fear-of-tears-for-fears',
    isHosted: false,
  },
  {
    id: 'groove-10',
    title: 'groove 10',
    artist: 'kindohm',
    date: '2019-11-25T00:12:00.000Z',
    bandcampUrl: 'https://outlineslabel.bandcamp.com/album/groove-10',
    isHosted: false,
  },
  {
    id: 'meme-booth',
    title: 'Meme Booth',
    artist: 'kindohm',
    date: '2019-11-06T00:12:00.000Z',
    bandcampUrl: 'https://conditionalrecs.bandcamp.com/album/meme-booth',
    isHosted: false,
  },
  {
    id: 'mesabi-range',
    title: 'Mesabi Range',
    artist: 'kindohm',
    date: '2018-11-30T00:12:00.000Z',
    bandcampUrl: 'https://nadarecs.bandcamp.com/album/mesabi-range',
    isHosted: false,
  },
  {
    id: 'code218',
    title: 'CODE218',
    artist: 'kindohm',
    date: '2018-08-27T00:12:00.000Z',
    bandcampUrl: 'https://co-dependent.bandcamp.com/album/code218',
    isHosted: false,
  },
  {
    id: 'starter-pack-meme',
    title: 'Starter Pack Meme',
    artist: 'kindohm',
    date: '2018-06-26T00:12:00.000Z',
    bandcampUrl:
      'https://newyorkhaunted.bandcamp.com/album/nyh101-kindohm-starter-pack-meme',
    isHosted: false,
  },
  {
    id: 'decera',
    title: 'Decera',
    artist: 'kindohm',
    date: '2018-05-25T00:12:00.000Z',
    bandcampUrl: 'https://alwayshumantapes.bandcamp.com/album/decera-aht108',
    isHosted: false,
  },
  {
    id: 'risc-chip',
    title: 'RISC Chip',
    artist: 'kindohm',
    date: '2016-12-15T00:12:00.000Z',
    bandcampUrl: 'https://conditionalrecs.bandcamp.com/album/risc-chip',
    isHosted: false,
  },
  {
    id: 'zero-likes',
    title: 'Zero Likes',
    artist: 'kindohm',
    date: '2016-07-08T00:12:00.000Z',
    bandcampUrl:
      'https://naboamusic.tumblr.com/post/147101480094/nab096-kindohm-zero-likes-download',
    isHosted: false,
  },
  {
    id: 'zero-likes',
    title: 'Zero Likes',
    artist: 'kindohm',
    date: '2016-07-08T00:12:00.000Z',
    bandcampUrl:
      'https://naboamusic.tumblr.com/post/147101480094/nab096-kindohm-zero-likes-download',
    isHosted: false,
  },
  {
    id: 'dare-to-step-away',
    title: 'Dare to Step Away',
    artist: 'kindohm',
    date: '2016-01-26T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/dare-to-step-away-ep',
    isHosted: false,
  },
  {
    id: 'expedition',
    title: 'Expedition',
    artist: 'kindohm',
    date: '2015-11-02T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/expedition',
    isHosted: false,
  },
  {
    id: 'i-am-a-computer',
    title: 'I Am a Computer',
    artist: 'kindohm',
    date: '2014-12-04T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/i-am-a-computer',
    isHosted: false,
  },
  {
    id: 'partial-line-segments',
    title: 'Partial Line Segments',
    artist: 'kindohm',
    date: '2013-12-17T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/partial-line-segments',
    isHosted: false,
  },
  {
    id: 'defragmentation-fail',
    title: 'Defragmentation: FAIL',
    artist: 'kindohm',
    date: '2010-02-27T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/defragmentation-fail-ep',
    isHosted: false,
  },
];

module.exports = data.map((release) => {
  const { id, isHosted, hasPage, bandcampUrl } = release;

  const link = hasPage ? `/releases/${id}` : bandcampUrl;
  const filename = isHosted ? `kindohm.${id}.zip` : undefined;
  const downloadUrl = filename
    ? `${contentRoot}/releases/${id}/${filename}`
    : undefined;

  return {
    ...release,
    filename,
    link,
    downloadUrl,
  };
});
