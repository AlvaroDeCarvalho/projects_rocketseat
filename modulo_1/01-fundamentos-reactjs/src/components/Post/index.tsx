import * as S from './styles'
import {ImageProfile} from '../Sidebar/styles'
import { Button } from '../Sidebar/styles'
function Post() {


    return(
        <S.Article>
            <div className='author'>
            <ImageProfile 
            type='profile'
            src='https://github.com/AlvaroDeCarvalho.png' />
            <S.AuthorInfo>
                <h4>Alvaro Carvalho</h4>
                <span>Web Developer</span>
            </S.AuthorInfo>
            </div>
            <time dateTime="2024-07-30">publicado há 1h</time>

            <div className="content">
                <p> Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>
                    👉 <a href="#">jane.design/doctorcare</a>
                </p>

                <p > 
                    <a href="#">#novoprojeto</a>
                    <a href="#">#rocketseat</a>
                    <a href="#">#nlw </a>
                </p>
            </div>
            <S.FormContainer>
                <strong>Deixe seu comentario</strong>

                <textarea 
                placeholder='escreva aqui seu comentario'
                />
                <footer>
                <Button type="native">Publicar</Button>
                </footer>
            </S.FormContainer>
        </S.Article>
    )
}


export default Post