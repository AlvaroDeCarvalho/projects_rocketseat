import { PencilLine } from "phosphor-react";
import { Button, ImageProfile } from "../Sidebar/styles";
import * as S from './styles';
function Aside(){
    return(
        <div>
            <S.Aside>
                <ImageProfile 
                type='thumbnail'
                src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className='thumbnail'
                />
                <div className="profile">
                    <ImageProfile
                    src={'https://github.com/AlvaroDeCarvalho.png'}
                    type='profile'
                    marginTop={-2}
                     />
                    <strong>Alvaro Carvalho</strong>
                    <span>Dev full-stack</span>
                </div>
                <footer>
                    <Button>
                        <PencilLine  size={20}/>
                        Editar Perfil  
                    </Button>
                </footer>
            </S.Aside>
        </div>
    )
}

export default Aside;