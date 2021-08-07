import styled from 'styled-components';

export const ContatoStyle = styled.div`
    
    @keyframes aniFormulario {
        0% {
            left: 1500px;
        }
        100% {
            left: 0px;
        }
    }

    .formulario {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        animation-name: aniFormulario;
        animation-duration: 1s;

        div {
            margin-bottom: 15px;
            margin-right: 35%;
        }
        
        label {
            margin-right: 5px;
            font-family: helvetica_rounded;
            font-size: 24px;
            color: white;
        }

        textarea {
            resize: none;
            width: 210px;
        }

        input, textarea {
            border: white solid 4px;
            background-color: black;
            color: white;
            font-family: sanchez;
            font-size: 18px;
            padding-top: 3px;
            padding-bottom: 3px;
            border-radius: 7px;

            :focus {
                outline: none;
                background-color: black;
            }
        }

        button {
            width: 160px;
            height: 60px;
            background-color: black;
            margin: 0 auto;
            border: white solid 4px;
            color: white;
            font-size: 30px;
            font-family: helvetica_rounded;
            border-radius: 7px;
            margin-top: 20px;

            :hover {
                background-color: white;
                color: black;
                cursor: pointer;
            }

            :active {
                width: 170px;
                height: 70px;
            }
        }
    }
`;
