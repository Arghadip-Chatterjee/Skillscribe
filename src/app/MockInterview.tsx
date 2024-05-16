import React, { useState } from 'react';
import { AudioRecorder } from 'react-audio-voice-recorder';
import './MockInterview.css';

const MockInterview: React.FC = () => {
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [interviewTopic, setInterviewTopic] = useState<string>('');

  const handleRecordingComplete = (blob: Blob) => {
    setAudioBlob(blob);
  };

  const handleStartRecording = () => {
    // The AudioRecorder component manages its own startRecording internally
    
  };

  const handleStopRecording = () => {
    // The AudioRecorder component manages its own stopRecording internally
  };

  const handleReset = async () => {
    setAudioBlob(null);

    try {
      const response = await fetch('http://localhost:8000/clear', {
        method: 'GET',
      });

      if (response.ok) {
        console.log('Chat history cleared successfully!');
      } else {
        console.error('Error clearing chat history');
      }
    } catch (error) {
      console.error('Error clearing chat history:', error);
    }
  };

  const handleSendAudio = async () => {
    if (audioBlob) {
      const formData = new FormData();
      formData.append('file', new File([audioBlob], 'interview_audio3.wav'));
  
      try {
        const response = await fetch(`http://localhost:8000/talk?interview_topic=${interviewTopic}`, {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          console.log('Audio sent successfully!');
  
          const arrayBuffer = await response.arrayBuffer();
          const audioElement = new Audio();
          audioElement.src = URL.createObjectURL(new Blob([arrayBuffer], { type: 'audio/mpeg' }));
          console.log('Audio Element:', audioElement);
          audioElement.play();
        } else {
          console.error('Error sending audio');
        }
      } catch (error) {
        console.error('Error sending audio:', error);
      }
    }
  };

  return (
    <div>
      <h1>Mock Interview</h1>
      <div>
        <label>
          Interview Topic:
          <input
            type="text"
            value={interviewTopic}
            onChange={(e) => setInterviewTopic(e.target.value)}
          />
        </label>
      </div>
      <AudioRecorder onRecordingComplete={handleRecordingComplete} />
      <div>
        <button onClick={handleStartRecording}>Start Recording</button>
        <button onClick={handleStopRecording}>Stop Recording</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSendAudio}>Send Audio</button>
      </div>
    </div>
  );
};

export default MockInterview;
