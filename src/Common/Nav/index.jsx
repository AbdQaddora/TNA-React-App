import React from 'react';

import MobileNav from './MobileNav';
import PcNav from './PcNav';

// css
import './nav.css'
export default function Nav() {
  return (
    <>
      <PcNav />
      <MobileNav />
    </>
  )
}
