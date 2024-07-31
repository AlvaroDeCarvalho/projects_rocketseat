import * as S from './styles'
import {useState} from 'react'
import {ImageProfile} from '../Sidebar/styles'
import { Button } from '../Sidebar/styles'
import Comment from '../Comment'
function Post() {

    const [isFocus, setIsFocus] = useState(false)

    
    console.log(isFocus)
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
            <S.TimePost dateTime="2024-07-30"><span>publicado</span> há 1h</S.TimePost>

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
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                placeholder='escreva aqui seu comentario'
                />
                <S.HiddenButton isFocus={isFocus}>
                <Button type="native">Publicar</Button>
                </S.HiddenButton>
            </S.FormContainer>

            <div className="commentList">
            <Comment />
            <Comment />
            <Comment />
            </div>
        </S.Article>
    )
}


export default Post