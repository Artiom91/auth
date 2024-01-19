import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {INITIAL_EVENTS, createEventId} from '../../event-utils.js';
import {Link, useNavigate} from "react-router-dom";

export default function Calendar() {
    const navigate = useNavigate();
    const [weekendsVisible, setWeekendsVisible] = React.useState(true);
    const [selectedButton, setSelectedButton] = React.useState(null);

    const handleButtonClick = (button) => {
        setSelectedButton(button === selectedButton ? null : button);
        navigate('/window');
    };

    const handleWeekendsToggle = () => {
        setWeekendsVisible(!weekendsVisible);
    };

    const handleDateSelect = (selectInfo) => {
        let calendarApi = selectInfo.view.calendar;
        calendarApi.unselect();
        navigate('/window');
    };

    return (
        <div>
            {renderSidebar()}
            <div className="flex-grow p-12">
                <FullCalendar
                    plugins={[timeGridPlugin, interactionPlugin]}
                    initialView="timeGridWeek"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    initialEvents={INITIAL_EVENTS}
                    select={handleDateSelect}
                />
            </div>
        </div>
    );

    function renderSidebar() {
        const buttonGroupStyle = "flex flex-wrap -mx-1";

        return (
            <div className={buttonGroupStyle}>
                {renderButtonGroup([
                    "Andrei Marin", "Elena Popescu", "Mihai Andru",
                    "Ion Dragomir", "Ana Simonescu"
                ])}

                <Link to="/window" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                    Открыть модальное окно
                </Link>
            </div>
        );
    }

    function renderButtonGroup(buttons) {
        const buttonGroupStyle = "flex justify-center flex-wrap ml-10";

        return (
            <div className={buttonGroupStyle}>
                {buttons.map((button, index) => (
                    <button
                        key={index}
                        className={`p-2 m-1 rounded ${selectedButton === button ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
                        onClick={() => handleButtonClick(button)}
                    >
                        {button}
                    </button>
                ))}
            </div>
        );
    }
}
