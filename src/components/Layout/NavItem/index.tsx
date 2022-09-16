import { useMatch, useNavigate, useResolvedPath } from 'react-router-dom'
import { ListItem, SvgIcon, Typography, useTheme } from '@mui/material'
import Color from 'color'
type Props = {
  isCollapsed: boolean
  to: string
  title: string
  icon: any
}

export function NavItem({ isCollapsed, icon, title, to }: Props): JSX.Element {
  const navigate = useNavigate()
  const theme = useTheme()

  function handleNavigate(to: string): void {
    navigate(to)
  }
  const resolvePath = useResolvedPath(to)
  const match = useMatch({ path: resolvePath.pathname, end: true })
  return (
    <ListItem
      selected={!(match == null)}
      key={title}
      disablePadding
      button
      onClick={() => handleNavigate(to)}
      sx={{
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        minHeight: 32,
        '-webkit-font-smoothing': 'antialiased',
        fontSize: 14,
        padding: 1,
        '& > svg:first-child': {
          marginRight: '30px',
          marginLeft: '10px',
          fontSize: 24,
          color: 'rgba(0, 0, 0, 0.54)',
        },
        '&.Mui-selected': {
          backgroundColor: 'rgba(4,102,200, 0.3)',
          '&:hover': {
            backgroundColor: 'rgba(4,102,200, 0.3)',
          },
          '& > p': {
            color: `${Color(theme.palette.primary.light).toString()} !important`,
          },
          '& > svg:first-child': {
            color: `${Color(theme.palette.primary.light).toString()} !important`,
          },
        },
      }}
    >
      <SvgIcon >{icon}</SvgIcon>
      {!isCollapsed && <Typography>{title}</Typography>}
    </ListItem>
  )
}
