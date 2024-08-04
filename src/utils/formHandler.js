export const handleSubmit = (event, formData) => {
    event.preventDefault();

    try {
        const response = { status: 200, message: 'Dados recebidos com sucesso!', formData, ok: true }

        if (!response.ok) {
            throw new Error('Erro ao enviar formulário')
        }

        const result = JSON.stringify(response)
        console.log('Formulário enviado com sucesso:', result)
    } catch (error) {
        console.error('Erro:', error)
    }
}
