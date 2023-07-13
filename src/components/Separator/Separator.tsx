import * as SeparatorStyled from './Separator.styled'

const Separator = ({ style }: { style: SeparatorStyled.Props }) => {
  return <SeparatorStyled.Component p={SeparatorStyled.adapter(style)} />
}

export default Separator
