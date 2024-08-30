function move() {

if(keyDown("space") && p.x == 400) {
    p.x-=200
}
else if(keyDown("space") && p.x == 200) {
    p.x+=200
}
}