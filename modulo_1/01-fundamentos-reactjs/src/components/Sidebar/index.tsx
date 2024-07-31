
import Post from '../Post'
import * as S from './styles'

const users: User[] = [
    {
        id: 1,
        author: {
            name: 'João Victor',
            avatarUrl: 'https://github.com/joaovictor3g.png',
            role: 'Developer'
        },
        content: {
            type: 'paragraph', 
            content: 'Acabei de finalizar um novo projeto incrível!'
        },
        data: new Date('2023-07-01 18:00:00')
    },
    {
        id: 2,
        author: {
            name: 'Ana Silva',
            avatarUrl: 'https://github.com/anasilva.png',
            role: 'Designer'
        },
        content: {
            type: 'paragraph', 
            content: 'Trabalhando em uma nova interface para um cliente.'
        },
        data: new Date('2023-06-15 14:30:00')
    },
    {
        id: 3,
        author: {
            name: 'Carlos Souza',
            avatarUrl: 'https://github.com/carlossouza.png',
            role: 'Product Manager'
        },
        content: {
            type: 'paragraph', 
            content: 'Reunião de planejamento do próximo sprint concluída.'
        },
        data: new Date('2023-05-10 09:00:00')
    },
    {
        id: 4,
        author: {
            name: 'Mariana Lima',
            avatarUrl: 'https://github.com/marianalima.png',
            role: 'Developer'
        },
        content: {
            type: 'paragraph', 
            content: 'Corrigindo bugs e otimizando performance do app.'
        },
        data: new Date('2023-04-22 11:45:00')
    },
    {
        id: 5,
        author: {
            name: 'Pedro Gomes',
            avatarUrl: 'https://github.com/pedrogomes.png',
            role: 'QA Engineer'
        },
        content: {
            type: 'paragraph', 
            content: 'Finalizando testes automatizados para a nova versão.'
        },
        data: new Date('2023-03-18 16:30:00')
    },
    {
        id: 6,
        author: {
            name: 'Julia Rocha',
            avatarUrl: 'https://github.com/juliarocha.png',
            role: 'Scrum Master'
        },
        content: {
            type: 'paragraph', 
            content: 'Preparando o backlog para a próxima sprint.'
        },
        data: new Date('2023-02-27 13:15:00')
    },
    {
        id: 7,
        author: {
            name: 'Ricardo Ferreira',
            avatarUrl: 'https://github.com/ricardoferreira.png',
            role: 'DevOps'
        },
        content: {
            type: 'paragraph', 
            content: 'Implementando nova pipeline de CI/CD.'
        },
        data: new Date('2023-01-30 10:00:00')
    },
    {
        id: 8,
        author: {
            name: 'Bianca Almeida',
            avatarUrl: 'https://github.com/biancaalmeida.png',
            role: 'UI/UX Designer'
        },
        content: {
            type: 'paragraph', 
            content: 'Criando wireframes para o novo projeto.'
        },
        data: new Date('2022-12-15 08:00:00')
    },
    {
        id: 9,
        author: {
            name: 'Gabriel Santos',
            avatarUrl: 'https://github.com/gabrielsantos.png',
            role: 'Frontend Developer'
        },
        content: {
            type: 'paragraph', 
            content: 'Desenvolvendo novas funcionalidades para o frontend.'
        },
        data: new Date('2022-11-22 17:00:00')
    },
    {
        id: 10,
        author: {
            name: 'Laura Costa',
            avatarUrl: 'https://github.com/lauracosta.png',
            role: 'Backend Developer'
        },
        content: {
            type: 'paragraph', 
            content: 'Atualizando a arquitetura do backend para suportar mais usuários.',
        },
        data: new Date('2022-10-05 12:00:00')
    }
    ]


function Sidebar() {
    return (
        <S.Wrapper>
            <main>
            {
                users.map(user => (
                    <Post key={user.id} {...user} />
                ))
            }
            </main>
        </S.Wrapper>
    )
}

export default Sidebar