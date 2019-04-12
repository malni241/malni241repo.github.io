import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://localhost:8081/signin`;


    test('Login', async t => {

        await t
            .typeText('#emailAddress', 'christoph.klinar@gmail.com')
            .typeText('#pswrd', "mckmck")
            .click(Selector("*").withText("SIGN IN"))

    });


    test('Go to top images', async t => {

    // Test code
      await t
      .navigateTo( 'http://localhost:8081/topimages' )

});



    test('Go to users', async t => {

    // Test code
      await t
      .navigateTo( 'http://localhost:8081/users' )

});
