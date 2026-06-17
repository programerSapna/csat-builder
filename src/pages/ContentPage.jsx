import { useCSAT } from '../context/CSATContext';
import {
  TextField, ToggleSwitch, SectionLabel, SegmentedControl
} from '../components/ui/Controls';
import { IconTrash, IconPlus } from '../components/ui/Icons';

export default function ContentPage() {
  const {
    content,
    updateInitial, updateFeedback, updateThankyou,
    addOption, deleteOption, updateOption,
  } = useCSAT();

  const { initial, feedback, thankyou } = content;

  function handleMediaUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const ext = file.name.split('.').pop().toLowerCase();
    const type = ext === 'json' ? 'lottie' : ext === 'gif' ? 'gif' : 'image';
    const url = URL.createObjectURL(file);
    updateThankyou('mediaUrl', url);
    updateThankyou('mediaType', type);
  }

  return (
    <div style={{ padding: '20px 20px 40px' }}>

      {/* ── INITIAL SCREEN ── */}
      <SectionLabel number="1">Initial Screen</SectionLabel>
      <TextField
        label="Title"
        value={initial.title}
        onChange={v => updateInitial('title', v)}
        placeholder="How are we doing?"
      />
      <TextField
        label="Subtitle"
        value={initial.subtitle}
        onChange={v => updateInitial('subtitle', v)}
        placeholder="We&apos;d love to hear your thoughts."
      />

      {/* ── FEEDBACK SCREEN ── */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel number="2">Feedback Screen</SectionLabel>

        <label style={{
          display: 'block',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--ink-faint)',
          marginBottom: 6,
          fontFamily: 'monospace',
        }}>
          Rating Type
        </label>
        <SegmentedControl
          value={feedback.ratingType}
          onChange={v => updateFeedback('ratingType', v)}
          options={[{ label: '★  Stars', value: 'stars' }, { label: '#  Numbers', value: 'numbers' }]}
        />

        {/* Dynamic Options */}
        <label style={{
          display: 'block',
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--ink-faint)',
          marginBottom: 8,
          fontFamily: 'monospace',
        }}>
          Options
        </label>

        <div style={{ marginBottom: 10 }}>
          {feedback.options.map((opt, idx) => (
            <div key={idx} style={{ display: 'flex', gap: 6, marginBottom: 6, alignItems: 'center' }}>
              <input
                type="text"
                value={opt}
                onChange={e => updateOption(idx, e.target.value)}
                style={{
                  flex: 1,
                  background: 'var(--workspace-bg)',
                  border: '1px solid var(--panel-border)',
                  borderRadius: 7,
                  padding: '8px 10px',
                  color: 'var(--canvas-bg)',
                  fontSize: 13,
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--panel-border)'}
              />
              <button
                onClick={() => deleteOption(idx)}
                disabled={feedback.options.length <= 1}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 7,
                  border: '1px solid var(--panel-border)',
                  background: 'var(--workspace-bg)',
                  color: feedback.options.length <= 1 ? 'var(--ink-faint)' : '#E05C5C',
                  cursor: feedback.options.length <= 1 ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
                title="Delete option"
              >
                <IconTrash size={13} />
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addOption}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            background: 'transparent',
            border: '1px dashed var(--panel-border)',
            borderRadius: 7,
            padding: '7px 12px',
            color: 'var(--accent)',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            width: '100%',
            justifyContent: 'center',
            marginBottom: 14,
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--panel-border)'}
        >
          <IconPlus size={13} />
          Add Option
        </button>

        <ToggleSwitch
          label="Additional comment box"
          checked={feedback.showComment}
          onChange={v => updateFeedback('showComment', v)}
        />
        <TextField
          label="Submit button text"
          value={feedback.submitText}
          onChange={v => updateFeedback('submitText', v)}
        />
      </div>

      {/* ── THANK YOU SCREEN ── */}
      <div style={{ marginTop: 24 }}>
        <SectionLabel number="3">Thank You Screen</SectionLabel>

        {/* Media Upload */}
        <div style={{ marginBottom: 16 }}>
          <label style={{
            display: 'block',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: 'var(--ink-faint)',
            marginBottom: 6,
            fontFamily: 'monospace',
          }}>
            Media (PNG, JPG, GIF, Lottie JSON)
          </label>
          <label style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            padding: '18px',
            border: '1.5px dashed var(--panel-border)',
            borderRadius: 10,
            cursor: 'pointer',
            transition: 'border-color 0.15s',
            background: thankyou.mediaUrl ? 'rgba(63,122,87,0.08)' : 'transparent',
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--panel-border)'}
          >
            {thankyou.mediaUrl && thankyou.mediaType !== 'lottie' ? (
              <img
                src={thankyou.mediaUrl}
                alt="uploaded"
                style={{ maxHeight: 60, maxWidth: '100%', borderRadius: 6, objectFit: 'cover' }}
              />
            ) : (
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ color: 'var(--ink-faint)' }}>
                <path d="M12 16V8M8 12l4-4 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 16.8A4 4 0 015.6 9a6 6 0 0110.8 0A4 4 0 0120 16.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            )}
            <span style={{ fontSize: 12, color: 'var(--ink-muted)' }}>
              {thankyou.mediaUrl ? 'Click to change' : 'Click to upload'}
            </span>
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.gif,.json"
              style={{ display: 'none' }}
              onChange={handleMediaUpload}
            />
          </label>
        </div>

        <TextField label="Title" value={thankyou.title} onChange={v => updateThankyou('title', v)} />
        <TextField label="Subtitle" value={thankyou.subtitle} onChange={v => updateThankyou('subtitle', v)} />
        <TextField label="Button text" value={thankyou.buttonText} onChange={v => updateThankyou('buttonText', v)} />
      </div>
    </div>
  );
}
