import React, { useState, useEffect } from 'react'

interface BannerSlide {
  id: string
  title: string
  subtitle: string
  tags: string
  phone: string
  address: string
  website: string
  tagline: string
  accentColor: string
}

const SLIDES: BannerSlide[] = [
  {
    id: 'autoprog',
    title: 'اتوپروگ',
    subtitle: 'بزرگترین مجموعه ی پروگرمر و دیاگ خودرو',
    tags: 'آموزش / فروش / پشتیبانی',
    phone: '۰۹۱۳ ۲۳۲ ۳۲۷۰',
    address: 'اصفهان، اتوبان چمران',
    website: 'WWW.AUTOPROG.IR',
    tagline: 'تجهیزات تخصصی الکترونیک خودرو',
    accentColor: '#f59e0b',
  },
  {
    id: 'novinpulse',
    title: 'نوین پالس',
    subtitle: 'آزمایشگاه تخصصی تحلیل و تعمیرات بردهای ECU',
    tags: 'پین اوت / دیاگرام / شبیه‌ساز',
    phone: '۰۹۱۳ ۲۳۲ ۳۲۷۰',
    address: 'اصفهان، آزمایشگاه تخصصی پالس',
    website: 'MAPCIRCUIT.IR',
    tagline: 'مرجع نقشه‌های سیم‌کشی خودرو',
    accentColor: '#1d4ed8',
  },
  {
    id: 'remap',
    title: 'دوره‌های تخصصی',
    subtitle: 'آموزش فوق حرفه‌ای ریمپ، تیونینگ و حذف سنسور',
    tags: 'حضوری / مجازی / پشتیبانی دائم',
    phone: '۰۹۱۳ ۲۳۲ ۳۲۷۰',
    address: 'اصفهان، واحد آموزش فنی',
    website: 'WWW.AUTOPROG.IR',
    tagline: 'ارتقای دانش فنی تعمیرکاران',
    accentColor: '#dc2626',
  },
  {
    id: 'diag',
    title: 'تجهیزات دیاگ',
    subtitle: 'انواع دیاگ نسل جدید بی‌سیم، تبلتی و پرتابل',
    tags: 'گارانتی معتبر / آپدیت رایگان',
    phone: '۰۹۱۳ ۲۳۲ ۳۲۷۰',
    address: 'اصفهان، اتوبان چمران',
    website: 'WWW.AUTOPROG.IR',
    tagline: 'سرعت و دقت در عیب‌یابی خودرو',
    accentColor: '#10b981',
  },
]

export const AutoprogBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[currentSlide]

  return (
    <div className="promo-banner-wrapper">
      <div className="promo-banner-card">
        {/* Top Graphic & Info Area */}
        <div className="promo-banner-content">
          {/* Right Header: Yellow / Accent curve & Title */}
          <div className="promo-title-area">
            <div className="promo-brand-badge">
              <span className="promo-yellow-arc" />
              <h2 className="promo-main-title">{slide.title}</h2>
            </div>
            <p className="promo-subtitle">{slide.subtitle}</p>

            {/* Badges / Services */}
            <div className="promo-pills-row">
              <span className="promo-service-pill">{slide.tags}</span>
            </div>
          </div>

          {/* Left Visual: Automotive Programmer & ECU Diagnostic Graphic */}
          <div className="promo-graphic-area">
            <div className="programmer-device-mockup">
              <div className="device-screen">
                <span className="screen-led-dot" />
                <span className="screen-line" />
                <span className="screen-line short" />
              </div>
              <div className="device-ports">
                <span className="port" />
                <span className="port" />
                <span className="port" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Dark Banner Strip */}
        <div className="promo-bottom-bar">
          <div className="promo-address-group">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="location-icon"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="promo-location-text">
              {slide.address} {slide.phone}
            </span>
          </div>

          <a
            href="https://www.autoprog.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="promo-website-link"
          >
            {slide.website}
          </a>
        </div>
      </div>

      {/* Carousel Indicator Dots */}
      <div className="carousel-dots-row">
        {SLIDES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
            aria-label={`اسلاید ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
