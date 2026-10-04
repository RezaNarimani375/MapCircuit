import React from 'react'

interface SearchBoxProps {
  value: string
  onChange: (val: string) => void
  onClear: () => void
}

export const SearchBox: React.FC<SearchBoxProps> = ({ value, onChange, onClear }) => {
  return (
    <div className="search-section-wrapper">
      <div className="search-pill-container">
        {/* MapCircuit Badge on Right */}
        <div className="mapcircuit-badge">
          <svg
            width="22"
            height="14"
            viewBox="0 0 32 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="badge-car-icon"
          >
            {/* Stylized sports car outline / circuit trace */}
            <path
              d="M3 14 C3 14 5 7 11 6 C15 5 19 5 22 7 L27 9 C29 10 30 12 30 14"
              strokeLinecap="round"
            />
            <circle cx="9" cy="14" r="2.5" />
            <circle cx="24" cy="14" r="2.5" />
            <path d="M11.5 14 L21.5 14" strokeLinecap="round" />
            <path d="M12 9 L20 9" strokeDasharray="1 1" />
          </svg>
          <span className="badge-text">MapCircuit</span>
        </div>

        {/* Input & Search Icon */}
        <div className="search-input-inner">
          <svg
            className="search-magnifier-icon"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="21" y1="21" x2="16.5" y2="16.5" />
          </svg>

          <input
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="... جستجو در نوین پالس"
            className="search-text-input"
            aria-label="جستجوی خودرو یا قطعات"
          />

          {value && (
            <button
              type="button"
              onClick={onClear}
              className="search-clear-btn"
              aria-label="پاک کردن جستجو"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
