Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
Для чого потрібно викликати super() у конструкторі класу-нащадка?

Прототипне наслідування, це дуже зручно та ефективно, можна навести аналогію про будинок. Класс це в цілому будинок а прототип це склад в якому існують потрібні методи, до яких ми можемо звернутись в будь який момент. Коли ми будемо сворювати багато об'єктів то нам не обов'язково мати до кожного той самий метод він зберігається в прототипі. Тому прототипне наслідування це можливість звернутись до певного методу не копіюючи його.

Super() - Викликається тоді коли ми наслідуємо клас в іншому класі, для ініціалізації констурктора в нащадку що б дістатись до змінних в батьківському классі ми викликаємо super(), також це є обов'язковим.

<--- English translate--->

Explain in your own words how you understand how prototypical inheritance works in Javascript
Why do you need to call super() in the constructor of a descendant class?

Prototypical inheritance is very convenient and effective, you can make an analogy about a house. A class is a house in general, and a prototype is a warehouse in which there are the necessary methods that we can access at any time. When we create many objects, we do not necessarily have to have the same method for each of them, it is stored in the prototype. Therefore, prototypical inheritance is the ability to access a specific method without copying it.

Super() - Called when we inherit a class from another class, to initialize the constructor in the descendant in order to get to the variables in the parent class, we call super(), this is also mandatory.
