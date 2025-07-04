function Irmao1 (props){
    return(
        <div>
            <button onClick={()=> props.enviarMensagem("Mensagem enviada pelo irmão 1")}>
            enviar mensagem para o irmão 2
            </button>
        </div>

    );
}
export default Irmao1