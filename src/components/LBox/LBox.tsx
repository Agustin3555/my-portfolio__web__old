import * as LBoxStyled from './LBox.styled'

const LBox = ({ style }: { style?: LBoxStyled.Props }) => {
  return <LBoxStyled.Component p={LBoxStyled.adapter(style)} />
}

export default LBox
