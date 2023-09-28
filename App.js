import React, { useState } from 'react';
import ReactPlayer from 'react-player';

function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  
  const rtspURL = 'https://youtu.be/5bAxTGjcLs4?si=Fd_3x5e1x5C5lN5e';

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      {isPlaying ? (
        <ReactPlayer
          url={rtspURL}
          playing={true}
          controls={true}
          width="100%"
          height="100vh"
        />
      ) : (
        <button onClick={handlePlayClick}>Play Livestream</button>
      )}
    </div>
  );
}

export default LandingPage;
