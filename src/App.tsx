import { useState, useMemo, useEffect } from 'react'
import './App.css'
import { BRANDS, type BrandData } from './data/brandsData'
import { Header } from './components/Header'
import { SearchBox } from './components/SearchBox'
import { AutoprogBanner } from './components/AutoprogBanner'
import { BrandList } from './components/BrandList'
import { BottomNavigation, type TabType } from './components/BottomNavigation'
import { BrandDetailModal } from './components/BrandDetailModal'
import { PracticalInfoView } from './components/PracticalInfoView'
import { TutorialsView } from './components/TutorialsView'
import { AccountView } from './components/AccountView'
import { SideDrawer } from './components/SideDrawer'
import { InstagramModal } from './components/InstagramModal'

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBrand, setSelectedBrand] = useState<BrandData | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isInstagramOpen, setIsInstagramOpen] = useState(false)
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('mapcircuit_bookmarks')
      return saved ? JSON.parse(saved) : ['ikco-me17-pinout', 'saipa-siemens-pinout']
    } catch {
      return ['ikco-me17-pinout', 'saipa-siemens-pinout']
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('mapcircuit_bookmarks', JSON.stringify(bookmarks))
    } catch {
      // LocalStorage fallback
    }
  }, [bookmarks])

  const toggleBookmark = (diagramId: string) => {
    setBookmarks((prev) =>
      prev.includes(diagramId) ? prev.filter((id) => id !== diagramId) : [...prev, diagramId]
    )
  }

  const isBookmarked = (diagramId: string) => bookmarks.includes(diagramId)

  // Filter brands based on search query
  const filteredBrands = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return BRANDS

    return BRANDS.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.englishName.toLowerCase().includes(q) ||
        b.models.some((m) => m.name.toLowerCase().includes(q) || m.engine.toLowerCase().includes(q)) ||
        b.ecus.some((e) => e.name.toLowerCase().includes(q) || e.code.toLowerCase().includes(q))
    )
  }, [searchQuery])

  // Get active page header title
  const getHeaderTitle = () => {
    switch (activeTab) {
      case 'home':
        return 'صفحه اصلی'
      case 'practical':
        return 'اطلاعات کاربردی'
      case 'tutorials':
        return 'مطالب آموزشی'
      case 'account':
        return 'حساب کاربری'
      default:
        return 'صفحه اصلی'
    }
  }

  return (
    <div className="app-viewport-wrapper">
      <div className="iphone-device-frame">
        {/* Simulated iPhone Status Bar (Matching the screenshot: 7:45 PM, 5G, 67% battery) */}
        <div className="iphone-status-bar" aria-hidden="true">
          <span className="status-time">7:45 PM</span>

          <div className="status-dynamic-island">
            <span className="island-camera-dot" />
          </div>

          <div className="status-icons-group">
            {/* 5G Signal */}
            <svg width="15" height="11" viewBox="0 0 17 12" fill="currentColor">
              <rect x="0" y="9" width="2.5" height="3" rx="0.5" />
              <rect x="4.5" y="6" width="2.5" height="6" rx="0.5" />
              <rect x="9" y="3" width="2.5" height="9" rx="0.5" />
              <rect x="13.5" y="0" width="2.5" height="12" rx="0.5" />
            </svg>
            {/* Wi-Fi */}
            <svg width="14" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12.55a11 11 0 0 1 14.08 0" strokeLinecap="round" />
              <path d="M8.5 16.5a6 6 0 0 1 7 0" strokeLinecap="round" />
              <circle cx="12" cy="20" r="1" fill="currentColor" />
            </svg>
            {/* Battery */}
            <span className="battery-pill">67%</span>
          </div>
        </div>

        {/* App Top Header: Hamburger on Right, Green Dot + Title, Instagram on Left */}
        <Header
          activeTitle={getHeaderTitle()}
          onOpenMenu={() => setIsMenuOpen(true)}
          onOpenInstagram={() => setIsInstagramOpen(true)}
        />

        {/* Scrollable Main Views */}
        <main className="app-scroll-content">
          {activeTab === 'home' && (
            <>
              {/* Search Section: MapCircuit badge + input */}
              <SearchBox
                value={searchQuery}
                onChange={setSearchQuery}
                onClear={() => setSearchQuery('')}
              />

              {/* Only show banner when not actively searching */}
              {!searchQuery && <AutoprogBanner />}

              {/* Car Manufacturers List (All 22 brands matching photo 1, 2, 3, 4) */}
              <BrandList
                brands={filteredBrands}
                onSelectBrand={setSelectedBrand}
                searchQuery={searchQuery}
              />
            </>
          )}

          {activeTab === 'practical' && <PracticalInfoView />}

          {activeTab === 'tutorials' && <TutorialsView />}

          {activeTab === 'account' && (
            <AccountView
              bookmarkedCount={bookmarks.length}
              onOpenInstagram={() => setIsInstagramOpen(true)}
            />
          )}
        </main>

        {/* Bottom Navigation Bar (Deep Cobalt Blue Dock) */}
        <BottomNavigation
          activeTab={activeTab}
          onTabChange={(tab) => {
            setActiveTab(tab)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />

        {/* iPhone Home Indicator Line */}
        <div className="iphone-home-indicator-bar" aria-hidden="true" />

        {/* Brand Detail Modal (Models, ECUs, Wiring Diagrams & Interactive Pinout) */}
        {selectedBrand && (
          <BrandDetailModal
            brand={selectedBrand}
            onClose={() => setSelectedBrand(null)}
            onBookmarkDiagram={toggleBookmark}
            isBookmarked={isBookmarked}
          />
        )}

        {/* Side Menu Drawer */}
        <SideDrawer
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onNavigateTab={(tab) => {
            setActiveTab(tab)
            setSelectedBrand(null)
          }}
          onOpenInstagram={() => setIsInstagramOpen(true)}
        />

        {/* Instagram / Social Sheet */}
        <InstagramModal
          isOpen={isInstagramOpen}
          onClose={() => setIsInstagramOpen(false)}
        />
      </div>
    </div>
  )
}

export default App
