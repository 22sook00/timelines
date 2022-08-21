import React, { useCallback, useState } from 'react';
import Timeline from 'react-calendar-timeline';
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';
import { groupsArr, itemsArr, keys } from './generator';

const ResizeTimeline = () => {
  const [value, setValue] = useState<any>(itemsArr);
  const defaultTimeStart = moment().add(-12, 'hour');
  const defaultTimeEnd = moment().add(12, 'hour');

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
      return (
        <div
          {...getItemProps({
            style: {
              backgroundColor,
              border: `2px dashed ${borderColor}`,
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
            {itemContext.title}f
          </div>

          {itemContext.useResizeHandle && <div {...rightResizeProps} />}
        </div>
      );
    },
    [],
  );

  return (
    <div>
      <section className=" w-full  mt-10 border border-blue-400 rounded-lg">
        <Timeline
          groups={groupsArr}
          items={value}
          keys={keys}
          itemTouchSendsClick={false}
          stackItems
          itemHeightRatio={0.75}
          canMove={true}
          canResize={'both'}
          defaultTimeStart={defaultTimeStart}
          defaultTimeEnd={defaultTimeEnd}
          onItemMove={handleItemMove}
          onItemResize={handleItemResize}
          itemRenderer={handleItemRenderer}
        ></Timeline>
      </section>
    </div>
  );
};

export default ResizeTimeline;
