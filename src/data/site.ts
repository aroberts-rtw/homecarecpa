export const siteConfig = {
  name: 'HomeCareCPA',
  fullName: 'HomeCareCPA · RTW Advisors',
  parentName: 'RTW Advisors',
  parentUrl: 'https://www.rtwadvisors.com',
  mainSiteUrl: 'https://www.rtwadvisors.ai',
  url: 'https://www.homecarecpa.com',
  tagline: 'Accounting and tax for non-medical home care businesses — from a CPA focused on this industry.',
  description:
    'Bookkeeping, tax preparation, and fractional CFO advisory for private-pay and Medicaid-waiver home care businesses. RTW Advisors is focused on home care — caregiver W-2 vs. 1099 compliance, franchise vs. independent economics, state Medicaid waivers, LOC-funded payroll, and owner distributions.',
  niche: 'non-medical home care businesses',
  founder: {
    name: 'Askia Roberts',
    suffix: 'CPA',
    role: 'Founder',
    licensure: 'GA',
    licenseNumber: 'CPA038784',
  },
  contact: {
    // Same TaxDome self-serve onboarding as rtwadvisors.ai — no separate intake
    taxdomeSignup: 'https://client-center.rtwadvisors.com/login',
    getStarted: '/get-started',
    portal: 'https://client-center.rtwadvisors.com/login',
    email: 'aroberts@rtwadvisors.com',
  },
} as const;
