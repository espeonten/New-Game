function move() {

if(keyDown("right") && p.x == width / 3) {
    p.x = width / 3 + width / 3
}
else if(keyDown("left") && p.x == width / 3 + width / 3) {
    p.x = width / 3
}
}
