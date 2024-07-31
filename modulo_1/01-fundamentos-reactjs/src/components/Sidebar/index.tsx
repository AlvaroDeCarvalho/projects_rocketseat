import { PencilLine } from 'phosphor-react'

import Post from '../Post'
import * as S from './styles'

function Sidebar() {
    return (
        <S.Wrapper>
            <S.Aside>
                <S.ImageProfile 
                type='thumbnail'
                src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className='thumbnail'
                />
                <div className="profile">
                    <S.ImageProfile
                    src="https://github.com/AlvaroDeCarvalho.png"
                    type='profile'
                    marginTop={-2}
                     />
                    <strong>Alvaro De Carvalho</strong>
                    <span>Web Developer</span>
                </div>
                <footer>
                    <S.Button>
                        <PencilLine  size={20}/>
                        Editar Perfil  
                    </S.Button>
                </footer>
            </S.Aside>

            <main>
            <Post />
            <Post />
            </main>
        </S.Wrapper>
    )
}

export default Sidebar