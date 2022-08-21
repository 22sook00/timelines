import React from 'react';
import ResizeTimeline from './components/ResizeTimeline/ResizeTimeline';
import TimelineLayout from './components/Timelines/TimelineLayout';

function App() {
  return (
    <main className="defaultLayout">
      <h1 className=" text-3xl font-medium">React-Time-line Tutorial</h1>
      {/*<TimelineLayout />*/}
      <ResizeTimeline />
    </main>
  );
}

export default App;
