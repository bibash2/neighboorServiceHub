import { useState, useEffect } from "react";

function useDate() {
    const [day, setDay] = useState('');


    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth()+1;
    const dayOfMonth = currentDate.getDate();
    const currentDay = `${year}-${month}-${dayOfMonth}`;

    if (day !== currentDay)
        setDay(`${year}-${month}-${dayOfMonth}`);

    return day;
}

export default useDate;