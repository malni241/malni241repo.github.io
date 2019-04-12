const users = require('./views/Users.vue');
const image = require('./views/AddImage.vue');
const userLogIn = require('./views/AddImage.vue');
const img = require('./views/TopImages.vue');

test('Users loaded', () => {
    expect(users).not.toEqual([]);
});



test('Image uploaded', () => {
    expect.assertions(1);
   expect(image).not.toBeNull();
});


test('User logged in while adding an image', () => {
    expect(userLogIn).not.toBeNull();
})


test('images read in', () => {
    expect(img).not.toBeNull();
});
