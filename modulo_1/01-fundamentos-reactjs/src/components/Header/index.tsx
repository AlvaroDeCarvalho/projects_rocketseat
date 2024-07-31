import * as S from './styles'
import imgLogo from '../../assents/images/Ignite simbol.png'
 function Header() {
    return (
        <S.HeaderStyle>
            <img src={imgLogo} alt="" />
            <p>Ignite Feed</p>
        </S.HeaderStyle>
    )
}

export default Header