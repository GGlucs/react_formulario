import React from 'react';


function ContatoForm() {
  return (
    <div class = "container">
        <form class = "formulario" action="/action_page.php">
        <div>
            <label for="fname">Nome:</label>
            <input type="text" id="fname" name="fname"></input>
        </div>

        <div>
            <label for="femail">Email:</label>
            <input type="email" id="femail" name="femail"></input>
        </div>

        <div>
            <label for="fmensagem">Mensagem:</label>
            <textarea type="text" id="fmensagem" name="fmensagem"></textarea>
        </div>

        <button id="enviar" name="enviar" type="submit" class="button butEnviar">Enviar</button>
        </form>
    </div>
  );
}

export default ContatoForm;
