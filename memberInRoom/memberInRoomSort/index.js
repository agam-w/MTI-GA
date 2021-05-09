function memberInRoom(names,sort) {
    // CODE HERE
}

function test(fun, result) {
    console.log(fun===result)
}

test(memberInRoom([],"AZ"), 'only you in this room');
test(memberInRoom(['Andi'],"AZ"), 'You and Andi in this room');
test(memberInRoom(['Andi', 'Budi'],"ZA"), 'You, Budi and Andi in this room');
test(memberInRoom(['Bobby', 'Robby', 'Merry'],"AZ"), 'You, Bobby, Merry and Robby in this room');
test(memberInRoom(['Joe', 'Lola', 'Robert', 'Eric', 'Carla'],"ZA"), 'You, Robert, Lola and 3 others in this room');