import { Box } from "@mui/material"
const Screen = ({ sx, children, ...props }) => (
  <Box sx={{
    display: "flex",
    width: "100%",
    flexFlow: "column wrap",
    bgcolor: 'primary',
    fontFamily: "Roboto Mono, monospace",
    ...sx
  }}>
    {children}
  </Box>
)

export default Screen