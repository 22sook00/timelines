import React, { useCallback } from 'react';
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker,
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
} from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import { cols, items } from './timelineData';
const TimelineLayout = () => {
  const today = Date.now();
  const tomorrow = new Date(today).getDate() + 1;
  const twoSeconds = 2000;
  const someCustomHandler = useCallback((data: any) => {
    console.log('data?', data);
  }, []);

  return (
    <div>
      <h1 className=" text-3xl font-semibold">React-Time-line Tutorial</h1>
      <section className="w-full  mt-10 border border-blue-400 rounded-lg">
        <Timeline
          groups={cols}
          items={items}
          defaultTimeStart={moment().add(-24, 'hour')}
          defaultTimeEnd={moment().add(24, 'hour')}
        >
          <TimelineHeaders>
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
          </TimelineHeaders>
        </Timeline>
      </section>
    </div>
  );
};

export default TimelineLayout;
