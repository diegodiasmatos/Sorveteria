import React from "react";
import Topo from "../../componentes/Topo";
import Rodape from "../../componentes/Rodape";
import "./style.css"

export default function sabores(){
    function calculadora(number_1,number_2) {
        return number_1 * number_2;
   
    }
    let resultado = calculadora(1,4);
    console.log(resultado)
    return(
            <div className="sabores">
                <Topo/>
                
                <section className="img-sabores">                   
                    <h2 className="titulo">NOSSOS SABORES</h2>
                </section>
                <h2 className="titulo-2">sabores de sorvetes</h2> 
                <section className="sor">                                                   
                <div className="sorvetes sorvete-oreo">
                    <img src="assets/sabor-oreo.jpg" alt="sorveteoreo"/>
                    <h3>Sorvete de Oreo</h3>
                    <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                </div>
                <div className="sorvetes sorvete-Pistache">
                    <img src="assets/sabor-pistache.png" alt="sorvete-pistache"/>
                    <h3>Sorvete Pistache</h3>
                    <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                </div>
                <div className="sorvetes sorvete-Cookies">
                    <img src="assets/sabor-cookies-avela.png" alt="sorvetes-avela"/>
                    <h3>Sorvete Cookies & Avelã</h3>
                    <p>O nosso melhor sorvete. Você vai adorar o sabor</p>
                </div>
                <div className="sorvetes sorvete-Kiwi">
                    <img src="assets/sorbet-kiwi.png" alt="sorvete-kiwi"/>
                    <h3>Sorvete de Kiwi</h3>
                    <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                </div>
                <div className="sorvetes sorvete-morango">
                    <img src="assets/sorbet-morango.png" alt="sorvete-morango"/>
                    <h3>Sorvete de Morango</h3>
                    <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                </div>
                <div className="sorvetes sorvete-Limão">
                    <img src="assets/sorbet-limao.png" alt="sorvetedeliamo"/>
                    <h3>Sorvete de Limão Siciliano</h3>
                    <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                </div>
                </section>
                <Rodape/>
            </div>

    )
}