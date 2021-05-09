function memberInRoom(names) {
    // CODE HERE
}

function test(fun, result) {
    console.log(fun==result)
}

test(memberInRoom([]), 'only you in this room');
test(memberInRoom(['Andi']), 'You and Andi in this room');
test(memberInRoom(['Andi', 'Budi']), 'You, Andi and Budi in this room');
test(memberInRoom(['Bobby', 'Robby', 'Merry']), 'You, Bobby, Robby and Merry in this room');
test(memberInRoom(['Joe', 'Lola', 'Robert', 'Eric', 'Carla']), 'You, Joe, Lola and 3 others in this room');