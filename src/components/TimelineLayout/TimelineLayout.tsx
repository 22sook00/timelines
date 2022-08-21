import React from 'react';
import moment from 'moment';
import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
import { groups, items } from './timelineData';
const TimelineLayout = () => {
  return (
    <section className="border">
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
      />
    </section>
  );
};

{
  /*<TimelineHeaders>
        <SidebarHeader>
          {({ getRootProps }) => {
            return (
              <div
                {...getRootProps()}
                className="bg-primary-default text-white text-lg font-bold  flex justify-center items-center"
              >
                Type
              </div>
            );
          }}
        </SidebarHeader>
        <DateHeader unit="primaryHeader" />
        <DateHeader />
      </TimelineHeaders>*/
}

export default TimelineLayout;
