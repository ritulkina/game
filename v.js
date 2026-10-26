    let winuser = 0
    let wincomp = 0
    let number = 5
    let lives = 10
while (true){
    let a = prompt("Введите число от 1 до " + number)
    const random = Math.floor(Math.random() * number) + 1;
    if (a === "изменить")
    {
        let b = +prompt("Введите новое число до какого")
        while (Number.isNaN(b) || b < 1)
        {
            let b = +prompt("Введите новое число до какого")
        }
        number = b
        continue
    }
    a = Number(a)
    if (Number.isNaN(a) || a < 1 || a > number) {
        alert("Неверный ввод")
        continue
    }
    if (a == random)
    {
        winuser += 1
        alert("Победа пользователя! Побед уже:" + winuser)

    }
    else{
        wincomp += 1
        lives -= 1
        alert("Победа компьютера! Было загадано:" + random + " " + "Побед уже:" + " " + wincomp + " " + "Осталось жизней:" + lives)
    }
}

