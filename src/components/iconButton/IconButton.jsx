import IconButtonStyled from "./IconButtonStyled"

const IconButton = ({children, ...args}) => {
  return (
    <IconButtonStyled {...args}>{children}</IconButtonStyled>
  )
}
export default IconButton