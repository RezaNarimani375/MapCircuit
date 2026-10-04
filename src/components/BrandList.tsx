import React from 'react'
import type { BrandData } from '../data/brandsData'
import { BrandLogo } from './BrandLogos'

interface BrandListProps {
  brands: BrandData[]
  onSelectBrand: (brand: BrandData) => void
  searchQuery: string
}

export const BrandList: React.FC<BrandListProps> = ({
  brands,
  onSelectBrand,
  searchQuery,
}) => {
  return (
    <section className="brands-list-section">
      {/* Section Header with Blue Dot */}
      <div className="brands-section-header">
        <div className="section-title-wrap">
          <span className="section-blue-dot" />
          <h2 className="section-heading-text">انتخاب شرکت خودروسازی</h2>
        </div>
        {searchQuery && (
          <span className="results-count-pill">{brands.length} خودرو یافت شد</span>
        )}
      </div>

      {/* Brands Cards Container */}
      <div className="brands-cards-grid">
        {brands.map((brand) => (
          <button
            key={brand.id}
            type="button"
            onClick={() => onSelectBrand(brand)}
            className="car-brand-card"
            aria-label={`انتخاب شرکت ${brand.name}`}
          >
            {/* Right: Brand Emblem */}
            <div className="brand-card-emblem">
              <BrandLogo id={brand.id} size={36} />
            </div>

            {/* Middle: Brand Persian Name */}
            <div className="brand-card-info">
              <span className="brand-persian-name">{brand.name}</span>
            </div>

            {/* Left: Soft-Blue Circular Action Button with Arrow */}
            <div className="brand-action-circle" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Arrow pointing right/forward as seen in the photo */}
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </button>
        ))}

        {brands.length === 0 && (
          <div className="no-brands-found">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.6"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <p className="no-result-title">خودرو یا دیاگرامی با این نام یافت نشد</p>
            <span className="no-result-desc">
              لطفاً نام شرکت (مثلاً ایران خودرو، کیا، لاماری) یا کد ایسیو را بررسی فرمایید.
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
