import React from 'react'

interface AccountViewProps {
  bookmarkedCount: number
  onOpenInstagram: () => void
}

export const AccountView: React.FC<AccountViewProps> = ({
  bookmarkedCount,
  onOpenInstagram,
}) => {
  return (
    <div className="tab-view-container account-view">
      {/* Profile Card */}
      <div className="account-profile-card">
        <div className="profile-avatar-circle">
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>

        <div className="profile-info-texts">
          <div className="profile-name-row">
            <h3 className="profile-user-name">کاربر نوین پالس</h3>
            <span className="vip-badge">VIP فعال</span>
          </div>
          <p className="profile-phone-text">اشتراک نقشه و مدارات الکترونیک خودرو</p>
        </div>
      </div>

      {/* Stats Cards Row */}
      <div className="account-stats-grid">
        <div className="account-stat-box">
          <span className="stat-number">۲۲</span>
          <span className="stat-label">شرکت خودروساز</span>
        </div>
        <div className="account-stat-box">
          <span className="stat-number">{bookmarkedCount}</span>
          <span className="stat-label">نقشه‌های نشان‌شده</span>
        </div>
        <div className="account-stat-box">
          <span className="stat-number">۱۰۰٪</span>
          <span className="stat-label">دسترسی آفلاین</span>
        </div>
      </div>

      {/* Menu Options Group */}
      <div className="account-options-group">
        <div className="option-row-item">
          <div className="option-icon-wrap blue">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="option-content">
            <strong>دیاگرام‌ها و نقشه‌های نشان شده</strong>
            <span>{bookmarkedCount} نقشه برای دسترسی سریع ثبت شده است</span>
          </div>
          <span className="option-arrow">←</span>
        </div>

        <div className="option-row-item" onClick={onOpenInstagram}>
          <div className="option-icon-wrap instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <div className="option-content">
            <strong>پیج اینستاگرام نوین پالس</strong>
            <span>مشاهده فیلم‌های آموزشی، تحلیل برد و تخفیف‌ها</span>
          </div>
          <span className="option-arrow">←</span>
        </div>

        <a
          href="https://t.me/autoprog_ir"
          target="_blank"
          rel="noopener noreferrer"
          className="option-row-item"
        >
          <div className="option-icon-wrap cyan">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </div>
          <div className="option-content">
            <strong>کانال تلگرام و پشتیبانی فنی</strong>
            <span>دریافت جدیدترین دامپ‌ها، فایل‌های بیکد و نرم‌افزارها</span>
          </div>
          <span className="option-arrow">←</span>
        </a>

        <div className="option-row-item">
          <div className="option-icon-wrap green">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="option-content">
            <strong>تماس با بخش فنی و فروش اتوپروگ</strong>
            <span>تلفن: ۰۹۱۳ ۲۳۲ ۳۲۷۰ (پاسخگویی ۹ الی ۱۸)</span>
          </div>
          <span className="option-arrow">←</span>
        </div>
      </div>

      {/* App Info Footer */}
      <div className="account-footer-note">
        <p className="version-info">MapCircuit • نسخه ۲.۴.۰ نوین پالس</p>
        <p className="copyright-info">نرم‌افزار تخصصی ECU و نقشه‌های الکترونیکی خودرو برای آیفون و وب</p>
      </div>
    </div>
  )
}
