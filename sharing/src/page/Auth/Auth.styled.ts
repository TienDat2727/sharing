import styled from 'styled-components';

export const Body = styled.div`
    *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat',sans-serif;
}

    background-color: #c9d6ff;
    background: linear-gradient(to right,#e2e2e2,#c9d6ff);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;


`

export const Container = styled.div`
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 5px 15px rgba(0,0, 0, 0.35);
    position: relative;
    overflow: hidden;
    width: 760px;
    max-width: 100%;
    min-height: 480px;


div.ant-typography{
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 20px 0;
}


 .sub-title{
    font-size: 12px;
}

 a{
    color: #333;
    font-size: 13px;
    text-decoration: none;
    margin: 15px 0 10px;
}

 .ant-btn{
    background-color: #512da8;
    color: #fff;
    font-size: 12px;
    padding: 10px 45px;
    border: 3px solid #fff;
    border-radius: 8px;
    font-weight: 600;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-top: 10px;
    cursor: pointer;
}


 .ant-btn .hidden{
    background-color: transparent;
    border-color: #fff;
}

 .ant-form {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    height: 100%;
}

.ant-input{
    background-color: #eee;
    border: none;
    margin: 8px 0;
    padding: 10px 15px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
    outline: none;
}

.form-container{
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
}
.sign-in{
    left: 0;
    width: 50%;
    z-index: 2;
}

.active.sign-in{
    transform: translateX(100%);
}

.sign-up{
    left: 0;
    width: 50%;
    opacity: 0;
    z-index: 1;
}

.active .sign-up {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
    animation: move 0.6s;
}

@keyframes move{
    0%,49.99%{
        opacity: 0;
        z-index: 1;
    }
    50%,100%{
        opacity: 1;
        z-index: 5;
    }
}

.social-icons{
    margin: 20px 0;
}

.social-icons a{
    border: 1px solid #ccc;
    border-radius: 20%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0px 3px;
    width: 40px;
    height: 40px;
}


.toggle-container{
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: all 0.6s ease-in-out;
    border-radius: 150px 0 0 100px;
    z-index: 1000;
}

.active .toggle-container{
    transform: translateX(-100%);
    border-radius:  0 150px 100px  0 ;
}

.toggle{
    background-color: #512da8;
    height: 100%;
    background: linear-gradient(to right,#512da8,#5c6bc0);
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.active .toggle{
    transform: translateX(50%);
} 

.toggle-panel{
    position: absolute;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: all 0.6s ease-in-out;
}

.toggle-left{
    transform: translateX(-200%);
}

.active .toggle-left{
    transform: translateX(0);
}

.toggle-right {
    right: 0;
    transform: translateX(0);
}

.active .toggle-right{
    transform: translateX(200%);
}
`;