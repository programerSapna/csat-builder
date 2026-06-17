import { useState } from 'react';
import { useCSAT } from '../../context/CSATContext';
import { IconStar, IconCheck } from '../ui/Icons';

function RatingStars({ count = 5, selectedColor, unselectedColor }) {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', margin: '10px 0' }}>
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onMouseEnter={() => setHovered(i + 1)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => setSelected(i + 1)}
          style={{ background: 'none', border: 'none', padding: 2, cursor: 'pointer' }}
        >
          <IconStar
            size={22}
            filled={i < (hovered || selected)}
            color={i < (hovered || selected) ? selectedColor : unselectedColor}
          />
        </button>
      ))}
    </div>
  );
}

function RatingNumbers({ selectedColor, unselectedColor }) {
  const [selected, setSelected] = useState(null);
  return (
    <div style={{ display: 'flex', gap: 5, justifyContent: 'center', margin: '10px 0' }}>
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          onClick={() => setSelected(n)}
          style={{
            width: 34,
            height: 34,
            borderRadius: 8,
            border: `1.5px solid ${selected === n ? selectedColor : unselectedColor}`,
            background: selected === n ? selectedColor : 'transparent',
            color: selected === n ? '#fff' : unselectedColor,
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s',
          }}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

// ── SCREEN 1: Initial ───────────────────────────────────────
function InitialScreen({ content, styling }) {
  const s = styling;
  const titleSize = s.fontSize * 1.25;
  const subtitleSize = s.fontSize * 0.9;

  return (
    <div style={{
      background: s.bgColor,
      borderRadius: s.borderRadius,
      padding: '20px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
    }}>
      {/* wave emoji as signature touch */}
      <span style={{ fontSize: 28, lineHeight: 1, marginBottom: 4 }}>👋</span>
      <p style={{
        margin: 0,
        fontSize: titleSize,
        fontWeight: 700,
        color: s.titleColor,
        textAlign: 'center',
        lineHeight: 1.3,
        fontFamily: 'Inter, sans-serif',
      }}>
        {content.initial.title || 'How are we doing?'}
      </p>
      <p style={{
        margin: 0,
        fontSize: subtitleSize,
        color: s.subtitleColor,
        textAlign: 'center',
        lineHeight: 1.5,
        fontFamily: 'Inter, sans-serif',
        fontWeight: s.fontWeight,
      }}>
        {content.initial.subtitle || "We'd love to hear your thoughts."}
      </p>
      <div style={{ height: 8 }} />
      <button style={{
        width: `${s.buttonWidth}%`,
        height: s.buttonHeight,
        background: s.buttonColor,
        color: s.buttonTextColor,
        border: 'none',
        borderRadius: s.borderRadius * 0.6,
        fontSize: s.fontSize * 0.85,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
      }}>
        Rate now
      </button>
    </div>
  );
}

// ── SCREEN 2: Feedback ─────────────────────────────────────
function FeedbackScreen({ content, styling }) {
  const s = styling;
  const { feedback } = content;
  const titleSize = s.fontSize * 1.1;
  const subtitleSize = s.fontSize * 0.85;

  return (
    <div style={{
      background: s.bgColor,
      borderRadius: s.borderRadius,
      padding: '16px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}>
      <p style={{
        margin: 0,
        fontSize: titleSize,
        fontWeight: 700,
        color: s.titleColor,
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
      }}>
        Rate your experience
      </p>

      {feedback.ratingType === 'stars' ? (
        <RatingStars
          selectedColor={s.ratingSelectedColor}
          unselectedColor={s.ratingUnselectedColor}
        />
      ) : (
        <RatingNumbers
          selectedColor={s.ratingSelectedColor}
          unselectedColor={s.ratingUnselectedColor}
        />
      )}

      {/* Option chips */}
      {feedback.options.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center', margin: '2px 0' }}>
          {feedback.options.map((opt, i) => (
            <span key={i} style={{
              fontSize: subtitleSize,
              padding: '4px 10px',
              borderRadius: 20,
              border: `1.5px solid ${s.ratingUnselectedColor}`,
              color: s.subtitleColor,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}>
              {opt}
            </span>
          ))}
        </div>
      )}

      {/* Comment box */}
      {feedback.showComment && (
        <textarea
          placeholder="Tell us more…"
          rows={2}
          readOnly
          style={{
            resize: 'none',
            border: `1px solid ${s.ratingUnselectedColor}`,
            borderRadius: 8,
            padding: '6px 8px',
            fontSize: subtitleSize,
            color: s.subtitleColor,
            background: 'transparent',
            fontFamily: 'Inter, sans-serif',
            outline: 'none',
          }}
        />
      )}

      <button style={{
        width: `${s.buttonWidth}%`,
        height: s.buttonHeight,
        alignSelf: 'center',
        background: s.buttonColor,
        color: s.buttonTextColor,
        border: 'none',
        borderRadius: s.borderRadius * 0.6,
        fontSize: s.fontSize * 0.85,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
        marginTop: 4,
      }}>
        {feedback.submitText || 'Submit'}
      </button>
    </div>
  );
}

// ── SCREEN 3: Thank You ────────────────────────────────────
function ThankyouScreen({ content, styling }) {
  const s = styling;
  const { thankyou } = content;
  const titleSize = s.fontSize * 1.2;
  const subtitleSize = s.fontSize * 0.88;

  return (
    <div style={{
      background: s.bgColor,
      borderRadius: s.borderRadius,
      padding: '20px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
    }}>
      {thankyou.mediaUrl && thankyou.mediaType !== 'lottie' ? (
        <img
          src={thankyou.mediaUrl}
          alt="thank you"
          style={{ width: 56, height: 56, objectFit: 'cover', borderRadius: 10, marginBottom: 4 }}
        />
      ) : (
        <div style={{ marginBottom: 4 }}>
          <IconCheck size={48} color="#3F7A57" />
        </div>
      )}
      <p style={{
        margin: 0,
        fontSize: titleSize,
        fontWeight: 700,
        color: s.titleColor,
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
      }}>
        {thankyou.title || 'Thank you!'}
      </p>
      <p style={{
        margin: 0,
        fontSize: subtitleSize,
        color: s.subtitleColor,
        textAlign: 'center',
        lineHeight: 1.5,
        fontFamily: 'Inter, sans-serif',
        fontWeight: s.fontWeight,
      }}>
        {thankyou.subtitle || 'Your feedback means the world to us.'}
      </p>
      <div style={{ height: 8 }} />
      <button style={{
        width: `${s.buttonWidth}%`,
        height: s.buttonHeight,
        background: s.buttonColor,
        color: s.buttonTextColor,
        border: 'none',
        borderRadius: s.borderRadius * 0.6,
        fontSize: s.fontSize * 0.85,
        fontWeight: 600,
        cursor: 'pointer',
        fontFamily: 'Inter, sans-serif',
      }}>
        {thankyou.buttonText || 'Done'}
      </button>
    </div>
  );
}

// ── PHONE FRAME ────────────────────────────────────────────
export default function MobilePreview() {
  const { content, styling } = useCSAT();
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    { label: 'Initial', component: <InitialScreen content={content} styling={styling} /> },
    { label: 'Feedback', component: <FeedbackScreen content={content} styling={styling} /> },
    { label: 'Thank You', component: <ThankyouScreen content={content} styling={styling} /> },
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      padding: '20px 0',
    }}>
      {/* Screen tabs */}
      <div style={{
        display: 'flex',
        gap: 4,
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 10,
        padding: 4,
      }}>
        {screens.map((s, i) => (
          <button
            key={i}
            onClick={() => setActiveScreen(i)}
            style={{
              padding: '5px 12px',
              borderRadius: 7,
              border: 'none',
              background: activeScreen === i ? 'var(--accent)' : 'transparent',
              color: activeScreen === i ? '#000' : 'var(--ink-faint)',
              fontSize: 11,
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Inter, sans-serif',
              transition: 'all 0.15s',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Phone frame */}
      <div style={{
        width: 'min(300px, 80vw)',
        aspectRatio: '9/19',
        background: '#0D0D0F',
        borderRadius: 40,
        border: '2.5px solid #2C2F38',
        boxShadow: '0 24px 60px rgba(0,0,0,0.7), inset 0 0 0 1px rgba(255,255,255,0.04)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        {/* Notch */}
        <div style={{
          width: '35%',
          height: 24,
          background: '#0D0D0F',
          borderRadius: '0 0 14px 14px',
          zIndex: 10,
          flexShrink: 0,
          border: '2px solid #2C2F38',
          borderTop: 'none',
        }} />

        {/* Phone screen */}
        <div style={{
          flex: 1,
          width: '100%',
          background: '#F2F2F0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '8px',
          paddingBottom: 20,
          overflow: 'hidden',
        }}>
          {/* App content placeholder at top */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, padding: '8px 4px 10px' }}>
            <div style={{ height: 10, borderRadius: 4, background: '#D8D8D6', width: '60%' }} />
            <div style={{ height: 8, borderRadius: 4, background: '#E2E2E0', width: '80%' }} />
            <div style={{ height: 8, borderRadius: 4, background: '#E2E2E0', width: '70%' }} />
            <div style={{ height: 60, borderRadius: 8, background: '#DEDEDC', marginTop: 4 }} />
            <div style={{ height: 8, borderRadius: 4, background: '#E2E2E0', width: '50%' }} />
            <div style={{ height: 8, borderRadius: 4, background: '#E2E2E0', width: '65%' }} />
          </div>

          {/* CSAT Popup */}
          <div style={{
            borderRadius: styling.borderRadius,
            overflow: 'hidden',
            boxShadow: '0 -8px 30px rgba(0,0,0,0.15)',
          }}>
            {screens[activeScreen].component}
          </div>
        </div>

        {/* Home indicator */}
        <div style={{
          height: 20,
          width: '100%',
          background: '#0D0D0F',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <div style={{ width: 50, height: 3, borderRadius: 2, background: '#3A3A3C' }} />
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: 6 }}>
        {screens.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveScreen(i)}
            style={{
              width: activeScreen === i ? 18 : 6,
              height: 6,
              borderRadius: 3,
              background: activeScreen === i ? 'var(--accent)' : 'var(--panel-border)',
              border: 'none',
              cursor: 'pointer',
              transition: 'width 0.2s, background 0.2s',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
