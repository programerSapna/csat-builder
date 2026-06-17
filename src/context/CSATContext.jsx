import { createContext, useContext, useState } from 'react';

const defaultContent = {
  initial: {
    title: 'How are we doing?',
    subtitle: "We'd love to hear your thoughts.",
  },
  feedback: {
    ratingType: 'stars',       // 'stars' | 'numbers'
    options: ['Excellent', 'Great support', 'Easy to use'],
    showComment: true,
    submitText: 'Submit',
  },
  thankyou: {
    mediaUrl: null,
    mediaType: null,           // 'image' | 'gif' | 'lottie'
    title: 'Thank you!',
    subtitle: 'Your feedback means the world to us.',
    buttonText: 'Done',
  },
};

const defaultStyling = {
  bgColor: '#FFFFFF',
  titleColor: '#1A1B1E',
  subtitleColor: '#6B6F7A',
  buttonColor: '#E8A33D',
  buttonTextColor: '#FFFFFF',
  fontSize: 16,               // px, controls base size
  fontWeight: '500',
  borderRadius: 16,           // px
  buttonWidth: 100,           // %
  buttonHeight: 44,           // px
  ratingSelectedColor: '#E8A33D',
  ratingUnselectedColor: '#D1D5DB',
};

const CSATContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export function useCSAT() {
  return useContext(CSATContext);
}

export function CSATProvider({ children }) {
  const [content, setContent] = useState(defaultContent);
  const [styling, setStyling] = useState(defaultStyling);

  function updateInitial(field, value) {
    setContent(c => ({ ...c, initial: { ...c.initial, [field]: value } }));
  }
  function updateFeedback(field, value) {
    setContent(c => ({ ...c, feedback: { ...c.feedback, [field]: value } }));
  }
  function updateThankyou(field, value) {
    setContent(c => ({ ...c, thankyou: { ...c.thankyou, [field]: value } }));
  }
  function updateStyling(field, value) {
    setStyling(s => ({ ...s, [field]: value }));
  }

  // Dynamic options helpers
  function addOption() {
    setContent(c => ({
      ...c,
      feedback: {
        ...c.feedback,
        options: [...c.feedback.options, `Option ${c.feedback.options.length + 1}`],
      },
    }));
  }
  function deleteOption(idx) {
    setContent(c => ({
      ...c,
      feedback: {
        ...c.feedback,
        options: c.feedback.options.filter((_, i) => i !== idx),
      },
    }));
  }
  function updateOption(idx, val) {
    setContent(c => ({
      ...c,
      feedback: {
        ...c.feedback,
        options: c.feedback.options.map((o, i) => (i === idx ? val : o)),
      },
    }));
  }

  return (
    <CSATContext.Provider
      value={{
        content, styling,
        updateInitial, updateFeedback, updateThankyou, updateStyling,
        addOption, deleteOption, updateOption,
      }}
    >
      {children}
    </CSATContext.Provider>
  );
}
