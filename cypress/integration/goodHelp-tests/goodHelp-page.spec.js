describe('GoodHelp testando UI'), () => {

    it('Botão de login funcionando corretamente', () => {
        cy.visit('/')

        cy.contains('Entre')
    });
}