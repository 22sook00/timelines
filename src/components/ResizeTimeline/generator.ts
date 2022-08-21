import moment from 'moment';
import randomColor from 'randomcolor';

const randomSeed = Math.floor(Math.random() * 1000);
console.log('randomSeed?', randomColor({ seed: randomSeed }));
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
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
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
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
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
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
  },
  {
    id: 4,
    title: '홍대점',
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
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

    //itemProps: {
    //  // these optional attributes are passed to the root <div /> of each item as <div {...itemProps} />
    //  'data-custom-attribute': 'Random content',
    //  'aria-hidden': true,
    //  onDoubleClick: () => {
    //    console.log('You clicked double!');
    //  },
    //  className: 'weekend',
    //  style: {
    //    background: 'fuchsia',
    //  },
    //},
  },
  {
    id: 2,
    group: 2,
    title: 'item 2',
    start: moment(),
    end: moment().add(1, 'day'),
    tip: 'additional information',
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
    start: moment().add(2, 'hour'),
    end: moment().add(3, 'hour'),
    //bgColor: randomColor({ luminosity: 'light', seed: randomSeed + 58 }),
    bgColor: randomColor({
      luminosity: 'light',
      seed: randomSeed + 5,
      format: 'rgba',
      alpha: 0.6,
    }),
  },
];
