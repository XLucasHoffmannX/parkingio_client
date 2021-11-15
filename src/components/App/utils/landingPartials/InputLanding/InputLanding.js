import './inputLanding.css';

const InputLanding = ({ id, setId, generateNewId, rememberId, message, setMessage }) => {
    const onChangeInput = e => {
        const { name, value } = e.target;
        setId({ ...id, [name]: value })
    }
    return (
        <div className="form_client_id">
            <input type="text" name="id" value={id.id} onChange={onChangeInput} placeholder="Insira seu id de cliente" spellCheck="false" />
            {
                !message ?
                    <p>
                        Estava usando recentemente?  <span onClick={rememberId}>Pegue aqui seu id</span>
                    </p>
                : 
                <p className="message">
                    Você não possui nenhum id recente, crie ou gere um novo!
                </p>
            }

            <span className="btnLanding generate" onClick={generateNewId}>
                Gerar um id seguro
            </span>
        </div>
    )
}

export default InputLanding;