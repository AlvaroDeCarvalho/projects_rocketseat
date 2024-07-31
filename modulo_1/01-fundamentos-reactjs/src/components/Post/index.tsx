import {format, formatDistanceToNow} from 'date-fns'

import * as S from './styles'
import {useState} from 'react'
import {ImageProfile} from '../Sidebar/styles'
import { Button } from '../Sidebar/styles'
import Comment from '../Comment'
import { ptBR } from 'date-fns/locale'


function Post({id, author,content,data}: User) {

    const publishedDatrFormatted = format(data, "d LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    })
    const [isFocus, setIsFocus] = useState(false)

    
    const publishedDateRelativeToNow = formatDistanceToNow(data, {
        locale: ptBR,
        addSuffix: true 
    })

    
    return(
        <S.Article>
            <div className='author'>
            <ImageProfile 
            type='profile'
            src={author.avatarUrl} />
            <S.AuthorInfo>
                <h4>{author.name}</h4>
                <span>{author.role}</span>
            </S.AuthorInfo>
            </div>
            <S.TimePost dateTime={'2022-05-11 08:13:30'} title= {publishedDatrFormatted}>{publishedDateRelativeToNow}</S.TimePost>

            <div className="content">
                <p> Fala galeraa 👋</p>

                <p>{content.content}</p>

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
            </div>
        </S.Article>
    )
}


export default Post