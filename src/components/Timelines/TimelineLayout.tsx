import React from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
const TimelineLayout = () => {
  const groups = [
    { id: 1, title: 'group 1' },
    { id: 2, title: 'group 2' },
  ];

  const items = [
    {
      id: 1,
      group: 1,
      title: 'item 1',
      start_time: moment(),
      end_time: moment().add(1, 'hour'),
    },
    {
      id: 2,
      group: 2,
      title: 'item 2',
      start_time: moment().add(-0.5, 'hour'),
      end_time: moment().add(0.5, 'hour'),
    },
    {
      id: 3,
      group: 1,
      title: 'item 3',
      start_time: moment().add(2, 'hour'),
      end_time: moment().add(3, 'hour'),
    },
  ];
  return (
    <div>
      <h1 className=" text-3xl font-semibold">React-Time-line Tutorial</h1>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
      />
    </div>
  );
};

export default TimelineLayout;