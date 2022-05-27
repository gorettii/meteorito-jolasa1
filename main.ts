input.onButtonPressed(Button.A, function () {
    jokalaria.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    jokalaria.change(LedSpriteProperty.X, 1)
})
let meteorito: game.LedSprite = null
let jokalaria: game.LedSprite = null
jokalaria = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(1000)
    basic.pause(1500)
    meteorito = game.createSprite(2, 0)
})
