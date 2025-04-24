import { useState } from 'react';
import axios from 'axios';
export const QuestionForum = () => {
  const [question, setQuestion] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = () => {
    console.log(question);
    axios
      .get('http://localhost:5003/api/chatgpt/ques/' + question)
      .then((res) => {
        console.log(res.data.content);
        setMessage(res.data.content);
      });
  };
  return (
    <main className="flex-grow grid grid-cols-2 overflow-y-auto my-4">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-around">
          <section aria-live="polite">
            <h1>Question Forum</h1>

            <form>
              <input
                type="text"
                placeholder="Ask a question..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              />
              <br />
            </form>
            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
            {question && <h3>{question}</h3>}
            {question && <h5>{message}</h5>}
          </section>
        </div>
      </div>
    </main>
  );
};
