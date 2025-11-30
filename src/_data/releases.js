const config = require('./config');
const { contentRoot } = config;

const data = [
  {
    id: 'i-dream-of-tires',
    title: 'I dream of tires',
    artist: 'eacces',
    date: '2025-09-09T00:12:00.000Z',
    bandcampUrl: 'https://eacces.bandcamp.com/album/i-dream-of-tires',
    coverPath: '/releases/i-dream-of-tires/cover.jpg',
    downloadPath: '/releases/i-dream-of-tires/eacces.i-dream-of-tires.mp3.zip',
  },
  {
    id: 'three-degrees',
    title: 'Three Degrees',
    artist: 'kindohm + jesse whitney',
    date: '2022-01-24T00:12:00.000Z',
    bandcampUrl: 'https://aethersound.bandcamp.com/album/three-degrees',
    coverPath: '/images/album-covers/three-degrees.jpg',
  },
  {
    id: 'the-revolution-will-not-be-generated',
    title: 'the revolution will not be generated',
    artist: 'speed table',
    date: '2024-12-27T00:12:00.000Z',
    bandcampUrl:
      'https://speedtable.bandcamp.com/album/the-revolution-will-not-be-generated',
    coverPath: 'https://f4.bcbits.com/img/a1861131693_10.jpg',
    downloadPath:
      '/releases/the-revolution-will-not-be-generated/speed-table.the-revolution-will-not-be-generated.mp3.zip',
  },
  {
    id: 'river-cairn',
    title: 'River Cairn',
    artist: 'kindohm',
    date: '2024-11-22T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/river-cairn',
    coverPath: '/releases/river-cairn/cover.jpg',
    downloadPath: '/releases/river-cairn/kindohm.river-cairn.mp3.zip',
  },
  {
    id: 'get',
    title: 'GET',
    artist: 'kindohm',
    date: '2023-11-30T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/get',
    coverPath: '/releases/get/cover.jpg',
    downloadPath: '/releases/get/kindohm.GET.mp3.zip',
  },
  {
    id: 'prompt-3',
    title: 'Prompt 3',
    artist: 'kindohm',
    date: '2023-07-31T00:12:00.000Z',
    bandcampUrl:
      'https://kindohm.bandcamp.com/album/prompt-3?label=407192147&tab=music',
    downloadPath: '/releases/prompt-3/kindohm.prompt-3.zip',
    coverPath: '/releases/prompt-3/cover.jpg',
  },
  {
    id: 'dskflds',
    title: 'dskflds',
    artist: 'eacces',
    date: '2023-06-25T00:12:00.000Z',
    bandcampUrl: 'https://eacces.bandcamp.com/album/dskflds',
    downloadPath: '/releases/dskflds/eacces.dskflds.mp3.zip',
    coverPath: '/releases/dskflds/cover.jpg',
  },
  {
    id: 'merge-experience',
    title: 'Merge Experience',
    artist: 'kindohm',
    date: '2022-09-16T00:12:00.000Z',
    bandcampUrl: 'https://aethersound.bandcamp.com/album/merge-experience',
    coverUrl: 'https://f4.bcbits.com/img/a0144682370_16.jpg',
  },
  {
    id: 'vacuity-shared',
    title: 'Vacuity Shared',
    artist: 'kindohm',
    date: '2022-04-15T00:12:00.000Z',
    bandcampUrl: 'https://aethersound.bandcamp.com/album/vacuity-shared',
    coverUrl: 'https://f4.bcbits.com/img/a2913544726_16.jpg',
  },

  {
    id: 'vr-sunset',
    title: 'VR Sunset',
    artist: 'kindohm',
    date: '2021-09-23T00:12:00.000Z',
    bandcampUrl: 'https://nadarecs.bandcamp.com/album/vr-sunset',
    coverUrl: 'https://f4.bcbits.com/img/a4265055060_16.jpg',
  },
  {
    id: 'internet-recluse',
    title: 'Internet Recluse',
    artist: 'kindohm',
    date: '2021-07-08T00:12:00.000Z',
    bandcampUrl:
      'https://internationalwinners.bandcamp.com/album/internet-recluse',
    coverUrl: 'https://f4.bcbits.com/img/a2486659937_16.jpg',
  },
  {
    id: 'leskinen',
    title: 'Leskinen',
    artist: 'kindohm',
    date: '2020-08-02T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/leskinen-2',
    coverUrl: 'https://f4.bcbits.com/img/a0930225538_16.jpg',
  },
  {
    id: 'deserted-reclaimed',
    title: 'Deserted / Reclaimed',
    artist: 'kindohm',
    date: '2020-09-16T00:12:00.000Z',
    bandcampUrl: 'https://ginandplatonic.bandcamp.com/album/deserted-reclaimed',
    coverUrl: 'https://f4.bcbits.com/img/a3243954701_16.jpg',
  },
  {
    id: 'fear-of-tears-for-fears',
    title: 'Fear of Tears for Fears',
    artist: 'kindohm',
    date: '2020-07-02T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/fear-of-tears-for-fears',
    coverUrl: 'https://f4.bcbits.com/img/a2341181464_16.jpg',
  },
  {
    id: 'groove-10',
    title: 'groove 10',
    artist: 'kindohm',
    date: '2019-11-25T00:12:00.000Z',
    bandcampUrl: 'https://outlineslabel.bandcamp.com/album/groove-10',
    coverUrl: 'https://f4.bcbits.com/img/a1348032845_16.jpg',
  },
  {
    id: 'meme-booth',
    title: 'Meme Booth',
    artist: 'kindohm',
    date: '2019-11-06T00:12:00.000Z',
    bandcampUrl: 'https://conditionalrecs.bandcamp.com/album/meme-booth',
    coverUrl: 'https://f4.bcbits.com/img/a0583344757_16.jpg',
  },
  {
    id: 'mesabi-range',
    title: 'Mesabi Range',
    artist: 'kindohm',
    date: '2018-11-30T00:12:00.000Z',
    bandcampUrl: 'https://nadarecs.bandcamp.com/album/mesabi-range',
    coverUrl: 'https://f4.bcbits.com/img/a1708425568_16.jpg',
  },
  {
    id: 'code218',
    title: 'CODE218',
    artist: 'kindohm',
    date: '2018-08-27T00:12:00.000Z',
    bandcampUrl: 'https://co-dependent.bandcamp.com/album/code218',
    coverUrl: 'https://f4.bcbits.com/img/a1930797492_16.jpg',
  },
  {
    id: 'starter-pack-meme',
    title: 'Starter Pack Meme',
    artist: 'kindohm',
    date: '2018-06-26T00:12:00.000Z',
    bandcampUrl:
      'https://newyorkhaunted.bandcamp.com/album/nyh101-kindohm-starter-pack-meme',
    coverUrl: 'https://f4.bcbits.com/img/a4247028320_16.jpg',
  },
  {
    id: 'decera',
    title: 'Decera',
    artist: 'kindohm',
    date: '2018-05-25T00:12:00.000Z',
    bandcampUrl: 'https://alwayshumantapes.bandcamp.com/album/decera-aht108',
    coverUrl: 'https://f4.bcbits.com/img/a2068166686_16.jpg',
  },
  {
    id: 'risc-chip',
    title: 'RISC Chip',
    artist: 'kindohm',
    date: '2016-12-15T00:12:00.000Z',
    bandcampUrl: 'https://conditionalrecs.bandcamp.com/album/risc-chip',
    coverUrl: 'https://f4.bcbits.com/img/a1338014946_16.jpg',
  },
  {
    id: 'zero-likes',
    title: 'Zero Likes',
    artist: 'kindohm',
    date: '2016-07-08T00:12:00.000Z',
    bandcampUrl:
      'https://naboamusic.tumblr.com/post/147101480094/nab096-kindohm-zero-likes-download',
    coverUrl:
      'https://64.media.tumblr.com/efa26070ed55fd9a982cbe09e33c85a9/tumblr_oa0clavvjZ1qbh4zgo1_500.png',
  },
  {
    id: 'dare-to-step-away',
    title: 'Dare to Step Away',
    artist: 'kindohm',
    date: '2016-01-26T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/dare-to-step-away-ep',
    coverUrl: 'https://f4.bcbits.com/img/a1361761201_16.jpg',
  },
  {
    id: 'expedition',
    title: 'Expedition',
    artist: 'kindohm',
    date: '2015-11-02T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/expedition',
    coverUrl: 'https://f4.bcbits.com/img/a2418867418_16.jpg',
  },
  {
    id: 'i-am-a-computer',
    title: 'I Am a Computer',
    artist: 'kindohm',
    date: '2014-12-04T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/i-am-a-computer',
    coverUrl: 'https://f4.bcbits.com/img/a3733484797_16.jpg',
  },
  {
    id: 'partial-line-segments',
    title: 'Partial Line Segments',
    artist: 'kindohm',
    date: '2013-12-17T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/partial-line-segments',
    coverUrl: 'https://f4.bcbits.com/img/a0476446562_16.jpg',
  },
  {
    id: 'defragmentation-fail',
    title: 'Defragmentation: FAIL',
    artist: 'kindohm',
    date: '2010-02-27T00:12:00.000Z',
    bandcampUrl: 'https://kindohm.bandcamp.com/album/defragmentation-fail-ep',
    coverUrl: 'https://f4.bcbits.com/img/a2281924579_16.jpg',
  },
];

module.exports = data.map((release) => {
  const { downloadPath, coverPath, coverUrl } = release;

  const downloadUrl = downloadPath
    ? `${contentRoot}${downloadPath}`
    : undefined;

  const coverUrlActual = coverUrl
    ? coverUrl
    : coverPath
    ? `${contentRoot}${coverPath}`
    : undefined;

  return {
    ...release,
    downloadUrl,
    coverUrl: coverUrlActual,
  };
});
