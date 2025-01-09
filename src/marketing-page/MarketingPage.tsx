import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import * as React from 'react';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />

        <Footer />
      </div>
    </AppTheme>
  );
}
