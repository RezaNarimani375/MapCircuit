import React from 'react'

interface HeaderProps {
  onOpenMenu: () => void
  onOpenInstagram: () => void
  activeTitle?: string
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenInstagram,
  activeTitle = 'صفحه اصلی',
}) => {
  return (
    <header className="app-top-header">
      {/* Right side: Hamburger button + Green dot + Title */}
      <div className="header-right-group">
        <button
          type="button"
          onClick={onOpenMenu}
          className="header-menu-button"
          aria-label="منوی اصلی"
        >
          {/* Hamburger 3 bars icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>

        <div className="header-page-title">
          <span className="online-indicator-dot" />
          <span className="title-text">{activeTitle}</span>
        </div>
      </div>

      {/* Left side: Instagram button with gradient */}
      <button
        type="button"
        onClick={onOpenInstagram}
        className="header-instagram-button"
        aria-label="صفحه اینستاگرام نوین پالس"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </button>
    </header>
  )
}
