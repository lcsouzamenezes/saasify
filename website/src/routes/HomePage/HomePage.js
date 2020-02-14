import React, { Component } from 'react'
import { theme } from 'react-saasify'

import {
  NavHeader,
  NavFooter,
  HeroSection,
  BenefitsSection,
  ExamplesSection,
  SocialProofSection,
  FeaturesSection,
  CTASection
} from 'components'

import styles from './styles.module.css'

export class HomePage extends Component {
  render() {
    return (
      <div className={theme(styles, 'home-page')}>
        <NavHeader />

        <HeroSection />

        <BenefitsSection />

        <ExamplesSection />

        <SocialProofSection />

        <FeaturesSection />

        <CTASection />

        <NavFooter />
      </div>
    )
  }
}
