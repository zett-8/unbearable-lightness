import React, { ReactElement } from 'react'
import { GatsbyBrowser, GatsbySSR } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { CssReset } from './src/styles/cssReset'
import { CustomGlobalCss } from './src/styles/customGlobalCss'
import { theme } from './src/styles/theme'

type Props = {
  element: ReactElement
}

type RootWrapper = GatsbyBrowser['wrapRootElement'] | GatsbySSR['wrapRootElement']
type PageWrapper = GatsbyBrowser['wrapPageElement'] | GatsbySSR['wrapPageElement']

// Set up any Provider components that will wrap the application.
export const rootWrapper: RootWrapper = ({ element }: Props) => <>{element}</>

// Set wrapper components around pages that won’t get unmounted on page changes.
export const pageWrapper: PageWrapper = ({ element }: Props) => (
  <>
    {/* Global CSS must belong here not in rootWrapper otherwise CSS loading delay occurs */}
    <CssReset />
    <CustomGlobalCss />
    {/*@ts-ignore*/}
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </>
)
