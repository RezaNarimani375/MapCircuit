import React, { useState } from 'react'
import { OBD_CODES, SENSOR_REFERENCES } from '../data/educationalData'

export const PracticalInfoView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'obd' | 'sensors' | 'socket'>('obd')
  const [obdQuery, setObdQuery] = useState('')

  const filteredCodes = OBD_CODES.filter(
    (c) =>
      c.code.toLowerCase().includes(obdQuery.toLowerCase()) ||
      c.titleFa.includes(obdQuery) ||
      c.symptoms.includes(obdQuery) ||
      c.causes.includes(obdQuery)
  )

  return (
    <div className="tab-view-container practical-info-view">
      {/* View Header */}
      <div className="tab-view-header">
        <h2 className="tab-view-title">اطلاعات کاربردی و عیب‌یابی</h2>
        <p className="tab-view-subtitle">
          بانک کدهای خطا، مشخصات فنی سنسورها و راهنمای پایه‌های سوکت OBD2
        </p>
      </div>

      {/* Category Pills */}
      <div className="category-chips-nav">
        <button
          type="button"
          onClick={() => setActiveCategory('obd')}
          className={`category-chip ${activeCategory === 'obd' ? 'active' : ''}`}
        >
          کدهای خطای OBD2 ({OBD_CODES.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('sensors')}
          className={`category-chip ${activeCategory === 'sensors' ? 'active' : ''}`}
        >
          مقادیر اهمی سنسورها ({SENSOR_REFERENCES.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveCategory('socket')}
          className={`category-chip ${activeCategory === 'socket' ? 'active' : ''}`}
        >
          سوکت ۱۶ پین دیاگ (OBD-II)
        </button>
      </div>

      {/* Sub-view: OBD Codes */}
      {activeCategory === 'obd' && (
        <div className="obd-codes-section">
          <div className="search-pill-container" style={{ margin: '12px 0 16px' }}>
            <div className="search-input-inner">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.5" y2="16.5" />
              </svg>
              <input
                type="search"
                value={obdQuery}
                onChange={(e) => setObdQuery(e.target.value)}
                placeholder="جستجوی کد خطا (مثلاً P0105, P0300، مپ سنسور)..."
                className="search-text-input"
              />
            </div>
          </div>

          <div className="obd-list">
            {filteredCodes.map((code) => (
              <div key={code.code} className="obd-card-item">
                <div className="obd-card-top">
                  <span className="obd-code-badge">{code.code}</span>
                  <span className="obd-category-tag">{code.category}</span>
                </div>

                <h3 className="obd-title-fa">{code.titleFa}</h3>
                <span className="obd-title-en">{code.titleEn}</span>

                <div className="obd-detail-block">
                  <strong>علائم خرابی در خودرو:</strong>
                  <p>{code.symptoms}</p>
                </div>

                <div className="obd-detail-block">
                  <strong>علل احتمالی بروز خطا:</strong>
                  <p>{code.causes}</p>
                </div>

                <div className="obd-solution-box">
                  <strong>راهکار رفع عیب:</strong>
                  <p>{code.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-view: Sensor References */}
      {activeCategory === 'sensors' && (
        <div className="sensors-section">
          {SENSOR_REFERENCES.map((s) => (
            <div key={s.name} className="sensor-card-item">
              <div className="sensor-card-header">
                <h4>{s.name}</h4>
                <span className="sensor-pins-badge">{s.pins}</span>
              </div>

              <p className="sensor-role">{s.role}</p>

              <div className="sensor-spec-grid">
                <div className="spec-item">
                  <span className="spec-label">مقاومت استاندارد:</span>
                  <span className="spec-value">{s.normalResistance}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">ولتاژ سیگنال:</span>
                  <span className="spec-value">{s.signalVoltage}</span>
                </div>
              </div>

              <div className="sensor-troubleshoot-box">
                <strong>نکته عیب‌یابی:</strong>
                <p>{s.troubleshoot}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sub-view: Diagnostic Socket Pinout */}
      {activeCategory === 'socket' && (
        <div className="obd-socket-section">
          <div className="socket-guide-card">
            <h4>استاندارد سوکت ۱۶ پایه OBD-II استاندارد SAE J1962</h4>
            <p>
              تمامی خودروهای انژکتوری مدل ۱۳۸۳ به بعد مجهز به این کانکتور هستند. در زیر عملکرد پایه‌های حیاتی را مشاهده می‌نمایید:
            </p>

            <div className="socket-pins-list">
              <div className="socket-pin-row">
                <span className="pin-num-badge">پایه ۴</span>
                <div>
                  <strong>Chassis Ground (بدنه شاسی)</strong>
                  <p>اتصال مستقیم به منفی باطری و شاسی خودرو</p>
                </div>
              </div>

              <div className="socket-pin-row">
                <span className="pin-num-badge">پایه ۵</span>
                <div>
                  <strong>Signal Ground (بدنه سیگنال ایسیو)</strong>
                  <p>زمین مرجع ایزوله ماژول کنترل موتور</p>
                </div>
              </div>

              <div className="socket-pin-row highlight-blue">
                <span className="pin-num-badge">پایه ۶</span>
                <div>
                  <strong>CAN High (شبکه پرسرعت ۵۰۰ کیلوبیت)</strong>
                  <p>ولتاژ در حالت سوئیچ باز حدود ۲.۶ تا ۳.۰ ولت</p>
                </div>
              </div>

              <div className="socket-pin-row highlight-blue">
                <span className="pin-num-badge">پایه ۱۴</span>
                <div>
                  <strong>CAN Low (شبکه پرسرعت)</strong>
                  <p>ولتاژ در حالت کارکرد حدود ۲.۰ تا ۲.۴ ولت</p>
                </div>
              </div>

              <div className="socket-pin-row highlight-orange">
                <span className="pin-num-badge">پایه ۷</span>
                <div>
                  <strong>K-Line (خط ارتباطی تک‌سیم ISO 9141-2)</strong>
                  <p>خط ارتباط قدیمی زیمنس و ساژم؛ ولتاژ در بیکاری حدود ۱۲ ولت</p>
                </div>
              </div>

              <div className="socket-pin-row highlight-red">
                <span className="pin-num-badge">پایه ۱۶</span>
                <div>
                  <strong>+12V Battery Power (برق دائم باتری)</strong>
                  <p>تغذیه دستگاه دیاگ مستقیماً از فیوز دیاگ در جعبه فیوز اتاق</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
