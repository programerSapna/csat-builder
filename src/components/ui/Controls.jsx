// TextField
export function TextField({ label, value, onChange, placeholder, hint }) {
  return (
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
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%',
          background: 'var(--workspace-bg)',
          border: '1px solid var(--panel-border)',
          borderRadius: 8,
          padding: '9px 12px',
          color: 'var(--canvas-bg)',
          fontSize: 14,
          fontFamily: 'Inter, sans-serif',
          outline: 'none',
          transition: 'border-color 0.15s',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
        onBlur={e => e.target.style.borderColor = 'var(--panel-border)'}
      />
      {hint && <p style={{ fontSize: 11, color: 'var(--ink-faint)', margin: '4px 0 0' }}>{hint}</p>}
    </div>
  );
}

// ToggleSwitch
export function ToggleSwitch({ label, checked, onChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
      <span style={{ fontSize: 13, color: 'var(--canvas-bg)' }}>{label}</span>
      <button
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        style={{
          width: 40,
          height: 22,
          borderRadius: 11,
          border: 'none',
          background: checked ? 'var(--accent)' : 'var(--panel-border)',
          cursor: 'pointer',
          position: 'relative',
          transition: 'background 0.2s',
          flexShrink: 0,
        }}
      >
        <span style={{
          position: 'absolute',
          top: 3,
          left: checked ? 21 : 3,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: '#fff',
          transition: 'left 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
        }} />
      </button>
    </div>
  );
}

// ColorField
export function ColorField({ label, value, onChange }) {
  return (
    <div style={{ marginBottom: 14 }}>
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
        {label}
      </label>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        background: 'var(--workspace-bg)',
        border: '1px solid var(--panel-border)',
        borderRadius: 8,
        padding: '6px 10px',
      }}>
        <div style={{
          width: 22,
          height: 22,
          borderRadius: 5,
          background: value,
          border: '1px solid rgba(255,255,255,0.08)',
          overflow: 'hidden',
          flexShrink: 0,
        }}>
          <input
            type="color"
            value={value}
            onChange={e => onChange(e.target.value)}
            style={{ width: 28, height: 28, transform: 'translate(-3px,-3px)', cursor: 'pointer' }}
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--canvas-bg)',
            fontSize: 13,
            fontFamily: 'monospace',
            outline: 'none',
            width: '100%',
          }}
        />
      </div>
    </div>
  );
}

// SliderField
export function SliderField({ label, value, onChange, min, max, step = 1, unit = '' }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <label style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          color: 'var(--ink-faint)',
          fontFamily: 'monospace',
        }}>
          {label}
        </label>
        <span style={{ fontSize: 12, color: 'var(--accent)', fontFamily: 'monospace', fontWeight: 600 }}>
          {value}{unit}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: '100%' }}
      />
    </div>
  );
}

// SelectField
export function SelectField({ label, value, onChange, options }) {
  return (
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
        {label}
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        style={{
          width: '100%',
          background: 'var(--workspace-bg)',
          border: '1px solid var(--panel-border)',
          borderRadius: 8,
          padding: '9px 12px',
          color: 'var(--canvas-bg)',
          fontSize: 14,
          fontFamily: 'Inter, sans-serif',
          outline: 'none',
          cursor: 'pointer',
        }}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}

// SectionLabel
export function SectionLabel({ children, number }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16,
      marginTop: 8,
      paddingBottom: 10,
      borderBottom: '1px solid var(--panel-border)',
    }}>
      {number && (
        <span style={{
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'var(--accent)',
          color: '#000',
          fontSize: 10,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          {number}
        </span>
      )}
      <span style={{
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--canvas-bg)',
        fontFamily: 'Manrope, sans-serif',
      }}>
        {children}
      </span>
    </div>
  );
}

// SegmentedControl (Stars/Numbers toggle)
export function SegmentedControl({ value, onChange, options }) {
  return (
    <div style={{
      display: 'flex',
      background: 'var(--workspace-bg)',
      borderRadius: 8,
      padding: 3,
      border: '1px solid var(--panel-border)',
      marginBottom: 16,
    }}>
      {options.map(o => (
        <button
          key={o.value}
          onClick={() => onChange(o.value)}
          style={{
            flex: 1,
            padding: '7px 0',
            borderRadius: 6,
            border: 'none',
            background: value === o.value ? 'var(--accent)' : 'transparent',
            color: value === o.value ? '#000' : 'var(--ink-faint)',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.15s',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
