import React from 'react';
import ScheduleDate from "./ScheduleDate";
import ScheduleDetail from "./ScheduleDetail";
import ScheduleVenue from "./ScheduleVenue";

const Schedule = ({data}) => {
    return (
        <div className="schedule" key={data.id}>
            <ScheduleDate data={data}/>
            <ScheduleDetail data={data}/>
            <ScheduleVenue data={data}/>
        </div>
    );
};

export default Schedule;
