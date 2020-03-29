import React, { useState } from 'react';

import { Predictions } from 'aws-amplify';

const TextRekognition = () => {
    const [response, setResponse] = useState("Please upload a photo...")
    async function identify(event) {
        setResponse("Identifying text...")
        const { target: { files } } = event
        const file = files[0]
        const data = await Predictions.identify({
            text: { source: { file }, format: "PLAIN"} 
        })
        setResponse(data.text.fullText)
    }
    return (
        <div>
            <h2 className="headers">Machine Learning Amazon Rekognition</h2>
            <h2>Text identification</h2>
            <p>Select a picture/screenshot with text and upload it here</p>
            <input type="file"
            onChange={identify}
            />
            <p>{response}</p>
        </div>
    )
}

export default TextRekognition;