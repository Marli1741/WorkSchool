import React, { useState } from 'react';

const EmojiDisplayComponent = () => {
  const [inputText, setInputText] = useState('');

  // Define image URLs for different text values
  const imageMap = {
    happy: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Smiley.svg/800px-Smiley.svg.png',
    like: 'https://st.depositphotos.com/1001911/1554/v/450/depositphotos_15540341-stock-illustration-thumb-up-emoticon.jpg',   // Replace with your like icon URL
    sad: 'https://thumbs.dreamstime.com/b/cartoon-sad-smiley-emoticon-illustration-46948159.jpg',    // Replace with your sad emoji URL
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type 'happy', 'like', or 'sad'"
        onChange={(e) => setInputText(e.target.value.toLowerCase())}
      />
      <div style={{ marginTop: '10px' }}>
        {imageMap[inputText] ? (
          <img
            src={imageMap[inputText]}
            alt={inputText}
            style={{ width: '100px', height: '100px' }} // Adjust size as needed
          />
        ) : (
          <span>Type 'happy', 'like', or 'sad' to see an image.</span>
        )}
      </div>
    </div>
  );
};

export default EmojiDisplayComponent;
