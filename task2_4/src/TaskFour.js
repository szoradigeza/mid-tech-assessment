import React, { useEffect } from 'react'
import getProcessingPage from './getProcessingPage'

export default function TaskFour() {
    useEffect( async() => {
        //Effect callbacks are synchronous
       const testProcessing = await getProcessingPage([{state: 'processing'}, {state: 'error', errorCode: 'INCORRECT_DETAILS'}])
        console.log(testProcessing);
    }, [])
    return (
        <div>
            <h1>Task 4</h1>
        </div>
    )
}
