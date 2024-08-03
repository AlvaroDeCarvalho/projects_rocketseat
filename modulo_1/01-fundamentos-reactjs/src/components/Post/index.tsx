import {format, formatDistanceToNow} from 'date-fns'
import {useState} from 'react'

import * as S from './styles'
import {ImageProfile} from '../Sidebar/styles'
import { Button } from '../Sidebar/styles'
import Comment from '../Comment'
import {ptBR } from 'date-fns/locale'



function Post({id, author, content, data}: User) {

    
    const [comments, setComments]= useState<string[]>([])
    const [thatComment, setThatComment] = useState<string>('')
    const deleteComments = (IsComment: string) => {
        const commentsWithoutDelets = comments.filter((commentItem) => {
            return commentItem !== IsComment
        })
        setComments(commentsWithoutDelets)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleCommit = (e:any) => {
            e.preventDefault()
            setComments([...comments, thatComment])
            setThatComment('')
           
    }

   
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
            <S.FormContainer onSubmit={(e) => handleCommit(e)}>
                <strong>Deixe seu comentario</strong>

                <textarea 
                onFocus={() => setIsFocus(true)}
                placeholder='escreva aqui seu comentario'
                onChange= {(e) => setThatComment(e.target.value)}
                value={thatComment}
                />
                <S.HiddenButton isFocus={isFocus}>
                <Button typeOfButton="native" type='submit' >Publicar</Button>
                </S.HiddenButton>
            </S.FormContainer>

            <div className="commentList">
                {
                    comments.map((comment, index) => (
                        <Comment key={index} comments={comment} onHandleDalete={deleteComments} />
                        
                    ))
                }
            </div>
        </S.Article>
    )
}


export default Post