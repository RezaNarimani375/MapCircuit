import React from 'react'

interface InstagramModalProps {
  isOpen: boolean
  onClose: () => void
}

export const InstagramModal: React.FC<InstagramModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="instagram-modal-backdrop" onClick={onClose}>
      <div
        className="instagram-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="insta-header-gradient">
          <button
            type="button"
            onClick={onClose}
            className="insta-close-btn"
            aria-label="بستن"
          >
            ✕
          </button>
          <div className="insta-avatar-ring">
            <div className="insta-avatar-inner">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="insta-content-body">
          <h3 className="insta-page-name">نوین پالس • اتوپروگ</h3>
          <span className="insta-handle">@novinpulse_autoprog</span>
          <p className="insta-bio">
            مرجع تخصصی دیاگرام، ریمپ، پین اوت ایسیو و تجهیزات پروگرامر و دیاگ خودرو در ایران
          </p>

          <div className="insta-actions-column">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="insta-primary-btn"
            >
              مشاهده پیج اینستاگرام
            </a>

            <a
              href="https://t.me/autoprog_ir"
              target="_blank"
              rel="noopener noreferrer"
              className="telegram-action-btn"
            >
              عضویت در کانال تلگرام
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
