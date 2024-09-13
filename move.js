function move() {

if(keyWentDown("space") && p.x == width / 3) {
    p.x = width / 3 + width / 3
}
else if(keyWentUp("space") && p.x == width / 3 + width / 3) {
    p.x = width / 3
}
}
