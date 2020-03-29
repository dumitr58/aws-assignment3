import React, {useState} from 'react';

import { Predictions } from 'aws-amplify';

const Translate = () => {
    const [response, setResponse] = useState("Ready to translate..");
const [text, updateText] = useState("write to translate...");
async function translate() {
  const data = await Predictions.convert({
    translateText: { source: { text }}
  })
  setResponse(data.text)
}

    return(
    <div>
      <h2 className="headers">Machine Learning AWS Translate</h2>
      <p>Translate from English to Romanian</p>
      <input 
      onChange={e => updateText(e.target.value)}
      value={text}
      />
      <button onClick={translate}>Translate</button>
      <p>{response}</p>
    </div>
    )
}


export default Translate;