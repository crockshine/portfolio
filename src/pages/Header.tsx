import {InfoBlock} from "../components/InfoBlock.tsx";

export default function Header(){
    return(
        <InfoBlock className={``}>
            <div className={`Main-title w-full h-full flex flex-col justify-between  `}>

                <h3 className={`Nav-text  flex justify-start gap-10 font-light text-white`}>
                    <span className={``} style={{fontSize: '1.2em'}}>Обо мне</span>
                    <span className={``} style={{fontSize: '1.2em'}}>Мои навыки</span>
                    <span className={``} style={{fontSize: '1.2em'}}>Мои проекты</span>

                </h3>

                <h1 className={`font-bold flex flex-col text-white`}>
                    <span className={`opacity-10`} style={{fontSize: '4em'}}>Привет) Я</span>
                    <span className={``} style={{fontSize: '7em'}}>Михаил Королев</span>
                    <span className={`font-extralight`} style={{fontSize: '4em'}}>Frontend разработчик</span>

                </h1>

            </div>
        </InfoBlock>
    )
}