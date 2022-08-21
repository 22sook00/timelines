import moment from 'moment';

export const cols = [
  {
    id: 1,
    title: 'A',
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
  },
  {
    id: 2,
    title: 'B',
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
  },
  {
    id: 3,
    title: 'C',
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
  },
  {
    id: 4,
    title: 'D',
    rightTitle: 'title in the right sidebar',
    stackItems: true,
    height: 30,
  },
];

// 각 날짜에 맞는 아이템 리스트
export const items = [
  {
    id: 1,
    group: 1,
    title: 'item 1',
    start_time: moment(),
    end_time: moment().add(1, 'hour'),
    canMove: true,
    canResize: true,
    canChangeGroup: true,
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
    start_time: moment(),
    end_time: moment().add(1, 'day'),
    tip: 'additional information',
    color: 'rgb(158, 14, 206)',
    selectedBgColor: 'rgba(225, 166, 244, 1)',
    bgColor: 'rgba(225, 166, 244, 0.6)',
  },
  {
    id: 3,
    group: 3,
    title: 'item 3',
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour'),
  },
];

export const markerDates = (today: any, tomorrow: any) => {
  [
    { id: 1, date: today },
    { id: 2, date: tomorrow },
  ];
};
