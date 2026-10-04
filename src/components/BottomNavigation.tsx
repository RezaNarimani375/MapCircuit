import React from 'react'

export type TabType = 'home' | 'practical' | 'tutorials' | 'account'

interface BottomNavProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export const BottomNavigation: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className="bottom-dock-nav" aria-label="ناوبری اصلی برنامه">
      <div className="bottom-dock-inner">
        {/* Tab 1: خانه (Home) */}
        <button
          type="button"
          onClick={() => onTabChange('home')}
          className={`dock-nav-item ${activeTab === 'home' ? 'active' : ''}`}
          aria-label="خانه"
        >
          <div className="dock-icon-wrap">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill={activeTab === 'home' ? '#ffffff' : 'none'}
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" fill={activeTab === 'home' ? '#1d4ed8' : 'none'} />
            </svg>
          </div>
          <span className="dock-item-label">خانه</span>
        </button>

        {/* Tab 2: اطلاعات کاربردی (Practical Info) */}
        <button
          type="button"
          onClick={() => onTabChange('practical')}
          className={`dock-nav-item ${activeTab === 'practical' ? 'active' : ''}`}
          aria-label="اطلاعات کاربردی"
        >
          <div className="dock-icon-wrap">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Open book icon as seen in screenshot */}
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <span className="dock-item-label">اطلاعات کاربردی</span>
        </button>

        {/* Tab 3: مطالب آموزشی (Educational Content) */}
        <button
          type="button"
          onClick={() => onTabChange('tutorials')}
          className={`dock-nav-item ${activeTab === 'tutorials' ? 'active' : ''}`}
          aria-label="مطالب آموزشی"
        >
          <div className="dock-icon-wrap">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Screen / Card with presentation icon as seen in screenshot */}
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <circle cx="12" cy="8" r="2" />
              <path d="M8 14c0-2 1.8-3 4-3s4 1 4 3" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <span className="dock-item-label">مطالب آموزشی</span>
        </button>

        {/* Tab 4: حساب کاربری (User Account) */}
        <button
          type="button"
          onClick={() => onTabChange('account')}
          className={`dock-nav-item ${activeTab === 'account' ? 'active' : ''}`}
          aria-label="حساب کاربری"
        >
          <div className="dock-icon-wrap">
            <svg
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="7" r="4" />
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            </svg>
          </div>
          <span className="dock-item-label">حساب کاربری</span>
        </button>
      </div>
    </nav>
  )
}
