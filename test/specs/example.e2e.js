describe('JSON.org page', () => {
    it('should run the same code as in "example_failing_performance.e2e.js", but without performance', () => {
        browser.url('http://json.org')
        $('=Esperanto').click()
    })
})