function move() {

if(keyDown("space") && p.x == width / 3) {
    p.x = width / 3 + width / 3
}
else if(keyDown("space") && p.x == width / 3 + width / 3) {
    p.x = width / 3
}
}
