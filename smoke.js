describe('Smoke monitoring on tesla.com', () => { 
  describe('HomePage', () => {
    it('Open', () => {
      browser.url('https://www.tesla.com/')
      const title = 'Electric Cars, Solar & Clean Energy | Tesla'
      const titleElm = $(`//title[contains(text(),"${title}")]`)
      browser.waitForloadEventEnd()
      expect(titleElm.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true

    });
  });
  describe('Model X', () =>{
    it('Detail of Model X', () => {
     const popup = $('/html/body/dialog/button/i')
     popup.click()
     browser.waitForloadEventEnd()
     const modelx = $('/html/body/div[1]/div/header/div[2]/div/nav/nav[1]/ol/li[3]/a')
     modelx.waitForExist();
     modelx.click()
     const title = 'Model X | Tesla'
     const titleElmModelX = $(`//title[contains(text(),"${title}")]`)
     browser.waitForloadEventEnd()
     expect(titleElmModelX.waitForExist({timeoutMsg: "Element title not found. The page couldn't be loaded in time."})).to.be.true
    });
   
    it('Buy Model X', () => {
    browser.waitForloadEventEnd()  
    const objednat = $('.hero-callouts--button > a:nth-child(1)')
    objednat.waitForExist()
    objednat.click()
    });
  });
})




