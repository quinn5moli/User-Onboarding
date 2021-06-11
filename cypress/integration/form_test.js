describe('User Data Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    const nameInput = () => cy.get('input[id="inputName"]')
    const emailInput = () => cy.get('input[id="inputEmail"]')
    const passwordInput = () => cy.get('input[id="inputPassword"]')
    const termsInput = () => cy.get('input[type="checkbox"]')
    const submitButton = () => cy.get('button[id="submitBtn"]')

    it('filling out name input', () => {
        nameInput()
            .should('have.value','')
            .type('Quinn Molina')
            .should('have.value', 'Quinn Molina')
    })

    it('filling out email input', () => {
        emailInput()
            .should('have.value','')
            .type('me@quinn.com')
            .should('have.value', 'me@quinn.com')
    })

    it('filling out password input', () => {
        passwordInput()
            .should('have.value', '')
            .type('password')
            .should('have.value', 'password')
    })

    it('terms checkbox', () => {
        termsInput()
            .check()
            .uncheck()
    })

    it('submit complete form', () => {
        submitButton()
            .should('be.disabled')
            nameInput().type('Quinn Molina')
            emailInput().type('me@quinn.com')
            passwordInput().type('password')
            termsInput().check()
            submitButton().should('not.be.disabled')
    })

    it('do not submit incomplete form', () => {
        submitButton()
            .should('be.disabled')
            nameInput().type('Quinn Molina')
            termsInput().check()
            submitButton().should('be.disabled')
    })
    
})