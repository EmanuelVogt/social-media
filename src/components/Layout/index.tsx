import { useCallback, useState } from 'react'
import { Box } from '@mui/material'

import { Header } from './Header'
import { SideBar } from './SideBar'

type Props = {
  children: JSX.Element
}

export function Layout({ children }: Props): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const handleCollapseSideBar = useCallback(() => {
    setIsCollapsed(!isCollapsed)
  }, [isCollapsed])

  return (
    <Box sx={{ display: 'flex' }}>
      <Header handleCollapseSideBar={handleCollapseSideBar} />
      <SideBar isCollapsed={isCollapsed}>{children}</SideBar>
    </Box>
  )
}
