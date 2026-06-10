import React, { useState } from 'react';
import './App.css';
import { ImagesSection } from './sections/ImagesSection';
import { LinksSection } from './sections/LinksSection';
import { ButtonsSection } from './sections/ButtonsSection';
import { FormsSection } from './sections/FormsSection';
import { HeadingsSection } from './sections/HeadingsSection';
import { AriaSection } from './sections/AriaSection';
import { ClickHandlerSection } from './sections/ClickHandlerSection';
import { TabindexSection } from './sections/TabindexSection';
import { ColorContrastSection } from './sections/ColorContrastSection';
import { TableSection } from './sections/TableSection';
import { MediaSection } from './sections/MediaSection';
import { LanguageSection } from './sections/LanguageSection';
import { FrameSection } from './sections/FrameSection';
import { ModalLeakSection } from './sections/ModalLeakSection';
import { OffScreenFocusSection } from './sections/OffScreenFocusSection';
import { MissingFocusIndicatorSection } from './sections/MissingFocusIndicatorSection';
import { AaaSemanticSection } from './sections/AaaSemanticSection';

function App() {
  const [tab, setTab] = useState('home');

  return (
    <div className="app">
      <header className="app-header">
        <h1>a11y-scout React Test Fixture</h1>
        <p className="lede">
          This page intentionally exercises every accessibility check the
          a11y-scout tool performs at scan-repo and scan-url level.
        </p>
        <nav aria-label="Test pages">
          <ul className="nav-list">
            <li><button onClick={() => setTab('home')}>Home (this page)</button></li>
            <li>
              {/* Crawl-discoverable links to additional fixture pages */}
              <a href="/keyboard-regression.html">Keyboard regression page</a>
            </li>
            <li>
              <a href="/focus-order.html">Focus-order divergence page</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Note: there is no <main> landmark anywhere on this page on purpose.
          axe `landmark-one-main` and `region` should fire. */}
      <ImagesSection />
      <LinksSection />
      <ButtonsSection />
      <FormsSection />
      <HeadingsSection />
      <AriaSection />
      <ClickHandlerSection />
      <TabindexSection />
      <ColorContrastSection />
      <TableSection />
      <MediaSection />
      <LanguageSection />
      <FrameSection />
      <ModalLeakSection />
      <OffScreenFocusSection />
      <MissingFocusIndicatorSection />
      <AaaSemanticSection />

      <footer className="app-footer">
        <p>End of fixture page.</p>
      </footer>
    </div>
  );
}

export default App;
