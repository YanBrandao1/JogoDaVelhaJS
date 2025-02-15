
// Classe responsável por lidar com a lógica do jogo
class JogoDaVelha
{
    playerDaVez;
    vencedor;
    tabuleiro = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];

    constructor()
    {
        this.playerDaVez = "X";
        this.vencedor = false;
    }

    realizarJogada(event, parametro3){
        let parametros = [-1,-1];
        parametros = this.getParametros(parametros, parametro3);
        let parametro1 = parametros[0];
        let parametro2 = parametros[1];
        let posicaoVazia = this.verificaPosicaoVazia(parametro1, parametro2);
        let jogadaRealizada = false;
        if(posicaoVazia)
            jogadaRealizada = this.registrarNaPosicao(event, parametro1,parametro2);
        if(jogadaRealizada)
            {
                if(!this.existeUmVencedor())
                    this.setarJogadorDaVez();
            }
        return jogadaRealizada;
        
    }

    registrarNaPosicao(event, parametro1, parametro2)
    {
        this.tabuleiro[parametro1][parametro2] = this.playerDaVez;
        event.target.textContent = this.playerDaVez;
        return true;
    }

    verificaPosicaoVazia(parametro1, parametro2)
    {
            if(this.tabuleiro[parametro1][parametro2] === "")
                return true;
            return false;
    }

    getParametros(parametros, parametro3)
    {
        switch(parametro3)
        {
            case 0:
                parametros[0] = 0;
                parametros[1] = 0;
                break;
            case 1:
                parametros[0] = 0;
                parametros[1] = 1;
                break;
            case 2:
                parametros[0] = 0;
                parametros[1] = 2;
                break;
            case 3:
                parametros[0] = 1;
                parametros[1] = 0;
                break;
            case 4:
                parametros[0] = 1;
                parametros[1] = 1;
                break;
            case 5:
                parametros[0] = 1;
                parametros[1] = 2;
                break;
            case 6:
                parametros[0] = 2;
                parametros[1] = 0;
                break;
            case 7:
                parametros[0] = 2;
                parametros[1] = 1;
                break;
            case 8:
                parametros[0] = 2;
                parametros[1] = 2;
                break;
            default:
                return [-1,-1];
        }
        return parametros;
    }

    setarJogadorDaVez()
    {
        this.playerDaVez === "X" ? this.playerDaVez = "O" : this.playerDaVez = "X";
    }

    getPlayerDaVez()
    {
        return this.playerDaVez;
    }

    existeUmVencedor()
    {
        if(this.tabuleiro[0][0] === "X" && this.tabuleiro[0][1] === "X" && this.tabuleiro[0][2] === "X")
            return this.definirVencedor();

        else if(this.tabuleiro[0][0] === "O" && this.tabuleiro[0][1] === "O" && this.tabuleiro[0][2] === "O")
            return this.definirVencedor();
        
        else if(this.tabuleiro[1][0] === "X" && this.tabuleiro[1][1] === "X" && this.tabuleiro[1][2] === "X")
            return this.definirVencedor();
        
        else if(this.tabuleiro[1][0] === "O" && this.tabuleiro[1][1] === "O" && this.tabuleiro[1][2] === "O")
            return this.definirVencedor();

        else if(this.tabuleiro[2][0] === "X" && this.tabuleiro[2][1] === "X" && this.tabuleiro[2][2] === "X")
            return this.definirVencedor();

        else if(this.tabuleiro[2][0] === "O" && this.tabuleiro[2][1] === "O" && this.tabuleiro[2][2] === "O")
            return this.definirVencedor();

        else if(this.tabuleiro[0][0] === "X" && this.tabuleiro[1][0] === "X" && this.tabuleiro[2][0] === "X")
            return this.definirVencedor();

        else if(this.tabuleiro[0][0] === "O" && this.tabuleiro[1][0] === "O" && this.tabuleiro[2][0] === "O")
            return this.definirVencedor();

        else if(this.tabuleiro[0][1] === "X" && this.tabuleiro[1][1] === "X" && this.tabuleiro[2][1] === "X")
            return this.definirVencedor();

        else if(this.tabuleiro[0][1] === "O" && this.tabuleiro[1][1] === "O" && this.tabuleiro[2][1] === "O")
            return this.definirVencedor();

        else if(this.tabuleiro[0][2] === "X" && this.tabuleiro[1][2] === "X" && this.tabuleiro[2][2] === "X")
            return this.definirVencedor();

        else if(this.tabuleiro[0][2] === "O" && this.tabuleiro[1][2] === "O" && this.tabuleiro[2][2] === "O")
            return this.definirVencedor();

        else if(this.tabuleiro[0][0] === "X" && this.tabuleiro[1][1] === "X" && this.tabuleiro[2][2] === "X")
            return this.definirVencedor();

        else if(this.tabuleiro[0][0] === "O" && this.tabuleiro[1][1] === "O" && this.tabuleiro[2][2] === "O")
            return this.definirVencedor();

        else if(this.tabuleiro[0][2] === "X" && this.tabuleiro[1][1] === "X" && this.tabuleiro[2][0] === "X")
            return this.definirVencedor();

        else if(this.tabuleiro[0][2] === "O" && this.tabuleiro[1][1] === "O" && this.tabuleiro[2][0] === "O")
            return this.definirVencedor();

        return false;
    }

    definirVencedor()
    {
        return this.vencedor = true;
    }

    getVencedor()
    {
        return this.vencedor;
    }
}

// Inicializa a classe responsável por lidar com o jogo
let jogoDaVelha = new JogoDaVelha();


// Pega os elementos HTML para realizar a manipulação
let tabuleiro = document.querySelectorAll("td");

let botaoDeResetar = document.querySelector(".botaoResetar");

// Inicializa o texto que retorna para o usuário de quem é a vez da rodada
let currentPlayerTexto = document.querySelector("caption");

// Controla a realização das jogadas
let jogadaRealizada = false;


// Caso exista um vencedor, esta variável é setada como 'true' para impedir que o usuário faça outra jogada na mesma partida
let pararJogada = false;


// Caso o usuário clique no botão de resetar, o sistema recarrega a página, zerando a partida novamente
botaoDeResetar.addEventListener("click", () =>
{
    window.location.reload();
}
);


// Adição de um escutador de eventos a cada posição do tabuleiro
tabuleiro[0].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 0);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });
    
tabuleiro[1].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 1);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });

tabuleiro[2].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 2);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });
    
    
tabuleiro[3].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 3);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });

tabuleiro[4].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 4);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });

tabuleiro[5].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 5);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });

tabuleiro[6].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 6);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });

tabuleiro[7].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 7);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });

tabuleiro[8].addEventListener("click", (event) =>
    {
        if(!pararJogada)
            jogadaRealizada = jogoDaVelha.realizarJogada(event, 8);
        if(jogoDaVelha.getVencedor())
        {
            jogadaRealizada = false;
            currentPlayerTexto.textContent = `Vencedor: ${jogoDaVelha.getPlayerDaVez()}`;
            pararJogada = true;
        }
        else if(jogadaRealizada)
        {
                        currentPlayerTexto.textContent = `É a sua vez: ${jogoDaVelha.getPlayerDaVez()}`
        }
    });