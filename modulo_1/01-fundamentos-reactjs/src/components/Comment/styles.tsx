import styled from "styled-components";
import { colors } from "../../styles";


export const CommentContainer = styled.div`
    position: relative;
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;


    .likeButton {
        background-color: transparent;
        border: none;
        color: ${colors.gray400};
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.6;
        margin-top: 1rem;

        :hover {
            color: ${colors.green500};
        }

       span {
            
            background-color: #fff;
            width: 4px;
            height: 4px;
            border: 0;
            border-radius: 50%;
            
       }
    }

    .buttonDelete{
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 16px;
        top: 3.5rem;
    }

    .authorAndTime {
        strong {
            display: block;
            font-size: 0.875rem;
            line-height: 1.6;
        }

        time {
            display: block;
            font-size: 0.75rem;
            line-height: 1.6;
            color: ${colors.gray400};

            span{
                @media (max-width: 768px) {
                    visibility: hidden;
                }
            }
        }

    }
    

    .commentBox {
        flex: 1;
        position: relative;

    }

    .commentContent {
        background-color: ${colors.gray900};
        border-radius: 8px;
        padding: 1rem;	
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`
export const Avatar = styled.img`
    max-width: 3rem;
    height:  3rem;
    border-radius:  8px;
    margin-top:2rem ; 

`