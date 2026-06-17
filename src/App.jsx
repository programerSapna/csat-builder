import { useState } from 'react';
import { CSATProvider } from './context/CSATContext';
import ContentPage from './pages/ContentPage';
import StylingPage from './pages/StylingPage';
import MobilePreview from './components/preview/MobilePreview';

function AppShell() {
  const [activeTab, setActiveTab] = useState('content');
  const [mobileView, setMobileView] = useState('config');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', background: 'var(--workspace-bg)' }}>

      {/* TOP HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', background: 'var(--panel-bg)', borderBottom: '1px solid var(--panel-border)', flexShrink: 0 }}>
        
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: 'linear-gradient(135deg, #F0B24A 0%, #C97D1A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 3px 10px rgba(232,163,61,0.4)', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M3 4a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H7l-4 4V4z" fill="rgba(0,0,0,0.5)"/>
              <path d="M6.5 9l2.5 2.5 5-5" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p style={{ margin: 0, fontSize: 14, fontWeight: 800, color: 'var(--canvas-bg)', fontFamily: 'Manrope, sans-serif', lineHeight: 1.15, letterSpacing: '-0.02em' }}>CSAT Builder</p>
            <p style={{ margin: 0, fontSize: 9, color: 'var(--accent)', fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.1em' }}>by AppVersal</p>
          </div>
        </div>

        {/* Mobile toggle */}
        <div className="mobile-toggle" style={{ background: 'var(--workspace-bg)', borderRadius: 8, padding: 3, border: '1px solid var(--panel-border)', gap: 2 }}>
          {[{ id: 'config', label: '⚙ Config' }, { id: 'preview', label: '📱 Preview' }].map(v => (
            <button key={v.id} onClick={() => setMobileView(v.id)} style={{ padding: '5px 12px', borderRadius: 6, border: 'none', background: mobileView === v.id ? 'var(--accent)' : 'transparent', color: mobileView === v.id ? '#000' : 'var(--ink-faint)', fontSize: 11, fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter, sans-serif', transition: 'all 0.15s' }}>
              {v.label}
            </button>
          ))}
        </div>
      </div>

      {/* MAIN BODY */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* LEFT PANEL */}
        <div
          className={mobileView === 'preview' ? 'left-panel-hidden' : ''}
          style={{ width: 'min(380px, 45vw)', height: '100%', display: 'flex', flexDirection: 'column', background: 'var(--panel-bg)', borderRight: '1px solid var(--panel-border)', flexShrink: 0 }}
        >
          <div style={{ display: 'flex', borderBottom: '1px solid var(--panel-border)', flexShrink: 0 }}>
            {[{ id: 'content', label: 'Content' }, { id: 'styling', label: 'Styling' }].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ flex: 1, padding: '10px 0', background: 'transparent', border: 'none', borderBottom: `2px solid ${activeTab === tab.id ? 'var(--accent)' : 'transparent'}`, color: activeTab === tab.id ? 'var(--canvas-bg)' : 'var(--ink-faint)', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'Manrope, sans-serif', transition: 'color 0.15s' }}>
                {tab.label}
              </button>
            ))}
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {activeTab === 'content' ? <ContentPage /> : <StylingPage />}
          </div>
        </div>

        {/* RIGHT PREVIEW */}
        <div
          className={mobileView === 'config' ? 'right-panel-hidden' : ''}
          style={{ flex: 1, height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '16px', background: 'var(--workspace-bg)' }}
        >
          <div style={{ width: '100%', maxWidth: 400, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 7 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#3F7A57', boxShadow: '0 0 6px rgba(63,122,87,0.7)' }} />
            <span style={{ fontSize: 11, fontFamily: 'monospace', color: 'var(--ink-faint)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Live Preview</span>
          </div>
          <MobilePreview />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CSATProvider>
      <AppShell />
    </CSATProvider>
  );
}
