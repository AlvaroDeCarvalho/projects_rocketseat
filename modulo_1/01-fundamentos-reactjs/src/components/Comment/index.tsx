import { ThumbsUp, Trash } from 'phosphor-react';
import * as S from './styles'
import { useState } from 'react';

interface CommentProps {
    comments?: string;
    onHandleDalete: (comment: string) => void
}

function Comment({comments, onHandleDalete}: CommentProps) {

    const [likeThePost, setLikeThePost] = useState<number>(10)
    const [isClick, SetIsClick] = useState<boolean>(true)
    const handleAddLikePost = () => { 
        if(isClick){
            setLikeThePost(likeThePost + 1)
        }
        SetIsClick(false)
    }

    return (
        <S.CommentContainer>
            <S.Avatar src="https://github.com/AlvaroDeCarvalho.png" alt="" />

            <div className="commentBox">

                <div className="commentContent">

                    <header className='authorAndTime'>
                        <strong>Alvaro De Carvalho</strong>
                        <time dateTime="2024-07-30"><span>cerca de</span> 1h <span>atras</span></time>
                    </header>

                    <p>{comments}</p>
                <button
                onClick={() => onHandleDalete(comments as string)}
                 title='deletar o comentario' 
                className='buttonDelete'
                >
                    <Trash size={24} />
                </button>
                </div>


                <footer>
                    <button 
                    onClick={() => handleAddLikePost(!isClick)}
                    className='likeButton'
                    >

                         <ThumbsUp size={18} />

                       Aplaudir <span></span> {likeThePost} 
                    
                    </button>
                </footer>

            </div>
        </S.CommentContainer>
    )
}

export default Comment;