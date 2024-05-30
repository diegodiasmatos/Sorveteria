import React from "react";
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape/"
import './css.css';
export default function Home() {
    return(
        <div className="home">
            <Topo/>
            <main>
                <section className="banner">
                    <h1 className="titulo">Sorvete artesanal</h1>      
                </section>
                <section className="estilo">
                    <div className="imagem-sabores">
                        <img className="sabores-imgem" src="assets/banner-sabores.jpg" alt="banner-sabores"/>
                    </div>
                    <div className="texte" >
                        <h2>NOSSOS SABORES</h2>
                        <span> Novos e deliciosos!</span>
                        <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </section>
                <section className="estilo">
                    <div className="eventos">
                        <div className="eventos-card">
                            <h2>Nossos eventos</h2>
                                <span>Delicia com sorvete!</span>
                                <p> Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>

                        </div>
                        <img className="sabores-imgem" src="assets/eventos-image.jpg" alt="imagem do evento" />
                    </div>
                </section>
                <section className="sobre estilo">
                    <img className="sabores-imgem" src="assets/sobre-image.jpg" alt="imagem sobre" />
                    <div className="sobre-card">
                <h2>SOBRE NÓS</h2>
                <span>Alegria em cada casquinha!</span>
             <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>

                </section>
            </main>
            <Rodape />
            
        </div>

    )
 }