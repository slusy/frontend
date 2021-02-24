import React from 'react'
import { Grid } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

import { routes } from 'common/routes'
import LinkButton from 'components/common/LinkButton'

type NavItem = {
  href: string
  label: string
  variant: 'text' | 'outlined' | 'contained'
}

export const navItems: NavItem[] = [
  {
    href: routes.index,
    label: 'nav.home',
    variant: 'text',
  },
  {
    href: routes.about,
    label: 'nav.about',
    variant: 'text',
  },
  {
    href: routes.index,
    label: 'nav.about-project',
    variant: 'text',
  },
  {
    href: routes.index,
    label: 'nav.contacts',
    variant: 'text',
  },
  {
    href: routes.support,
    label: 'nav.support-us',
    variant: 'outlined',
  },
]

export default function MainNavMenu() {
  const { t } = useTranslation()
  return (
    <Grid container direction="row" wrap="nowrap" spacing={2}>
      {navItems.map(({ href, label, variant }, key) => (
        <Grid item key={key}>
          <LinkButton
            href={href}
            color="primary"
            style={{ whiteSpace: 'nowrap' }}
            variant={variant}>
            {t(label)}
          </LinkButton>
        </Grid>
      ))}
    </Grid>
  )
}