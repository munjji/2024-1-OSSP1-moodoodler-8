import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import DiaryWritePopup from '../components/DiaryWritePopup';
import Calendar from '../components/Calendar';
import DiaryShow from '../components/DiaryShow';
import useMoodCalendar from '../hooks/useMoodCalendar';
import selectedDateState from '../stores/selectedDate';

export default function Main() {
  const context = useOutletContext();
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
  const splited = selectedDate.split('-');
  const date = parseInt(splited[2]) - 1;
  const { daysDiary } = useMoodCalendar();

  return (
    <div className='relative'>
      <div className='flex flex-col items-center gap-[12px]'>
        {context.isCalendar ? (
          ''
        ) : (
          <Calendar
            handleColorChipToggle={context.handleColorChipToggle}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        )}
        {daysDiary.length < date + 1 ? (
          <DiaryWritePopup selectedDate={selectedDate} />
        ) : daysDiary[date].content ? (
          <DiaryShow
            content={daysDiary[date].content}
            selectedDate={selectedDate}
            text='분석 결과 보기'
            color='orange'
          />
        ) : (
          <DiaryWritePopup selectedDate={selectedDate} />
        )}
      </div>
    </div>
  );
}
