import React, {useCallback, useEffect, useState} from "react";
import useFetch from "../../../../custom-hooks/useFetch";
import TimelineHeader from "./TimeLineHeader/TimelineHeader";
import TimelineInfo from "./TimelineInfo/TimelineInfo";

const TimeLine = (props) => {
    const [timeLine, setTimeLine] = useState({});
    
    const setTimeLineData = useCallback((timeLineData) => {
        setTimeLine(timeLineData);
    }, [setTimeLine])
    
    const {isLoading, error, sendRequest: fetchTimeLineData} = useFetch(setTimeLineData);
    
    useEffect(() => {
        fetchTimeLineData({
            url: "http://localhost:8080/api/v1/timeline/getAllYears",
            method: "GET"
        });
    }, [fetchTimeLineData])
    
    return(
        <>
            {Object.keys(timeLine).length > 0 ?
                Object.keys(timeLine).reverse().map((timeLineItem, index) => (
                    <TimelineHeader key={index} date={timeLineItem}>
                        {
                            timeLine[`${timeLineItem}`].map((itemDetails, index) => (
                                <TimelineInfo 
                                    key={index} 
                                    title={itemDetails.title}
                                    info={itemDetails.text}
                                />
                            ))
                        }
                    </TimelineHeader>
                ))
            : null}
        </>    
    );
}
            

export default TimeLine;