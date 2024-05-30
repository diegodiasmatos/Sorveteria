import React from "react";
 import "./css.css";
export default function Footer() {
    return(
        <footer>
           <div className="card-footer">
           <img className="rodae" src="./assets/logo.png" alt="rodape" />
            <div className=" boco endereco">
                <h2> Endereco</h2>
                <p>AV.bernardio de campos</p>
                <p>sao paulo,09</p>
            </div>
            <div className="contato boco">
            <h2> contato</h2>
                <p>info@meusite.com</p>
                <p>tel:(11)3456-7890 </p>
            </div>
            <div className="Horarios boco">
            <h2> Horarios</h2>
                <p>Aberto todos os dias</p>
                <p>10:00-22:00</p>
            </div>
          
           </div>
           <p className="paragrafo-f">Gelateria. Orgulhosamente desenvolvido por Diego dias Matos</p>
     
        </footer>
    )
    
}