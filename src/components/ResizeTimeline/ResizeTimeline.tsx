import React, { useCallback, useState } from 'react';
import Timeline, {
  TimelineMarkers,
  CustomMarker,
  TodayMarker,
  CursorMarker,
  TimelineHeaders,
  SidebarHeader,
  DateHeader,
  CustomHeader,
} from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import { groupsArr, itemsArr, keys } from './generator';

const ResizeTimeline = () => {
  const [value, setValue] = useState<any>(itemsArr);
  const defaultTimeStart = moment().add(-12, 'hour');
  const defaultTimeEnd = moment().add(12, 'hour');

  const twoSeconds = 2000;
  const handleItemMove = (
    itemId: number,
    dragTime: number,
    newGroupOrder: number,
  ) => {
    const group = groupsArr[newGroupOrder];
    setValue(
      value.map((item: { id: number; end: number; start: number }) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: dragTime,
              end: dragTime + (item.end - item.start),
              group: group.id,
            })
          : item,
      ),
    );
  };
  const handleItemResize = (itemId: number, time: number, edge: string) => {
    setValue(
      value.map((item: { id: number; start: number; end: number }) =>
        item.id === itemId
          ? Object.assign({}, item, {
              start: edge === 'left' ? time : item.start,
              end: edge === 'left' ? item.end : time,
            })
          : item,
      ),
    );
  };
  const handleItemRenderer = useCallback(
    ({ item, getResizeProps, itemContext, getItemProps }: any) => {
      const { left: leftResizeProps, right: rightResizeProps } =
        getResizeProps();
      const backgroundColor = itemContext.selected
        ? 'rgb(125 211 252)'
        : item.bgColor;
      const borderColor = itemContext.resizing
        ? 'rgb(125 211 252)'
        : item.bgColor;
      //console.log('item.bgColor?', item.bgColor);
      return (
        <div
          {...getItemProps({
            style: {
              backgroundColor,
              //border: `2px dashed ${borderColor}`,
              borderRadius: 8,
            },
            onMouseDown: () => {
              console.log('on item click', item);
            },
          })}
        >
          {itemContext.useResizeHandle && <div {...leftResizeProps} />}

          <div
            className={`text-text-default  h-[25px] overflow-hidden pl-1 text-ellipsis whitespace-nowrap`}
          >
            {itemContext.title}
          </div>

          {itemContext.useResizeHandle && <div {...rightResizeProps} />}
        </div>
      );
    },
    [],
  );
  const groupRenderer = ({ group }: any) => {
    return (
      <div className="w-full text-center">
        <span className="  text-text-dark text-sm ">🏡 {group.title}</span>
        <p className="tip">{group.tip}</p>
      </div>
    );
  };
  return (
    <div>
      <section className=" w-full  mt-10 border overflow-hidden drop-shadow-sm rounded-lg">
        <Timeline
          groups={groupsArr}
          items={value}
          keys={keys}
          groupRenderer={groupRenderer}
          itemTouchSendsClick={false}
          stackItems
          itemHeightRatio={0.85}
          canMove={true}
          canResize={'both'}
          defaultTimeStart={defaultTimeStart}
          defaultTimeEnd={defaultTimeEnd}
          onItemMove={handleItemMove}
          onItemResize={handleItemResize}
          itemRenderer={handleItemRenderer}
          rightSidebarWidth={150}
        >
          <TimelineMarkers>
            <TodayMarker date={new Date()} interval={twoSeconds} />
          </TimelineMarkers>
          <TimelineHeaders className="sticky border-0  ">
            <SidebarHeader>
              {({ getRootProps }) => {
                return (
                  <div
                    {...getRootProps()}
                    className="font-medium text-sm bg-pink-filter/90 text-pink-filter-text  flex justify-center items-center"
                  >
                    Filter
                  </div>
                );
              }}
            </SidebarHeader>
            <SidebarHeader variant="right" headerData={{ someData: 'Filter' }}>
              {({ getRootProps, data }) => {
                return (
                  <div
                    {...getRootProps()}
                    className="font-medium text-sm bg-pink-filter/90 text-pink-filter-text  flex justify-center items-center"
                  >
                    Right {data.someData}
                  </div>
                );
              }}
            </SidebarHeader>
            <DateHeader
              unit="primaryHeader"
              style={{ backgroundColor: '#fdf2f8', color: '#db2777' }}
            />

            <DateHeader />
          </TimelineHeaders>
        </Timeline>
      </section>
    </div>
  );
};

export default ResizeTimeline;
