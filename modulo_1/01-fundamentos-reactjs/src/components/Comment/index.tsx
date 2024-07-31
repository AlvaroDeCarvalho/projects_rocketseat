import { ThumbsUp, Trash } from 'phosphor-react';
import * as S from './styles'

function Comment() {
    return (
        <S.CommentContainer>
            <S.Avatar src="https://github.com/AlvaroDeCarvalho.png" alt="" />

            <div className="commentBox">

                <div className="commentContent">

                    <header className='authorAndTime'>
                        <strong>Alvaro De Carvalho</strong>
                        <time dateTime="2024-07-30"><span>cerca de</span> 1h <span>atras</span></time>
                    </header>

                    <p> Fala galeraa 👋</p>       

                <button title='deletar o comentario' className='buttonDelete'>
                    <Trash size={24} color='#fff'/>
                </button>
                </div>


                <footer>
                    <button className='likeButton'>

                         <ThumbsUp size={18} />

                       Aplaudir <span></span> 20 
                    
                    </button>
                </footer>

            </div>
        </S.CommentContainer>
    )
}

export default Comment;