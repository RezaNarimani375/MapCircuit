import React, { useState } from 'react'
import type { BrandData, DiagramItem } from '../data/brandsData'
import { BrandLogo } from './BrandLogos'

interface BrandDetailModalProps {
  brand: BrandData | null
  onClose: () => void
  onBookmarkDiagram?: (diagramId: string) => void
  isBookmarked?: (diagramId: string) => boolean
}

export const BrandDetailModal: React.FC<BrandDetailModalProps> = ({
  brand,
  onClose,
  onBookmarkDiagram,
  isBookmarked,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'models' | 'ecus' | 'diagrams'>('models')
  const [selectedDiagram, setSelectedDiagram] = useState<DiagramItem | null>(null)
  const [pinSearch, setPinSearch] = useState('')

  if (!brand) return null

  const filteredPins = selectedDiagram
    ? selectedDiagram.pins.filter(
        (p) =>
          p.pin.toLowerCase().includes(pinSearch.toLowerCase()) ||
          p.label.includes(pinSearch) ||
          p.signal.toLowerCase().includes(pinSearch.toLowerCase())
      )
    : []

  return (
    <div className="brand-detail-view-overlay" role="dialog" aria-modal="true">
      <div className="brand-detail-container">
        {/* Header with Back Button */}
        <header className="detail-top-nav">
          <button
            type="button"
            onClick={onClose}
            className="detail-back-button"
            aria-label="بازگشت"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>بازگشت</span>
          </button>

          <div className="detail-header-title">
            <span>{brand.name}</span>
          </div>

          <div className="detail-header-emblem">
            <BrandLogo id={brand.id} size={30} />
          </div>
        </header>

        {/* Brand Banner Card */}
        <div className="brand-hero-card">
          <div className="brand-hero-badge">
            <BrandLogo id={brand.id} size={50} />
          </div>

          <div className="brand-hero-texts">
            <div className="brand-title-row">
              <h3>{brand.name}</h3>
              <span className="brand-en-tag">{brand.englishName}</span>
            </div>
            <p className="brand-country-tag">
              کشور سازنده: {brand.country} • {brand.models.length} مدل تحت پوشش
            </p>
          </div>
        </div>

        {/* Sub Navigation Tabs */}
        <div className="detail-sub-tabs">
          <button
            type="button"
            onClick={() => {
              setActiveSubTab('models')
              setSelectedDiagram(null)
            }}
            className={`sub-tab-btn ${activeSubTab === 'models' ? 'active' : ''}`}
          >
            مدل‌های خودرو ({brand.models.length})
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveSubTab('ecus')
              setSelectedDiagram(null)
            }}
            className={`sub-tab-btn ${activeSubTab === 'ecus' ? 'active' : ''}`}
          >
            ایسیوها ({brand.ecus.length})
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveSubTab('diagrams')
              if (brand.diagrams.length > 0 && !selectedDiagram) {
                setSelectedDiagram(brand.diagrams[0])
              }
            }}
            className={`sub-tab-btn ${activeSubTab === 'diagrams' ? 'active' : ''}`}
          >
            پین‌اوت و نقشه‌ها ({brand.diagrams.length})
          </button>
        </div>

        {/* Content Area */}
        <div className="detail-tab-content">
          {/* TAB 1: Models */}
          {activeSubTab === 'models' && (
            <div className="models-list-grid">
              {brand.models.map((model) => (
                <div key={model.id} className="car-model-item-card">
                  <div className="model-main-row">
                    <div className="model-info-block">
                      <h4 className="model-name">{model.name}</h4>
                      <div className="model-meta-row">
                        <span className="meta-badge">موتور: {model.engine}</span>
                        <span className="meta-badge">سال: {model.years}</span>
                      </div>
                    </div>
                    <span className="model-diag-count">
                      {model.diagramCount} دیاگرام
                    </span>
                  </div>

                  <div className="model-ecus-chips">
                    <span className="chips-label">ایسیوهای سازگار:</span>
                    {model.ecus.map((ecu) => (
                      <span key={ecu} className="ecu-chip">
                        {ecu}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveSubTab('diagrams')
                      if (brand.diagrams.length > 0) {
                        setSelectedDiagram(brand.diagrams[0])
                      }
                    }}
                    className="view-model-diags-btn"
                  >
                    <span>مشاهده نقشه‌های سیم‌کشی این مدل</span>
                    <span className="arrow-icon">←</span>
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* TAB 2: ECUs */}
          {activeSubTab === 'ecus' && (
            <div className="ecus-list-grid">
              {brand.ecus.map((ecu) => (
                <div key={ecu.code} className="ecu-item-card">
                  <div className="ecu-card-top">
                    <div className="ecu-title-badge">
                      <h4>{ecu.name}</h4>
                      <span className="ecu-code-pill">{ecu.code}</span>
                    </div>
                    <span className="ecu-pins-tag">{ecu.pinsCount} پایه</span>
                  </div>

                  <p className="ecu-description">{ecu.description}</p>

                  <div className="ecu-detail-row">
                    <strong>خودروهای مشترک:</strong>
                    <span>{ecu.commonVehicles}</span>
                  </div>

                  <div className="ecu-fault-box">
                    <div className="fault-icon">⚠️</div>
                    <div>
                      <strong>ایرادات متداول و نکات تعمیراتی:</strong>
                      <p>{ecu.faultNotes}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setActiveSubTab('diagrams')
                      if (brand.diagrams.length > 0) {
                        setSelectedDiagram(brand.diagrams[0])
                      }
                    }}
                    className="view-pinout-btn"
                  >
                    نمایش پین‌اوت سوکت و پایه‌های برق
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Diagrams & Interactive Pinout */}
          {activeSubTab === 'diagrams' && (
            <div className="diagrams-tab-view">
              {/* Diagram Selector if multiple */}
              <div className="diagram-selector-chips">
                {brand.diagrams.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDiagram(d)}
                    className={`diag-chip-btn ${selectedDiagram?.id === d.id ? 'active' : ''}`}
                  >
                    {d.title}
                  </button>
                ))}
              </div>

              {selectedDiagram && (
                <div className="selected-diagram-sheet">
                  <div className="diagram-sheet-header">
                    <div>
                      <h4 className="sheet-title">{selectedDiagram.title}</h4>
                      <p className="sheet-desc">{selectedDiagram.description}</p>
                    </div>

                    {onBookmarkDiagram && (
                      <button
                        type="button"
                        onClick={() => onBookmarkDiagram(selectedDiagram.id)}
                        className={`bookmark-btn ${
                          isBookmarked && isBookmarked(selectedDiagram.id) ? 'bookmarked' : ''
                        }`}
                        title="نشان کردن نقشه"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill={isBookmarked && isBookmarked(selectedDiagram.id) ? '#f59e0b' : 'none'}
                          stroke="#f59e0b"
                          strokeWidth="2"
                        >
                          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                      </button>
                    )}
                  </div>

                  {/* Interactive Pinout Search */}
                  <div className="pin-filter-box">
                    <input
                      type="search"
                      value={pinSearch}
                      onChange={(e) => setPinSearch(e.target.value)}
                      placeholder="فیلتر پایه‌ها (مثلاً دور موتور، انژکتور، رله، ۱۲ ولت)..."
                      className="pin-search-input"
                    />
                  </div>

                  {/* Pins Table */}
                  <div className="pins-table-wrapper">
                    <table className="pins-table">
                      <thead>
                        <tr>
                          <th>پایه (Pin)</th>
                          <th>شرح و عملکرد پایه</th>
                          <th>ولتاژ کاری</th>
                          <th>سیگنال</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPins.map((p) => (
                          <tr key={p.pin}>
                            <td className="pin-number-cell">
                              <span
                                className="pin-color-indicator"
                                style={{ backgroundColor: p.color }}
                              />
                              <span className="pin-code">{p.pin}</span>
                            </td>
                            <td className="pin-label-cell">{p.label}</td>
                            <td className="pin-voltage-cell">
                              <span className="voltage-pill">{p.voltage}</span>
                            </td>
                            <td className="pin-signal-cell">{p.signal}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Visual Pinout Connector Grid */}
                  <div className="connector-visualizer">
                    <span className="visualizer-title">نمای فیزیکی پایه‌های سوکت ECU (Top View):</span>
                    <div className="connector-slots-grid">
                      {selectedDiagram.pins.map((p) => (
                        <div
                          key={p.pin}
                          className="pin-socket-slot"
                          title={`${p.pin}: ${p.label} (${p.voltage})`}
                        >
                          <span
                            className="slot-dot"
                            style={{ backgroundColor: p.color }}
                          />
                          <span className="slot-num">{p.pin}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
