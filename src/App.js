import './App.css';
import './ResponseComponent';
import ResponseComponent from './ResponseComponent';
import { Configuration, OpenAIApi } from 'openai';
import PromptComponent from './PromptComponent';
import { useState } from 'react';

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// "You: What have you been up to?\nFriend: Watching old movies.\nYou: Are you looking it in HD?\nFriend:",
const completionFunction = async (newPrompt) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: newPrompt,
    temperature: 0.5,
    max_tokens: 100,
    top_p: 1.0,
    frequency_penalty: 0.5,
    presence_penalty: 0.0,
    stop: ["You:"],
  });

  return response.data.choices[0].text;
}

function App() {
  const [listMessages, setListMessages] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  
  function sendMessage(message) {
    setShowProgress(true);
    completionFunction(message).then((r) => {
      setListMessages(listMessages => [...listMessages, {
        messageSent: message,
        response: r
      }]);
      setShowProgress(false);
    });
  }
  return (<div>
    {showProgress && <LinearProgress />}
    <Box className="App"
      display="flex"
      alignItems="center"
      flexDirection="column"
      sx={{ width: '100%' }}>
        
      <PromptComponent func={sendMessage} />
      <ResponseComponent title="Response" messages={listMessages} />
    </Box>
    </div>
  );
}

export default App;
