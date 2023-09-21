# unimech-test-task

1. theory_1, ответ:

Данный код выведет 4 раза undefined (Bad: undefined, Bad: undefined, Good: undefined, Good: undefined).
Потому что каждый setTimeout будет обращаться к переменной объявленной с помощью var, которая имеет функциональную область видимости.
И на момент вызова она будет равна всегда 4, т. к. на момент завершения цикла последний "i++" выдал 4.
И раз у массива нет 4-го элемента, будет undefined.

Чтобы это исправить можно вместо var использовать let, и т. к. let имеет блочную область видимости, и
для каждого setTimeout будет разное значение let в контексте вызова.

Также можно использовать замыкание, то есть создать новую функцию внутри цикла, передать в качестве аргумента i, внутри
создать setTimeout, и сразу вызывать новую функцию, тогда она будет использовать каждый раз "свою" переменную i.

2. practice_1 - https://elisy69.github.io/unimech-test-task/practice_1/index.html
   
3. practice_2 - https://elisy69.github.io/unimech-test-task/practice_2/index.html
   
4. practice_3 - https://elisy69.github.io/unimech-test-task/practice_3/index.html
