import styled from '@emotion/styled'

export const Backdrop = styled.div`
    position:fixed;
    top: 0;
    left: 0;
    height: 100%;
    width:100%;
    background-color:rgba(0,0,0,0.5);
`

export const ModalContent = styled.div`
    position:absolute;
    top: 50%;
    left: 50%;
    transform:translate(-50%,-50%);
    min-width: 20px;
    min-height: 200px;
    padding:10px;

    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    background-color:#fff;
    `