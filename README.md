# Braza: União pelo bem.

## Índice
1. [Como rodar o site](#como-rodar-o-site)
2. [Como rodar os testes](#como-rodar-os-testes)
3. [Links úteis](#links-úteis)
	- [Site hospedado](#site-hospedado)
	- [Idea conceitual](#idea-conceitual)
	- [Figma](#figma)
	- [Link da API](#link-da-api)
4. [Novas features futuras](#novas-features-futuras)

## Como rodar o site
Para rodar o site localmente, siga os passos abaixo:
1. Baixe as dependências:
```bash
npm install
```

2. Rode o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

3. Acesse [http://localhost:3000](http://localhost:3000) em seu navegador para ver o resultado.

## Como rodar os testes
Para rodar os testes, utilize o seguinte comando:
```sh
npx poku ./test/form_test.js --env-file='.env'
```

## Links úteis
### Site hospedado
O site esta hospedado [Aqui](https://hackthonamatata.vercel.app/)

### Idea conceitual
Confira a ideia conceitual do projeto [Aqui](https://docs.google.com/document/d/1YiqZvT2uzxHMtW_kI5QXQAUyQP81oFtCWT3JlyauUJ4/edit?usp=sharing). 

### Figma
O design do projeto está disponível no Figma [Aqui](https://www.figma.com/design/FPINtnyLxe5zzOkSM0Vgnc/Hackathonamatata-Template?node-id=0-1&t=VmR7TA4Jw2pxcyl1-1)

### Link da API
A API hospedada criada para este hackathon está disponível [Aqui](https://hackthonamatata-api-i83l.vercel.app/).
O repositório para a API está disponível [Aqui](https://github.com/LuizHenrique05/Hackthonamatata-api). 
Obs.: Endpoints estão descritos no Readme da API e nos testes utilizando o Poku.
## Novas features futuras
Aqui estão algumas funcionalidades planejadas para versões futuras do projeto:
- [ ] Criação completa da API para gestão da aplicação.
- [ ] Funcionalidade de login.
- [ ] Funcionalidade de cadastro.
- [ ] Funcionalidade para ONGs parceiras:
	- [ ] Visualizar imóveis para servir de abrigo durante crises.
	- [ ] Visualizar voluntários para entrar em contato solicitando ajuda.
	- [ ] Cadastrar campanhas.
- [ ] Disparar alertas e notificações no Whastapp e e-mail.
- [ ] Integração com serviços de pagamento para facilitar a doação em campanhas.

#### Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou entrar em contato. 
