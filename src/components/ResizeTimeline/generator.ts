import moment from 'moment';
import randomColor from 'randomcolor';

const randomSeed = Math.floor(Math.random() * 1000);
//console.log('randomSeed?', randomColor({ seed: randomSeed }));
export const keys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start',
  itemTimeEndKey: 'end',
  groupLabelKey: 'title',
};

export const groupsArr = [
  {
    id: 1,
    title: '학동점',
    rightTitle: '학동점',
    tip: 'additional information',
    //stackItems: true,
    height: 60,
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 1,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 2,
    title: '논현점',
    rightTitle: '논현점',
    tip: 'additional information',
    //stackItems: true,
    height: 60,
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 2,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 3,
    title: '용산점',
    rightTitle: '용산점',
    stackItems: true,
    height: 60,
  },
  {
    id: 4,
    title: '홍대점',
    rightTitle: '홍대점',
    stackItems: true,
    height: 60,
  },
  {
    id: 5,
    title: '학동점',
    rightTitle: '학동점',
    //stackItems: true,
    height: 60,
    tip: 'additional information',
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 1,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 6,
    title: '논현점',
    rightTitle: '논현점',
    //stackItems: true,
    tip: 'additional information',
    height: 60,
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 2,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 7,
    title: '용산점',
    rightTitle: '용산점',
    stackItems: true,
    height: 60,
  },
  {
    id: 8,
    title: '홍대점',
    rightTitle: '홍대점',
    tip: 'additional information',
    stackItems: true,
    height: 60,
  },
  {
    id: 9,
    title: '학동점',
    rightTitle: '학동점',
    tip: 'additional information',
    //stackItems: true,
    height: 60,
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 1,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 10,
    title: '논현점',
    rightTitle: '논현점',
    //stackItems: true,
    height: 60,

    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 2,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 11,
    title: '용산점',
    tip: 'additional information',
    rightTitle: '용산점',
    stackItems: true,
    height: 60,
  },
  {
    id: 12,
    title: '홍대점',
    rightTitle: '홍대점',
    tip: 'additional information',
    stackItems: true,
    height: 60,
  },
];

// 각 날짜에 맞는 아이템 리스트
export const itemsArr = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start: moment(),
    end: moment().add(1, 'hour'),
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 1,
      format: 'rgba',
      alpha: 0.6,
    }),

    canMove: true,
    canResize: true,
    canChangeGroup: true,
    className: 'weekend',

    itemProps: {
      // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
      'data-custom-attribute': 'Random content',
      'aria-hidden': true,
      onDoubleClick: () => {
        console.log('You clicked double!');
      },
      className: 'weekend',
      style: {
        background: 'fuchsia',
      },
    },
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start: moment(),
    end: moment().add(1, 'day'),
    //tip: 'additional information',
    //color: 'rgb(158, 14, 206)',
    //selectedBgColor: 'rgba(225, 166, 244, 1)',
    //bgColor: randomColor({ luminosity: 'light', seed: randomSeed + 14 }),
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 14,
      format: 'rgba',
      alpha: 0.6,
      hue: 3,
    }),
  },
  {
    id: 3,
    group: 3,
    title: 'item 3',
    start: moment().add(1, 'day'),
    end: moment().add(2, 'day'),
    //bgColor: randomColor({ luminosity: 'light', seed: randomSeed + 58 }),
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 15,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 4,
    group: 4,
    title: 'item 4',
    start: moment().add(1, 'hour'),
    end: moment().add(13, 'hour'),
    //bgColor: randomColor({ luminosity: 'light', seed: randomSeed + 58 }),
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 9,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 5,
    group: 5,
    title: 'item 5',
    start: moment().add(6, 'hour'),
    end: moment().add(10, 'hour'),
    //bgColor: randomColor({ luminosity: 'light', seed: randomSeed + 58 }),
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 10,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
  {
    id: 6,
    group: 6,
    title: 'item 6',
    start: moment().add(1, 'day'),
    end: moment().add(3, 'day'),
    //bgColor: randomColor({ luminosity: 'light', seed: randomSeed + 58 }),
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 6,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
];
