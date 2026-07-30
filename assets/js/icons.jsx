/* Minimal industrial line-icons. 1.5px stroke, sharp corners. */
const Ico = {
  Wrench: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" {...p}>
      <path d="M14.5 3.5a4.5 4.5 0 0 0-4.9 5.9L3 16l5 5 6.6-6.6a4.5 4.5 0 0 0 5.9-4.9l-3 3-2.6-.4-.4-2.6 3-3Z"/>
    </svg>
  ),
  Gear: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1"/>
    </svg>
  ),
  Forklift: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" {...p}>
      <path d="M3 17V6h7l3 4h3v7"/>
      <path d="M16 4v13M16 7h3l1 3v7"/>
      <path d="M16 17h-3"/>
      <circle cx="7" cy="19" r="2"/>
      <circle cx="17" cy="19" r="2"/>
    </svg>
  ),
  Shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M12 3 4 6v6c0 4.5 3.3 8.3 8 9 4.7-.7 8-4.5 8-9V6l-8-3Z"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  ),
  Headset: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 14v-2a8 8 0 1 1 16 0v2"/>
      <rect x="3" y="13" width="4" height="7" rx="1"/>
      <rect x="17" y="13" width="4" height="7" rx="1"/>
      <path d="M20 19c0 1.7-1.8 3-4 3"/>
    </svg>
  ),
  Bolt: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="miter" {...p}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>
    </svg>
  ),
  Box: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="m12 3 9 4-9 4-9-4 9-4Z"/>
      <path d="M3 7v10l9 4 9-4V7"/>
      <path d="M12 11v10"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>
    </svg>
  ),
  Mail: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="1"/>
      <path d="m3 7 9 7 9-7"/>
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M12 22s7-7 7-12a7 7 0 1 0-14 0c0 5 7 12 7 12Z"/>
      <circle cx="12" cy="10" r="2.5"/>
    </svg>
  ),
  Clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    </svg>
  ),
  Wa: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M19.1 4.9A10 10 0 0 0 3.6 17.3L2 22l4.8-1.5a10 10 0 0 0 12.3-15.6Zm-7.1 15a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.9.9-2.8-.2-.3a8 8 0 1 1 6.6 3.5Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7 1-.1.1-.3.1-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.3-.3.2-.3.1-.2v-.3c-.1-.1-.5-1.3-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.6 2.4 3.8 3.3l1.3.5c.5.1 1 .1 1.4.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.2Z"/>
    </svg>
  ),
  Insta: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/>
    </svg>
  ),
  Fb: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M13 22v-8h3l.5-4H13V7.5c0-1.1.3-1.9 1.9-1.9H17V2.1c-.3 0-1.4-.1-2.7-.1C11.5 2 10 3.7 10 6.8V10H7v4h3v8h3Z"/>
    </svg>
  ),
  Li: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.5 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.32-2.02-3.32-2.02 0-2.33 1.58-2.33 3.21V21H9V9Z"/>
    </svg>
  ),
};
window.Ico = Ico;
