import React from 'react'

interface SideDrawerProps {
  isOpen: boolean
  onClose: () => void
  onNavigateTab: (tab: 'home' | 'practical' | 'tutorials' | 'account') => void
  onOpenInstagram: () => void
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onOpenInstagram,
}) => {
  if (!isOpen) return null

  return (
    <div className="side-drawer-backdrop" onClick={onClose}>
      <div
        className="side-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="منوی دسترسی سریع"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-brand-wrap">
            <div className="drawer-brand-icon">
              <span>MC</span>
            </div>
            <div>
              <h3 className="drawer-title">MapCircuit</h3>
              <span className="drawer-subtitle">نوین پالس • اتوپروگ</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="drawer-close-btn"
            aria-label="بستن منو"
          >
            ✕
          </button>
        </div>

        {/* Drawer Menu Items */}
        <nav className="drawer-nav-list">
          <button
            type="button"
            onClick={() => {
              onNavigateTab('home')
              onClose()
            }}
            className="drawer-nav-link"
          >
            <span className="link-icon">🏠</span>
            <span>صفحه اصلی و انتخاب خودروها</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigateTab('practical')
              onClose()
            }}
            className="drawer-nav-link"
          >
            <span className="link-icon">📖</span>
            <span>اطلاعات کاربردی و کدهای خطا</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigateTab('tutorials')
              onClose()
            }}
            className="drawer-nav-link"
          >
            <span className="link-icon">🎓</span>
            <span>مطالب آموزشی و ریمپ</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onNavigateTab('account')
              onClose()
            }}
            className="drawer-nav-link"
          >
            <span className="link-icon">👤</span>
            <span>حساب کاربری و وضعیت اشتراک</span>
          </button>

          <div className="drawer-divider" />

          <button
            type="button"
            onClick={() => {
              onOpenInstagram()
              onClose()
            }}
            className="drawer-nav-link instagram-link"
          >
            <span className="link-icon">📸</span>
            <span>صفحه اینستاگرام نوین پالس</span>
          </button>

          <a
            href="https://www.autoprog.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-nav-link"
          >
            <span className="link-icon">🛒</span>
            <span>فروشگاه اینترنتی اتوپروگ</span>
          </a>

          <a
            href="tel:09132323270"
            className="drawer-nav-link"
          >
            <span className="link-icon">📞</span>
            <span>تماس با پشتیبانی (۰۹۱۳۲۳۲۳۲۷۰)</span>
          </a>
        </nav>

        {/* Drawer Footer */}
        <div className="drawer-footer">
          <span>طراحی شده مطابق استاندارد iOS برای آیفون</span>
          <small>نوین پالس لب © ۱۴۰۳</small>
        </div>
      </div>
    </div>
  )
}
